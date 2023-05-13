import Image from "next/image";
import React from "react";
import hp from "../public/assets/hp.png";
import google from "../public/assets/google.png";
import apple from "../public/assets/apple.png";

const FitHubApp = () => {
  return (
    <div className="md:px-28 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 py-16">
        <div className="flex items-center">
          <div className="flex flex-col space-y-8">
            <h1 className="md:text-5xl text-2xl text-judul font-bold tracking-wide leading-7">
              Dapatkan gaya hidup FIT dengan mudah dan menyenangkan di sini
            </h1>
            <p className="text-xl text-gray-500">
              Menjadi lebih FIT dengan ketukan jari. Mudah digunakan dan mudah
              untuk tetap konsisten. Unduh aplikasi sekarang!
            </p>
            <ol className="list-outside list-disc px-8 text-gray-900 space-y-2">
              <li>Daftar Membership</li>
              <li>Memesan Kelas</li>
              <li>Promo Spesial</li>
              <li>Membeli Paket Personal Trainer</li>
              <li>Tips Kebugaran</li>
            </ol>
            <div className="w-full">
              <h1 className="text-judul text-2xl">Download Sekarang</h1>
              <div className="flex w-full py-4 space-x-2 cursor-pointer">
                <Image src={google} alt="" className="" />
                <Image src={apple} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center md:flex w-full hidden">
          <Image src={hp} alt="" className="h-screen w-auto" />
        </div>
      </div>
    </div>
  );
};

export default FitHubApp;
