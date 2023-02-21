import Navbar from "@/components/Navbar";
import { data2, data3 } from "@/data";
import Link from "next/link";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew, AiOutlineArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="px-5 lg:px-0 mt-20 lg:mt-16 lg:max-w-[98rem]">
        <div className="max-w-[78rem] shade  bg-[#FDFDFD] mx-auto grid lg:pb-[4rem] pb-[6rem] pt-7">
          <p className="m-auto lg:px-6 px-3 lg:text-[2rem] text-[2.8rem] lg:max-w-full  max-w-[52rem] font-light text-[#333333] lg:leading-10">You don’t just become something, you become someone</p>
        </div>
      </section>
      <section className="px-5 lg:px-0  -mt-10 relative z-10">
        <div className="max-w-[61rem] mx-auto lg:grid-cols-1 grid grid-cols-5 items-center ">
          <div className="py-7 relative lg:px-4 px-10 col-span-3 flex justify-between bg-[#0077B3]">
            <input type="text" placeholder="Search..." className="w-full bg-[#0077B3] placeholder-white font-light text-white text-[1.35rem] lg:text-[1.1rem] caret-violet-50 border-b border-white focus:outline-none" />
            <svg className=" text-white absolute lg:right-2 lg:top-7 right-10 top-8"
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
          <div className="bg-white shade col-span-2 py-7 px-5 lg:px-4 items-center flex justify-between">
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
      <section className="-mt-12">
        <div className="max-w-[130rem]  mx-auto py-60" style={{
          backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883a3f00-09ba-48b4-ba79-5de8eee6b868/CH_C119530b_BA_home_hero_2200x720.jpg?w=2200&h=720&fit=clip&rect=0,1,2200,720")`,
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}>

        </div>
      </section>

      <section className="px-5 lg:px-0 -mt-10 lg:-mt-0 lg:pb-16">
        <div className="max-w-[78rem] mx-auto lg:px-0 lg:pt-2 px-16 bg-white lg:pb-7 pb-40 pt-10 flex  justify-around items-center">
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
              <div key={index} className="flex lg:flex-col  space-x-4 items-center justify-between">
                <img className="w-10 md:w-7" src={val.img} alt="" />
                <p className="text-md lg:text-sm font-bold tracking-wider">31.704 students</p>
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
                <div className="mt-6">
                  {["Bachelor's programmes", "Master's programmes", "Honours programme", "Education for professionals", "Study guide"].map((v, i) => {
                    return (
                      <div className="mt-[0.15rem] flex justify-between items-center" key={i}>
                        <p style={{
                          fontWeight: '500'
                        }} className="text-lg">{v}</p>
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
        <div className="max-w-[78rem] mx-auto py-10 pt-16 bg-[#FAF7F5]">
          <h1 className="text-4xl font-medium px-32 text-[#cc4100]">Impact</h1>
        </div>
      </section>

      {/* second background */}
      <section className="relative">
        <div className="max-w-[78rem]  mx-auto py-72" style={{
          backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1")`,
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}>

        </div>
        <div className="max-w-sm mx-auto px-20 bg-[#f2efed] py-16 flex justify-between">
          <div className="items-center justify-center lg:flex absolute right-[26rem] bottom-16">
            <div className="p-4 px-10 py-10 space-y-6 bg-white lg:-mt-24 ">
              <h5 className="text-[24px] leading-[36px] font-light text-orange-900">
                Science to impact
              </h5>
              <p className="text-lg leading-[30px] max-w-lg">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <Link
                href="#"
                className="flex items-center h-full gap-4 bg-white"
              >
                <span className="text-base font-bold">Read more</span>

              </Link>
              <div className="flex items-center justify-end gap-4 mt-6">
                <div className="flex items-center">
                  <RxDotFilled className="text-6xl text-orange-900" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#fcd3b6]">
                  <MdOutlineArrowBackIosNew />
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* card that will trigger first coursel on an old man */}
      <section className="px-5">

      </section>
      {/* Ukraine section */}
      <section className="px-5 lg:px-0">
        <div className="max-w-[78rem] lg:max-w-full lg:px-2 mx-auto px-28 gap-10 bg-white py-20 grid lg:grid-cols-1 grid-cols-2">
          {[1, 2].map((value, idx) => {
            return (
              <div className="bg-white pt-10 px-6 pb-20 shade">
                <h1 className={`font-medium text-2xl ${idx === 0 ? "text-[#008058]" : "text-black"}`}>Ukraine</h1>
                <div className="mt-4">
                  <p>Information and support</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* next section */}
      <section className="px-5 lg:px-0">
        {/* impact */}
        <div className="max-w-[78rem] mx-auto lg:mr-auto lg:py-0 py-10 bg-[#FAF7F5]">
          <h1 className="text-4xl lg:px-0 px-32 text-[#3B218F]">News</h1>
        </div>
        <div className="max-w-[78rem] mx-auto lg:px-0 px-20 bg-[#FAF7F5] grid lg:pb-0 pb-20">
          <div className="flex lg:flex-col justify-between gap-10">
            <div className="">
              {[1, 2].map((value, idx) => {
                return (
                  <div className="grid lg:hidden  grid-cols-7 gap-7 lg:mt-5 mt-10">
                    <div className="col-span-4">
                      <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png" className="aspect-video h-52" alt="" />
                    </div>
                    <div className="col-span-3">
                      <h1>08 Feb 2023</h1>
                      <h1 className="text-2xl mt-4 tracking-wide max-w-[16rem]">Earthquakes Turkey and
                        Syria</h1>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="space-y-20 flex-1 ">
              {[1, 2, 3].map((value, idx) => {
                return (
                  <div className="flex gap-3 mt-10">
                    <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png" className="aspect-video w-32 h-24 object-cover aspect-video " alt="" />
                    <div className="">
                      <h1>08 Feb 2023</h1>
                      <h1 className="tracking-wide max-w-[10rem] text-lg mt-2">Earthquakes Turkey and
                        Syria</h1>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="max-w-[78rem] grid mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-2xl m-auto lg:px-0 lg:text-lg lg:font-semibold px-32 ">News overview</h1>
        </div>
      </section>

      {/* next section */}
      <section className="px-5 lg:hidden">
        <div className="max-w-[78rem] px-32 bg-white mx-auto">
          <div className="grid grid-cols-2 items-center pt-16 pb-3">
            <div>
              <h1 className="text-4xl font-semiboldbold text-[#0077B3] ">Calender</h1>
            </div>
            <div className="flex lg:flex-col gap-6">
              <div className="py-2 px-3 shade font-bold  text-lg  w-64">
                All categories
              </div>
              <div className="py-2  font-bold  px-3 shade border-gray-500 w-64">
                Date
              </div>
            </div>
          </div>

          {/* next this in this section */}
          <div className="grid lg:grid-cols-1 grid-cols-4 text-xl  items-center gap-6 pt-10">
            {[
              {
                item: "PhD Defences"
              },
              {
                item: "Social events"
              },
              {
                item: "Other events"
              },
              {
                item: "Lectures"
              }
            ].map((val, index) => {
              return (
                <div>
                  <h1 className="underline" >Other events</h1>
                  <div className="mt-2">
                    {[1, 2, 3].map((e, idx) => {
                      return (
                        <div className="mt-1">
                          <h1>ABRI Writing Boost</h1>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* nextsection to calender */}

      <section className="px-5 lg:px-4">
        <div className="max-w-[78rem] lg:max-w-7xl mx-auto lg:py-0  py-16 bg-white">
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
      <section className="block lg:hidden">
        <div className="max-w-[78rem] mx-auto overflow-hidden py-20 bg-white">
          <div className="flex lg:hidden -ml-40">
            {[1, 2, 3, 4, 5].map((val, idx) => {
              return (
                <div className="max-w-[23%] px-8  basis-[23%] flex-grow-0 flex-shrink-0 ">
                  <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1" alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* Ukraine section */}
      <section className="px-5 lg:hidden">
        <div className="max-w-[78rem] mx-auto lg:px-0 px-32 lg:gap-0 gap-10 bg-[#FAF7F5] lg:py-0 py-20 grid grid-cols-2 lg:flex">
          {[1].map((value, idx) => {
            return (
              <div className="bg-white lg:max-w-2xl pt-8 px-4 pb-44 lg:pb-28 shade max-w-xs">
                <h1 className="text-2xl">VIJ Campus Tour</h1>
              </div>
            )
          })}
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
                    <h1 className={`text-[2.30rem] lg:font-normal lg:px-6 lg:text-[1.5rem] ${index === 1 ? "text-[#CC4100]" : index === 0 ? "text-[#0077B3]" : "text-[#008053]"}`}>{val.item}</h1>
                  </div>
                  <div className=" h-[80%] flex flex-col justify-between relative">
                    <div className="shade flex justify-beteen h-full flex-col px-7 py-5 lg:pb-16 ">
                      {val.desc.map((v, i) => {
                        return (
                          <div className="flex justify-between">
                            <div className="mt-[0.35rem] text-lg font-normal ">
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
                    <div className="sm:flex gap-2 pl-6 pr-16 hidden items-center ">
                      {val.icons.map((e, idx) => {
                        return (
                          <div className="h-12 " key={idx}>
                            <img className="w-full h-full object-cover object-center aspect-video" src={e} alt="" />
                          </div>
                        )
                      })}
                    </div>
                    {/* icons desktop version */}
                    <div className="flex gap-1 px-7 lg:hidden items-center absolute bottom-3">
                      {val.icons.map((e, idx) => {
                        return (
                          <div className="h-12" key={idx}>
                            <img className="w-full h-full object-cover object-center aspect-video" src={e} alt="" />
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
      <section className="px-5 lg:px-0 lg:font-extrabold">
        <div className="max-w-[78rem] py-4 lg:space-y-0 space-y-6 lg:px-6 px-32 bg-[#0077b3] text-white mx-auto">
          <div className="flex lg:grid lg:grid-cols-2 gap-5 lg:gap-0">
            {["Privacy Statement", "Disclaimer", "Safety at VU Amsterdam", "Colofon", "Cookie Settings", "Web archive"].map((val, index) => {
              return (
                <div className="mt-4 lg:mt-2 flex gap-1 items-center">
                  <h1 className="text-md font-medium tracking-wide whitespace-nowrap ">{val}</h1>
                  <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              )
            })}
          </div>
          <div className="font-medium lg:pb-4 lg:pt-5">
            <h1 className="lg:max-w-xs">Copyright &copy;
              2023 - Vrije Universiteit Amsterdam</h1>
          </div>
        </div>
      </section>
    </>
  )

}
