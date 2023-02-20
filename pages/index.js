import Navbar from "@/components/Navbar";
import { data2, data3 } from "@/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="px-5 mt-20">
        <div className="max-w-[78rem] shade bg-[#FDFDFD] mx-auto grid pb-[6rem] pt-7">
          <p className="m-auto px-3 text-[2.8rem] max-w-[52rem] font-light text-[#333333]">You don’t just become something, you become someone</p>
        </div>
      </section>
      <section className="px-5 -mt-10 relative z-10">
        <div className="max-w-[61rem] mx-auto grid grid-cols-5 items-center ">
          <div className="py-7 relative px-10 col-span-3 flex justify-between bg-[#0077B3]">
            <input type="text" placeholder="Search..." className="w-full bg-[#0077B3] placeholder-white font-light text-white text-[1.35rem] caret-violet-50 border-b border-white focus:outline-none" />
            <svg className=" text-white absolute right-10 top-8"
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
          <div className="bg-white col-span-2 py-7 px-5 items-center flex justify-between">
            <div>
              <p className="text-[1.35rem]  text-[#0077B3]">About VIJ Amsterdam</p>
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

      <section className="px-5 -mt-10">
        <div className="max-w-[78rem] mx-auto px-24 bg-white pb-40 pt-10 flex justify-between">
          {[1, 2, 3, 4].map((val, index) => {
            return (
              <div>
                <p>31.704 students</p>
              </div>
            )
          })}
        </div>
        <div className="max-w-[78rem] mx-auto px-32 gap-5 bg-[#FAF7F5] py-20 grid grid-cols-2">
          {["Education", "Research"].map((value, idx) => {
            return (
              <div className="bg-white py-10 px-7 -mt-44 shade">
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

      <section className="px-5">
        <div className="max-w-[78rem] mx-auto  py-16 bg-white">
          <div className="bg-[#0077B3] px-20 max-w-5xl mx-auto py-16 items-center flex justify-between">
            <div className="text-2xl font-semibold text-white">
              <p>Do you also want to change your world?</p>
            </div>
            <div className="justify-center bg-white text-black">
              <p className="text-2xl font-semibold px-7 py-3 text-[#333333]">Visit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
      {/* impact */}
      <section className="px-5">
        <div className="max-w-[78rem] mx-auto py-10 pt-20 bg-[#f2efed]">
          <h1 className="text-4xl px-32 text-[#cc4100]">Impact</h1>
        </div>
      </section>

      {/* second background */}
      <section className="">
        <div className="max-w-[78rem]  mx-auto py-72" style={{
          backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1")`,
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}>

        </div>
      </section>
      {/* card that will trigger first coursel on an old man */}
      <section className="px-5">
        <div className="max-w-[78rem] mx-auto px-20 bg-[#f2efed] py-20 flex justify-between">

        </div>
      </section>
      {/* Ukraine section */}
      <section className="px-5">
        <div className="max-w-[78rem] mx-auto px-24 gap-10 bg-white py-20 grid grid-cols-2">
          {[1, 2].map((value, idx) => {
            return (
              <div className="bg-white p-10 shade">
                <h1 className="text-2xl">Ukraine</h1>
                <div className="mt-6">
                  <p>Information and support</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* next section */}
      <section className="px-5">
        {/* impact */}
        <div className="max-w-[78rem] mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-3xl px-32 text-red-500">News</h1>
        </div>
        <div className="max-w-[78rem] mx-auto px-20 bg-[#FAF7F5] grid pb-20">
          <div className="flex justify-between gap-10">
            <div className="">
              {[1, 2].map((value, idx) => {
                return (
                  <div className="grid grid-cols-7 gap-7 mt-10">
                    <div className="col-span-4">
                      <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png" className="aspect-video h-52" alt="" />
                    </div>
                    <div className="col-span-3">
                      <h1>08 Feb 2023</h1>
                      <h1 className="text-xl tracking-wide max-w-3xl">Earthquakes Turkey and
                        Syria</h1>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="space-y-20 flex-1">
              {[1, 2, 3].map((value, idx) => {
                return (
                  <div className="flex gap-3 mt-10">
                    <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png" className="aspect-video w-32 h-24 object-cover aspect-video " alt="" />
                    <div className="">
                      <h1>08 Feb 2023</h1>
                      <h1 className="text-sm tracking-wide max-w-3xl">Earthquakes Turkey and
                        Syria</h1>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="max-w-[78rem] grid mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-3xl m-auto px-32 text-red-500">News</h1>
        </div>
      </section>

      {/* next section */}
      <section className="px-5">
        <div className="max-w-[78rem] px-32 bg-white mx-auto">
          <div className="grid grid-cols-2 items-center py-16">
            <div>
              <h1>Calender</h1>
            </div>
            <div className="flex gap-6">
              <div className="py-2 px-3 border border-gray-500 w-64">
                All categories
              </div>
              <div className="py-2 px-3 border border-gray-500 w-64">
                Date
              </div>
            </div>
          </div>

          {/* next this in this section */}
          <div className="grid grid-cols-4 items-center gap-6 py-16">
            {[
              {
                item:"PhD Defences"
              },
              {
                item: "Social events"
              },
              {
                item:"Other events"
              },
              {
                item:"Lectures"
              }
            ].map((val, index) => {
              return (
                <div>
                  <h1>Other events</h1>
                  <div className="mt-4">
                    {[1, 2].map((e, idx) => {
                      return (
                        <div>
                          <h1>21 February 2023</h1>
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

      <section className="px-5">
        <div className="max-w-[78rem] mx-auto  py-16 bg-white">
          <div className="bg-[#0077B3] px-20 max-w-5xl mx-auto py-16 items-center flex justify-between">
            <div className="text-2xl font-semibold text-white">
              <p>Do you also want to change your world?</p>
            </div>
            <div className="justify-center bg-white text-black">
              <p className="text-2xl font-semibold px-7 py-3 text-[#333333]">Visit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
      {/* We are VU Amsterdam */}
      <section className="">
        <div className="max-w-[78rem] mx-auto overflow-hidden  py-20 bg-white">
          <div className="flex -ml-40">
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
      <section className="px-5">
        <div className="max-w-[78rem] mx-auto px-24 gap-10 bg-[#FAF7F5] py-20 grid grid-cols-2">
          {[1].map((value, idx) => {
            return (
              <div className="bg-white p-20 shade max-w-sm">
                <h1 className="text-2xl">VIJ Campus Tour</h1>
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-5">
        <div className="max-w-[78rem] px-32 bg-white py-16 mx-auto">
          {/* next this in this section */}
          <div className="grid grid-cols-3 gap-6 ">
            {data3.map((val, index) => {
              return (
                <div className="">
                  <div>
                    <h1 className={`text-[2.30rem] ${index === 1 ? "text-[#CC4100]" : index === 0 ? "text-[#0077B3]" : "text-[#008053]"}`}>{val.item}</h1>
                  </div>
                  <div className=" h-[80%] flex flex-col justify-between relative">
                    <div className="shade flex justify-beteen h-full flex-col px-7 py-5">
                      {val.desc.map((v, i) => {
                        return (
                          <div className="flex justify-between">
                            <div className="mt-[0.35rem] text-lg  font-semibold">
                              {v}
                            </div>
                            <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                              <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex gap-1 px-7  items-center absolute bottom-3">
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
      <section className="px-5">
        <div className="max-w-[78rem] py-4 space-y-6 px-32 bg-[#0077b3] text-white mx-auto">
          <div className="flex gap-5 ">
            {["Privacy Statement", "Disclaimer", "Safety at VU Amsterdam", "Colofon", "Cookie Settings", "Web archive"].map((val, index) => {
              return (
                <div className="mt-4 flex gap-1 items-center">
                  <h1 className="text-md font-medium tracking-wide whitespace-nowrap ">{val}</h1>
                  <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              )
            })}
          </div>
          <div className="font-medium">
            <h1>Copyright &copy;
              2023 - Vrije Universiteit Amsterdam</h1>
          </div>
        </div>
      </section>
    </>
  )

}
