import Image from "next/image";
import React from "react";
import fokus from "../../public/assets/Icon-fokus.jpg";
import balance from "../../public/assets/Icon-work-life-balance.jpg";
import bugar from "../../public/assets/Icon-burgar.jpg";
import produktif from "../../public/assets/Icon-produktif.jpg";

const page = () => {
  return (
    <div>
      <div className="bg-corporate h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white uppercase">
          Membership Koporasi.
        </h1>
      </div>
      <div className="px-5 md:px-28">
        <div className="space-y-4 my-8">
          <h1 className=" text-2xl md:text-5xl font-bold text-gray-900">
            Paket yang kami tawarkan
          </h1>
          <p className=" text-lg md:text-xl text-gray-500">
            Kami memiliki beragam paket yang dapat menyesuaikan kebutuhan bisnis
            anda dan karyawan Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FULL COMPANY INVOICE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Membayar biaya keanggotaan secara penuh untuk karyawan Anda dan
                berkontribusi terhadap kesehatan dan kebugaran mereka.
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PART COMPANY INVOICE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Memberi kontribusi sebagian dari biaya keanggotaan, dengan
                sisanya dibayarkan oleh karyawan Anda melalui debit.
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                INDIVIDUAL DIRECT DEBIT
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Menawarkan manfaat klub kesehatan di perusahaan Anda dan
                karyawan akan membayar keanggotaannya sendiri.
              </p>
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-4xl text-slate-900 font-bold">
            Apa yang Anda dan perusahaan Anda dapatkan?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full mt-8">
          <div className="flex flex-row">
            <Image src={fokus} alt="" />
            <div>
              <h1 className="text-2xl text-slate-900">FOKUS</h1>
              <p className="text-gray-400">
                Olahraga teratur meningkatkan konsentrasi dan membangun fokus
                dalam bekerja
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <Image src={balance} alt="" />
            <div>
              <h1 className="text-2xl text-slate-900">WORK-LIFE BALANCE</h1>
              <p className="text-gray-400">
                Work-life balance dan mengurangi stres
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <Image src={bugar} alt="" />
            <div>
              <h1 className="text-2xl text-slate-900">BUGAR</h1>
              <p className="text-gray-400">
                Tetap bugar dan mencegah masalah kesehatan
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <Image src={produktif} alt="" />
            <div>
              <h1 className="text-2xl text-slate-900">PRODUKTIF</h1>
              <p className="text-gray-400">
                Kinerja kesehatan yang lebih baik di tempat kerja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
