import { data } from "@/data";
import React, { useState, useEffect} from "react";
import Modal from "./Modal";

export default function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [show]);

  const handClick = () => {
    setShow(true);
  };
  return (
    <section className="px-5 ">
      <div className="max-w-[78rem] fixed z-20 left-0 right-0 top-0 shade bg-white mx-auto  flex justify-between items-stretch">
        <div className="py-[1.2rem] px-10">
          <img
            className="w-44"
            src="https://vu.nl/assets/images/VU-logo-nobg.svg"
            alt=""
          />
        </div>
        <div
          onClick={handClick}
          className="flex py-5 px-6  gap-6 items-center cursor-pointer bg-[#F2EFED] "
        >
          {data.map((value, index) => {
            return (
              <div
                onClick={handClick}
                className={`${index === 0 ? "text-xl font-medium" : ""}`}
                key={index}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
      {show && <Modal setShow={setShow} />}
    </section>
  );
}
