import React from "react";
import Image from "next/image";
import fac1 from "../../public/assets/fac_1.jpg";
import fac2 from "../../public/assets/fac_2.jpg";
import fac3 from "../../public/assets/fac_3.jpg";
import fac4 from "../../public/assets/fac_4.jpg";
import fac5 from "../../public/assets/fac_5.jpg";
import change from "../../public/assets/Icon-change.jpg";
import locker from "../../public/assets/Icon-locker.jpg";
import ripstick from "../../public/assets/Icon-ripstick.jpg";
import shower from "../../public/assets/Icon-shower.jpg";
import toilet from "../../public/assets/Icon-toilet.jpg";
import waits from "../../public/assets/Icon-wait.jpg";
import weight from "../../public/assets/Icon-weight.jpg";
import matrass from "../../public/assets/Icon-matras.jpg";
import charging from "../../public/assets/charging.jpg";

const page = () => {
  return (
    <div>
      <div className="bg-fasilitas h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white ">
          FASILITAS
        </h1>
      </div>
      <div className="px-5 md:px-28">
        <div className="space-y-4 my-8">
          <h1 className=" text-2xl md:text-5xl font-bold text-gray-900">
            Fasilitas Premium Untuk Anda
          </h1>
          <p className=" text-lg md:text-xl text-gray-500">
            Membuat Anda lebih nyaman dan efektif berolahraga di FIT HUB.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 mx-auto gap-4">
          <div className=" group">
            <div className="relative overflow-hidden">
              <Image src={fac1} alt="" className="w-auto h-auto" />
              <div className="absolute -bottom-100 group-hover:bottom-0 bg-black/20 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300">
                <h1 className="text-white font-bold">GOOD TRAINER</h1>
              </div>
            </div>
          </div>
          <div className=" group">
            <div className="relative overflow-hidden">
              <Image src={fac2} alt="" className="w-auto h-auto" />
              <div className="absolute -bottom-10 group-hover:bottom-0 bg-black/20 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                <h1 className="text-white font-bold">ENVIRONTMENT</h1>
              </div>
            </div>
          </div>
          <div className=" group">
            <div className="relative overflow-hidden">
              <Image src={fac3} alt="" className="w-auto h-auto" />
              <div className="absolute -bottom-10 group-hover:bottom-0 bg-black/20 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                <h1 className="text-white font-bold">BEST EQUIPMENT</h1>
              </div>
            </div>
          </div>
          <div className=" group">
            <div className="relative overflow-hidden">
              <Image src={fac4} alt="" className="w-auto h-auto" />
              <div className="absolute -bottom-10 group-hover:bottom-0 bg-black/20 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                <h1 className="text-white font-bold">FITNESS PROGRAM</h1>
              </div>
            </div>
          </div>
          <div className=" group">
            <div className="relative overflow-hidden">
              <Image src={fac5} alt="" className="w-auto h-auto" />
              <div className="absolute -bottom-10 group-hover:bottom-0 bg-black/20 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                <h1 className="text-white font-bold">QUALITY GEAR</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4 my-12 space-y-4 content-center w-full bg-red-300">
          <div className="flex items-center space-x-4">
            <Image src={waits} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">RUANG TUNGGU</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={shower} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">SHOWER ROOM</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={toilet} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">TOILETS</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Image src={change} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">RUANG GANTI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={locker} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">LOCKER</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={ripstick} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">RIPSTICK</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Image src={weight} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">FREE WEIGHTS</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={matrass} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">MATRAS</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={charging} alt="" />
            <h1 className="text-2xl font-bold text-gray-500">CHARGING</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
