import Link from "next/link";
import React from "react"; 

export default function Modal({ setShow }) {
  const handleClick = () => {
    setShow(false);
  };
  return (
    <section className="bg-white group h-screen z-50 max-w-7xl mx-auto fixed grid inset-0">
      <div
        onClick={handleClick}
        className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="transform group-hover:rotate-180 transition duration-500 ease-in-out"
          width="30px"
          height="30px"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#000000"
        >
          <line x1="16" y1="16" x2="48" y2="48" />
          <line x1="48" y1="16" x2="16" y2="48" />
        </svg>
      </div>
      <div className="">
        <div className="flex justify-between   flex-col space-y-10 pt-52 cursor-pointer  px-36">
          {["Study at VU Amsterdam", "Research", "About VU Amsterdam", "VU press office", "Alumni", "Student", "Employee"].map((e, i) => {
            return (
              <Link href={e}>
              <div key={i} className="flex max-w-sm  justify-between">
                <p className="text-[1.4rem] whitespace-nowrap font-semibold">
                  {" "}
                 {e}
                </p>
                {i === 0 || i === 1 ? (
                  <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                ) : (
                  <svg
                    className="ml-36"
                    Name="fill-[#000000]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                  >
                    <path
                      d="M20 12L4 12M20 12L14 18M20 12L14 6"
                      stroke="#000000"
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
