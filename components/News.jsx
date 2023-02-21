
import localFont from '@next/font/local'


const robo = localFont({ src: '../public/roboto-latin-400-normal.woff2', display: 'swap' })

export default function News() {
  return (
    <section className="lg:block hidden">
    {/* impact */}
    <div className="lg:mr-auto  px-8 lg:py-0 pt-10 bg-[#FAF7F5]">
      <h1 className="text-4xl  text-[#3B2171]">News</h1>
    </div>
    <div className=" px-8">
      <div className="">
        <div className="">
          {["https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png"].map((value, idx) => {
            return (
              <div key={idx} className="grid mt-5   grid-cols-2 gap-5">
                <div className="">
                  <img src={value} className="aspect-square object-cover object-center" alt="" />
                </div>
                <div className="">
                  <h1 className={`text-[#3B2171] ${robo.className} text-lg font-semibold`} >08 Feb 2023</h1>
                  <h1  className="tracking-wide max-w-[10rem] text-lg mt-2">Earthquakes Turkey and
                    Syria</h1>
                  <svg Name="fill-[#000000]" className="self-end ml-auto" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>

              </div>
            )
          })}
        </div>
        <div className="">
          {["https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720", "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png"].map((value, idx) => {
            return (
              <div className="grid grid-cols-2 gap-5 mt-5 ">
                <img src={value} className="aspect-square object-cover object-center" alt="" />
                <div className="">
                  <h1 className={`text-[#3B2171] ${robo.className} text-lg font-semibold`} >08 Feb 2023</h1>
                  <h1  className="tracking-wide max-w-[10rem] text-lg mt-2">Earthquakes Turkey and
                    Syria</h1>
                  <svg Name="fill-[#000000]" className="self-end ml-auto" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
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
        <h1 className={`text-xl ${robo.className}   lg:text-lg`}>News overview</h1>
        <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
          <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </section>
  )
}
