import Image from "next/image";
import React from "react";
import strength from "../../public/assets/strength.jpg";
import cardios from "../../public/assets/cardio.jpg";
import bodys from "../../public/assets/mindBody.jpg";

import {
  BellyDance,
  bootCamp,
  boothShaping,
  cardioDance,
  circuit,
  core,
  fitBox,
  fitCycle,
  fitRush,
  freestyleDance,
  hathaYoga,
  hiit,
  hiphopDance,
  kaphaYoga,
  ladiesStyleBachata,
  matPilates,
  pundfit,
  strongNation,
  thaiBoxing,
  vinyasaYoga,
  zumba,
} from "../../public/assets";

const page = () => {
  return (
    <>
      <div className="bg-event h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white ">KELAS</h1>
      </div>
      <div className="px-5 md:px-28">
        <div className="space-y-4 my-8">
          <h1 className=" text-2xl md:text-5xl font-bold text-gray-900">
            Nikmati berbagai kelas favoritmu.
          </h1>
          <p className=" text-lg md:text-xl text-gray-500">
            Menjadi lebih FIT dengan kelas berkelompok yang menyenangkan. Kelas
            tanpa batas ini sudah termasuk dalam paket membership dan Anda dapat
            memilih kelas sesuai dengan yang Anda inginkan.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 cursor-pointer">
          <div className="">
            <Image src={strength} alt="" className="rounded-[36px]" />
          </div>
          <div className="">
            <Image src={cardios} alt="" className="rounded-[36px]" />
          </div>
          <div className="">
            <Image src={bodys} alt="" className="rounded-[36px]" />
          </div>
        </div>
      </div>
      <div className="bg-slate-800 my-12 py-8">
        <div className="px-5 md:px-28">
          <div className="space-y-12">
            <h1 className=" text-2xl md:text-[42px] font-bold text-white">
              Jelajahi Semua Kelas
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
              <div>
                <Image src={fitRush} alt="" />
              </div>
              <div>
                <Image src={hiit} alt="" />
              </div>
              <div>
                <Image src={matPilates} alt="" />
              </div>
              <div>
                <Image src={pundfit} alt="" />
              </div>
              <div>
                <Image src={strongNation} alt="" />
              </div>
              <div>
                <Image src={fitCycle} alt="" />
              </div>
              <div>
                <Image src={fitBox} alt="" />
              </div>
              <div>
                <Image src={zumba} alt="" />
              </div>
              <div>
                <Image src={thaiBoxing} alt="" />
              </div>
              <div>
                <Image src={core} alt="" />
              </div>
              <div>
                <Image src={circuit} alt="" />
              </div>
              <div>
                <Image src={boothShaping} alt="" />
              </div>
              <div>
                <Image src={ladiesStyleBachata} alt="" />
              </div>
              <div>
                <Image src={kaphaYoga} alt="" />
              </div>
              <div>
                <Image src={vinyasaYoga} alt="" />
              </div>
              <div>
                <Image src={hiphopDance} alt="" />
              </div>
              <div>
                <Image src={hathaYoga} alt="" />
              </div>
              <div>
                <Image src={freestyleDance} alt="" />
              </div>
              <div>
                <Image src={cardioDance} alt="" />
              </div>
              <div>
                <Image src={bootCamp} alt="" />
              </div>
              <div>
                <Image src={BellyDance} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
