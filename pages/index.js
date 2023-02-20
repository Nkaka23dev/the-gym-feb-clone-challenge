import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="px-5">
        <div className="max-w-7xl bg-[#FAF7F5] mx-auto grid pb-24 pt-16">
          <p className="m-auto text-5xl max-w-[55rem] font-light ">You don’t just become something, you become someone</p>
        </div>
      </section>
      <section className="px-5 -mt-10 relative z-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 items-center ">
          <div className="py-10 px-5 bg-blue-500"></div>
          <div className="bg-white py-10">

          </div>
        </div>
      </section>
      {/* background image */}
      <section className="-mt-10">
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
        <div className="max-w-7xl mx-auto px-20 bg-white pb-52 pt-10 flex justify-between">
          {[1, 2, 3, 4].map((val, index) => {
            return (
              <div>
                <p>31.704 students</p>
              </div>
            )
          })}
        </div>
        <div className="max-w-7xl mx-auto px-24 gap-10 bg-[#FAF7F5] py-20 grid grid-cols-2">
          {[1, 2].map((value, idx) => {
            return (
              <div className="bg-white p-10 -mt-44 shade">
                <h1 className="text-2xl">Education</h1>
                <div className="mt-6">
                  {[1, 2, 3, 4, 5, 6].map((v, i) => {
                    return (
                      <div>
                        <p>Bachelor's programmes</p>
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
        <div className="max-w-7xl mx-auto  py-32 bg-white">
          <div className="bg-blue-500 max-w-5xl mx-auto py-16  grid grid-cols-2">
            <div>
              <p>Do you also want to change your world?</p>
            </div>
            <div>
              <p>isit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
      {/* impact */}
      <section className="px-5">
        <div className="max-w-7xl mx-auto py-10 bg-[#f2efed]">
          <h1 className="text-3xl px-32 text-red-500">Impact</h1>
        </div>
      </section>

      {/* second background */}
      <section className="">
        <div className="max-w-7xl  mx-auto py-72" style={{
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
        <div className="max-w-7xl mx-auto px-20 bg-[#f2efed] py-20 flex justify-between">

        </div>
      </section>
      {/* Ukraine section */}
      <section className="px-5">
        <div className="max-w-7xl mx-auto px-24 gap-10 bg-white py-20 grid grid-cols-2">
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
        <div className="max-w-7xl mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-3xl px-32 text-red-500">News</h1>
        </div>
        <div className="max-w-7xl mx-auto px-20 bg-[#FAF7F5] grid pb-20">
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
          {[1, 2,3].map((value, idx) => {
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
        <div className="max-w-7xl grid mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-3xl m-auto px-32 text-red-500">News</h1>
        </div>
      </section>

      {/* next section */}
      <section className="px-5">
      <div className="max-w-7xl px-32 bg-white mx-auto">
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
        {[1,2,3,4].map((val, index) => {
          return (
            <div>
              <h1>Other events</h1>
              <div className="mt-4">
              {[1,2].map((e,idx) => {
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
        <div className="max-w-7xl mx-auto  py-20 bg-[#faf7f5]">
          <div className="bg-blue-500 max-w-5xl mx-auto py-16  grid grid-cols-2">
            <div>
              <p>Working at VU Amsterdam??</p>
            </div>
            <div>
              <p>isit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
