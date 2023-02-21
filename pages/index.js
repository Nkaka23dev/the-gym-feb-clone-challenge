import Navbar from "@/components/Navbar";
import { data2, data3, myImage } from "@/data";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import localFont from '@next/font/local'
import News from "@/components/News";
import Science from "@/components/Science";

const robo = localFont({ src: '../public/roboto-latin-400-normal.woff2', display: 'swap' })

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="px-5 lg:px-0 mt-20 lg:mt-16 lg:max-w-[98rem]">
        <div className="max-w-[78rem]   bg-white mx-auto grid lg:pb-[4rem] pb-[6rem] pt-7">
          <p className="m-auto lg:pb-7 lg:px-6 px-3 lg:text-[2rem] text-[2.8rem] lg:max-w-full  max-w-[52rem] font-light text-[#333333] leading-[3.5rem] pb-9 lg:leading-10">You don’t just become something, you become someone</p>
        </div>
      </section>
      <section className="px-5 lg:px-0 -mt-16 relative z-10">
        <div className="max-w-[61rem] mx-auto lg:grid-cols-1 grid grid-cols-5 items-center ">
          <div className="py-8  relative lg:px-4 px-10 col-span-3 flex justify-between bg-[#0077B3]">
            <input type="text" placeholder="Search..." className="w-full bg-[#0077B3] placeholder-white font-light text-white text-[1.35rem] lg:text-[1.1rem] caret-violet-50 border-b border-white focus:outline-none" />
            <svg className=" text-white absolute lg:right-2 lg:top-8 right-10 top-[2.3rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="bg-white shade2 col-span-2 py-8 px-5 lg:px-4 items-center flex justify-between">
            <div>
              <p className="text-[1.35rem] lg:text-[1.2rem]  text-[#0077B3]">About VIJ Amsterdam</p>
            </div>
            <svg className="fill-[#0077B3]" xmlns="http://www.w3.org/2000/svg" width="26px" height="28px" viewBox="0 0 24 24" fill="#0077B3">
              <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#0077B3" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>
      {/* background image */}
      <section className="-mt-12 block lg:hidden">
        <div className="max-w-[130rem]  mx-auto h-[30rem] lg:h-[20rem]" style={{
          backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/4e8b9c68-eb73-43dd-804f-fcc68845046e/RP_61_C%26M_Homepage_2200x720%5B41%5D.jpg")`,
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}>

        </div>
      </section>

      {/* backgound sm */}
      <section className="lg:block hidden">
        <div className="">
          <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/4e8b9c68-eb73-43dd-804f-fcc68845046e/RP_61_C%26M_Homepage_2200x720%5B41%5D.jpg" className="object-cover aspect-video" alt="" />
        </div>
      </section>

      <section className="px-5 lg:px-0 -mt-10 lg:-mt-0 lg:pb-16">
        <div className="max-w-[78rem] mx-auto lg:px-5 lg:pt-2 px-16 bg-white lg:pb-7 pb-40 pt-10 flex  justify-around items-center lg:justify-center">
          {[{
            text: "31.704 students",
            img: "./hat.png"
          }, {
            text: "31.704 students",
            img: "./earth.png"
          }, {
            text: "31.704 students",
            img: "./defense.png"
          }, {
            text: "31.704 students",
            img: "./tt.png"
          },].map((val, index) => {
            return (
              <div key={index} className="flex lg:flex-col lg:justify-center space-x-2 items-center justify-between">
                <div className="">
                  <img className={`lg:mr-12 ${index === 0 ? "mt-3 w-11" : "w-9"} ${index === 2 || index === 1 ? "-mt-1 w-9" : "w-9"} md:w-7`} src={val.img} alt="" />
                </div>
                <div>
                  <p className={`only:text-md lg:text-sm tracking-wider font-semibold ${robo.className}`}>31.704 students</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="max-w-[78rem] mx-auto lg:px-3 px-32 gap-5 bg-[#FAF7F5] lg:py-0 py-20 lg:grid-cols-1 grid grid-cols-2">
          {["Education", "Research"].map((value, idx) => {
            return (
              <div className="bg-white py-10 px-7 lg:-mt-0 -mt-44 shade">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-[2.35rem] font-medium text-[#0077B3]">{value}</h1>
                  </div>
                  <div>
                    {data2[0]}
                  </div>
                </div>
                <div className="mt-[1.50rem]">
                  {["Bachelor's programmes", "Master's programmes", "Honours programme", "Education for professionals", "Study guide"].map((v, i) => {
                    return (
                      <div className="mt-[0.15rem] flex justify-between items-center" key={i}>
                        <p style={{
                          fontWeight: '500'
                        }} className={`${robo.className} opacity-90 text-lg`}>{v}</p>
                        <svg className="fill-[#0077B3]" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="#000000">
                          <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-5 lg:px-4">
        <div className="max-w-[78rem] lg:max-w-7xl mx-auto lg:py-0  py-16 bg-white">
          <div className="bg-[#0077B3] px-20 lg:px-6 max-w-5xl lg:max-w-7xl mx-auto lg:pt-8 py-12 items-center flex lg:flex-col justify-between">
            <div className="text-2xl lg:text-[1.3rem] lg:text-center lg:max-w-[18rem] font-semibold text-white">
              <p>Do you also want to change your world?</p>
            </div>
            <div className="justify-center bg-white text-black lg:mt-10">
              <p className="text-2xl  font-semibold px-7 py-3 lg:max-w-xs lg:text-center  text-[#333333]">Visit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
      {/* impact */}
      <section className="px-5">
        <div className="max-w-[78rem] mx-auto lg:py-6 py-10 pt-16 bg-[#FAF7F5]">
          <h1 className="text-[2.4rem] lg:px-2  px-32 text-[#cc4100]">Impact</h1>
        </div>
      </section>

      {/* second background impact on desk top */}
      <section className="block lg:hidden">
        <div className="max-w-[78rem]  mx-auto py-72 lg:py-52 relative" style={{
          backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1")`,
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}>
          <div className="items-center lg:bottom-0 lg:right-0 impact justify-center lg:flex absolute right-[19.4rem] -bottom-24">
            <div className="bg-gray-300 absolute top-6 w-full h-[0.4px]"></div>
            <div className="pt-16 pl-16  space-y-6 bg-white grid lg:-mt-24 ">
              <h5 className="text-[24px]  leading-[36px] font-light text-[#CC4100]">
                Science to impact
              </h5>
              <p className={`text-lg opacity-80 mr-16 leading-[30px] max-w-md ${robo.className}`}>
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <Link
                href="#"
                className={`${robo.className} flex items-center gap-6 bg-white`}
              >
                <span className={`${robo.className}  text-lg `}>Read more</span>
                <svg Name="fill-[#000000]" className="" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                  <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
              <div className="flex items-center ml-auto gap-4">
                <div className="flex items-center">
                  <RxDotFilled className="text-6xl text-[#CC4100]" />
                  <RxDotFilled className="text-4xl text-[#CC4100]" />
                  <RxDotFilled className="text-4xl text-[#CC4100]" />
                  <RxDotFilled className="text-4xl text-[#CC4100]" />
                </div>
                <div className="py-2 px-1 cursor-pointer flex gap-4 bg-[#FCD3B6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAF7F5] max-w-[78rem] mx-auto py-16 ">
        </div>
      </section>
      <Science/>
      {/* card that will trigger first coursel on an old man */}
      <section className="px-5 bg-red-500">

      </section>
      {/* Ukraine section */}
      <section className="px-5 lg:px-0">
        <div className="max-w-[78rem] lg:max-w-full lg:px-2 mx-auto px-28 gap-10 bg-white py-20 grid lg:grid-cols-1 grid-cols-2">
          {[{ name: "Ukraine", desc: "Information and support" }, { name: "VU & Corona", desc: "" }].map((value, idx) => {
            return (
              <div className="bg-white pt-10 px-6 flex space-y-20 justify-between shade">
                <div>
                  <h1 className={`font-medium text-2xl ${idx === 0 ? "text-[#008058]" : "text-black"}`}>{value.name}</h1>
                  <p className="py-5">{value.desc}</p>
                </div>
                <div className="mt-4">

                  <svg Name="fill-[#000000]" className="self-end mt-7 mb-3 ml-auto" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* next section */}
      <section className="px-5 lg:hidden lg:px-0">
        {/* impact */}
        <div className="max-w-[78rem] mx-auto lg:mr-auto lg:py-0 pt-10 bg-[#FAF7F5]">
          <h1 className="text-4xl lg:px-0 px-20 text-[#3B2171]">News</h1>
        </div>
        <div className="max-w-[78rem] mx-auto lg:px-0 px-20 bg-[#FAF7F5] grid lg:pb-0 pb-20">
          <div className="flex lg:flex-col justify-between gap-10">
            <div className="">
              {["https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png"].map((value, idx) => {
                return (
                  <div key={idx} className="grid lg:hidden  grid-cols-7 gap-7 lg:mt-5 mt-10">
                    <div className="col-span-4">
                      <img src={value} className="aspect-video h-52" alt="" />
                    </div>
                    <div className="col-span-3 grid">
                      <h1 className={`text-[#3B2171] ${robo.className} text-lg font-semibold`}>08 Feb 2023</h1>
                      <h1 className="text-2xl -mt-8 tracking-wide max-w-[16rem]">Earthquakes Turkey and
                        Syria</h1>
                      <svg Name="fill-[#000000]" className="self-end ml-auto" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                        <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>

                  </div>
                )
              })}
            </div>
            <div className="space-y-20 flex-1 ">
              {["https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png"].map((value, idx) => {
                return (
                  <div className="flex gap-3 mt-10">
                    <img src={value} className="aspect-square w-32 h-24 object-cover  " alt="" />
                    <div className="flex justify-between">
                      <div>
                        <h1 className={`text-[#3B2171] ${robo.className} text-lg font-semibold`}>08 Feb 2023</h1>
                        <h1 className="tracking-wide max-w-[10rem] text-lg mt-2">Earthquakes Turkey and
                          Syria</h1>
                      </div>
                      <svg Name="fill-[#000000]" className="self-end" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                        <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="max-w-[78rem] grid mx-auto py-10 bg-[#FAF7F5]">
          <div className="m-auto flex items-center gap-2">
            <h1 className={`text-xl ${robo.className}  lg:px-0 lg:text-lg`}>News overview</h1>
            <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
              <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>
       <News/>
      {/* next section */}
      <section className="px-5 lg:hidden">
        <div className="max-w-[78rem] px-32 bg-white mx-auto">
          <div className="grid grid-cols-2 items-center pt-16 pb-3">
            <div>
              <h1 className={`text-4xl  text-[#0077B3]`}>Calendar</h1>
            </div>
            <div className={`flex lg:flex-col gap-6 ${robo.className}`}>
              <div className={`opacity-80 font-semibold py-2 items-center px-3 shade flex justify-between  text-lg  w-64`}>
                All categories
                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className="py-2 flex justify-between items-center opacity-80 font-semibold text-lg  px-3 shade border-gray-500 w-64">
                Date
                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
            </div>
          </div>

          {/* next this in this section */}
          <div className="grid lg:grid-cols-1 grid-cols-4 text-xl  border-b-2 border-[#0077b3] pb-20 items-center gap-6 pt-10">
            {[
              {
                item: "Other events",
                deck: "21 February 2023",
                v: "Board game night - Life is Better in 3D"
              },
              {
                item: "Lectures",
                deck: "21 February 2023",
                v: "Board game night - Life is better "
              },
              {
                item: "Social events",
                deck: "21 February 2023",
                v: "Board game night - Life is better  "
              },
              {
                item: "Other events",
                deck: "21 February 2023",
                v: "Board game night - Life is Better in 3D"
              }
            ].map((val, index) => {
              return (
                <div>
                  <h1 className="underline text-[1.15rem] " >{val.item}</h1>
                  <h1 className={` ${robo.className} mt-3 text-[1.15rem] font-semibold text-[#0077b3]`}>{val.deck}</h1>
                  <div className="mt-4">
                    {[1].map((e, idx) => {
                      return (
                        <div className="mt-1">
                          <h1 className="text-2xl">{val.v}</h1>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-between items-center pb-16">
            <div className="flex gap-4 items-center">
              <h1 className={`${robo.className} text-xl font-normal`}>View calendar</h1>
              <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="ml-auto px-1 cursor-pointer py-2 flex gap-4 bg-[#DFF2FD]">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          </div>
        </div>
      </section>
      {/* nextsection to calender */}

      <section className="px-5 lg:px-4">
        <div className="max-w-[78rem] bg-[#FAF7F5] lg:max-w-7xl mx-auto lg:py-0  py-16">
          <div className="bg-[#0077B3] px-20 lg:px-6 max-w-5xl lg:max-w-7xl mx-auto lg:pt-8 py-12 items-center flex lg:flex-col justify-between">
            <div className="text-2xl lg:text-[1.3rem] lg:text-center lg:max-w-[18rem] font-semibold text-white">
              <p>Working at VU Amsterdam?</p>
            </div>
            <div className="justify-center  bg-white text-black lg:mt-10">
              <p className="text-2xl  font-semibold px-7 py-3 lg:max-w-xs lg:text-center  text-[#333333]">Take a look at our vacancies!</p>
            </div>
          </div>
        </div>
      </section>
      {/* We are VU Amsterdam */}
      <section className="block ">
        <div className="max-w-[78rem] mx-auto overflow-hidden bg-white pb-12 grid">
          <div className="max-w-[78rem] mr-auto lg:mr-auto lg:py-0">
            <h1 className={`text-4xl lg:px-0 px-36 text-[#CC4100] pb-10 pt-20`}>We are VU Amsterdam</h1>
          </div>
          <div className="flex -ml-56 lg:ml-0 pb-32">
            {["https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&dpr=1", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1"].map((val, idx) => {
              return (
                <div className="max-w-[23%] lg:max-w-[35%] lg:basis-[35%] lg:px-3 px-8 duration-300 h-full cursor-pointer basis-[23%] flex-grow-0 flex-shrink-0">
                  <img className="object-cover object-center aspect-video w-full h-full" src={val} alt="" />
                  <div className="grid space-y-4 mt-8">
                    <h1 className="text-2xl text-[#CC4100] ">Vrije Schrijver (Writer in
                      Residence)</h1>
                    <p className={`${robo.className} text-[1.15rem]`}>Read more</p>
                    <div className="ml-auto  py-3">
                      <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                        <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="ml-auto py-2 px-1 mt-28 cursor-pointer  flex gap-4 bg-[#FCD3B6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
        </div>
      </section>
      {/* Ukraine section */}
      <section className="px-5 lg:hidden">
        <div className="max-w-[78rem] mx-auto lg:mr-auto lg:py-0 bg-[#FAF7F5]">
          <h1 className={`text-4xl lg:px-0 px-32 text-[#008053]  pb-10 pt-20`}>Take a look</h1>
        </div>
        <div className="max-w-[78rem] mx-auto lg:px-0 px-32 lg:gap-0 gap-10 bg-[#FAF7F5] lg:py-0 pb-20 grid grid-cols-2 lg:flex">
          <div className="bg-white lg:max-w-2xl pt-8 px-7 space-y-28 lg:pb-28 grid shade max-w-xs">
            <h1 className="text-[1.5rem] text-[#008053] ">VIJ Campus Tour</h1>
            <div className="ml-auto py-8">
              <svg className="fill-[#0077B3]" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="#000000">
                <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Ukraine section  mobile*/}
      <section className="hidden lg:block bg-[#FAF7F5] ">
        <div className="pb-24 bg-white p-10 shade m-5">
          <div className="">
            <h1 className="text-xl text-[#008058]">VIJ Campus Tour</h1>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-0">
        <div className="max-w-[78rem] lg:max-w-full lg:px-0 px-32 bg-white py-16 mx-auto">
          {/* next this in this section */}
          <div className="grid lg:grid-cols-1 grid-cols-3 lg:gap-0 gap-6">
            {data3.map((val, index) => {
              return (
                <div className="">
                  <div>
                    <h1 className={`text-[2.30rem]  lg:px-6 lg:text-[1.5rem] ${index === 1 ? "text-[#CC4100]" : index === 0 ? "text-[#0077B3]" : "text-[#008053]"}`}>{val.item}</h1>
                  </div>
                  <div className=" h-[80%]  flex flex-col justify-between relative">
                    <div className="shade flex justify-beteen h-full flex-col px-7 pb-10 py-5 lg:pb-16 ">
                      {val.desc.map((v, i) => {
                        return (
                          <div className="flex justify-between items-center">
                            <div className={` ${robo.className} mt-[0.35rem] text-lg `}>
                              {v}
                            </div>
                            <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                              <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        )
                      })}
                    </div>
                    {/* Icons mobile version */}
                    <div className="sm:flex gap-2 pl-6 -mt-14 pt-10  bg-white pr-16 hidden items-center ">
                      {val.icons.map((e, idx) => {
                        return (
                          <div key={idx} className="px-[0.1rem] bg-[#0077B3]">
                            {e}
                          </div>
                        )
                      })}
                    </div>
                    {/* icons desktop version */}
                    <div className="flex space-x-1 gap-1 px-7 -right-[0.6rem] lg:hidden items-center absolute bottom-3">
                      {val.icons.map((e, idx) => {
                        return (
                          <div key={idx} className="px-[0.1rem] bg-[#0077B3]">
                            {e}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* last section footer */}
      <section className={`${robo.className} px-5 lg:px-0 `}>
        <div className="max-w-[78rem] py-4 lg:space-y-0 space-y-6 lg:px-6 px-32 bg-[#0077b3] text-white mx-auto">
          <div className="flex lg:grid lg:grid-cols-1 gap-5 lg:gap-0">
            {["Privacy Statement", "Disclaimer", "Safety at VU Amsterdam", "Colofon", "Cookie Settings", "Web archive"].map((val, index) => {
              return (
                <div className="mt-4 lg:mt-2 flex gap-1 items-center">
                  <h1 className="text-md  tracking-wide whitespace-nowrap ">{val}</h1>
                  <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              )
            })}
          </div>
          <div className="lg:pb-4 lg:pt-5">
            <h1 className="lg:max-w-xs">Copyright &copy;
              2023 - Vrije Universiteit Amsterdam</h1>
          </div>
        </div>
      </section>
    </>
  )

}
