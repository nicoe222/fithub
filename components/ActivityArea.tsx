import Image from "next/image";
import React from "react";
import section1 from "../public/assets/3.jpg";
import section2 from "../public/assets/4.jpg";

const ActivityArea = () => {
  return (
    <div className="px-5 md:px-28 bg-gray-100 pb-10">
      <h1 className="text-judul text-3xl font-bold">
        Temukan aktivitas paling tepat untuk menjadi{" "}
        <span className="border-b-[4px] border-yellow-500">
          lebih <strong className="text-sky-500">FIT</strong>
        </span>
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-4 cursor-pointer">
        <div>
          <Image src={section1} alt="" className="rounded-3xl" />
        </div>
        <div>
          <Image src={section2} alt="" className="rounded-3xl" />
        </div>
        <div>
          <Image src={section1} alt="" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ActivityArea;
