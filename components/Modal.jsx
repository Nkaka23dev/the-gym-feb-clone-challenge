import React from "react";

export default function Modal({setShow}) {
  const handleClick = () => {
    setShow(false);
  };
  return (
    <section className="bg-white h-screen z-50 max-w-7xl mx-auto fixed grid inset-0">
      <div onClick={handleClick} className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
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
      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-10 pt-52 px-36">
          {[1, 2, 3, 4, 5, 6, 7].map((e, i) => {
            return (
              <div>
                <p className="text-2xl font-semibold"> Study at VU Amsterdam</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
