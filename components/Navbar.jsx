import { data } from "@/data";
import React from "react";

export default function Navbar() {
  return (
    <section className="px-5 ">
      <div className="max-w-7xl bg-white mx-auto  flex justify-between items-stretch">
        <div className="py-5 px-10">
          <img
            className="w-44"
            src="https://vu.nl/assets/images/VU-logo-nobg.svg"
            alt=""
          />
        </div>
        <div className="flex py-5 px-6 gap-4 items-center bg-[#F2EFED] ">
          {data.map((value, index) => {
            return <div key={index}>{value}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
