import Link from "next/link";
import localFont from "@next/font/local";
import Impact from "@/components/Science";

const robo = localFont({
  src: "../public/roboto-latin-400-normal.woff2",
  display: "swap",
});

export default function Science() {
  return (
    <section className="lg:block hidden">
      <div className="max-w-[78rem]  mx-auto ">
        <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1" alt="" />
        <div className="items-center mt-16 justify-center">
          <div className="pt-16 pl-6 space-y-6 bg-white grid lg:-mt-24 ">
            <h5 className="text-[24px]  leading-[36px] font-light text-[#CC4100]">
              Science to impact
            </h5>
            <p
              className={`text-lg opacity-80 mr-16 leading-[30px] max-w-md ${robo.className}`}
            >
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <Link
              href="#"
              className={`${robo.className} flex items-center gap-6 bg-white`}
            >
              <span className={`${robo.className}  text-lg `}>Read more</span>
              <svg
                Name="fill-[#000000]"
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path
                  d="M20 12L4 12M20 12L14 18M20 12L14 6"
                  stroke="#000000"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            {/* <div className="flex items-center ml-auto gap-4">
                <div className="flex items-center">
                  <RxDotFilled className="text-6xl text-[#CC4100]" />
                  <RxDotFilled className="text-4xl text-[#CC4100]" />
                  <RxDotFilled className="text-4xl text-[#CC4100]" />
                  <RxDotFilled className="text-4xl text-[#CC4100]" />
                </div>
                <div className="py-2 px-1 cursor-pointer   flex gap-4 bg-[#FCD3B6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
