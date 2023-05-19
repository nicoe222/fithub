import Image from "next/image";
import React from "react";
import right from "../../public/assets/right_image.jpg";

const page = () => {
  return (
    <>
      <div className="bg-owngym h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white ">
          BUKA GYM SENDIRI
        </h1>
      </div>
      <div className="px-5 md:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 my-12">
          <div className="">
            <h1 className="font-bold text-xl md:text-5xl">
              INVESTASI DI INDUSTRI POTENSIAL DI INDONESIA
            </h1>
            <section className="space-y-8 py-8 text-gray-500 text-lg">
              <p>
                Dengan visi dan komitmen yang kuat, FIT HUB menjadi bisnis
                premium & affordable gym yang berkembang paling cepat di
                Indonesia. Berdiri pada saat pandemi, justru menjadikan FIT HUB
                sebagai salah satu solusi bagi masyarakat dalam memenuhi
                kebutuhan akan akses ke pusat kebugaran.
              </p>
              <p>
                Industri gym adalah 3 industri teratas yang akan berkembang
                seiring dengan meningkatnya pola hidup sehat milenial dan trend
                body fit yang menjadi lifestyle di Indonesia.
              </p>
              <p>
                Bermula dari berdirinya 2 lokasi di tahun 2020, kini FIT HUB
                sudah memiliki 15 cabang kemitraan di tahun 2021 dan ditargetkan
                jumlah ini akan terus bertambah, sehingga masyarakat dapat
                mengakses kebutuhan hidup sehat dan bugar dengan mudah.
                Tentunya, untuk mencapai visi yang besar ini kami tidak bisa
                bergerak sendirian. Kami mengajak seluruh pengusaha untuk turut
                mewujudkannya dengan menjadi mitra kami.{" "}
              </p>
            </section>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={right}
              alt=""
              className="aspect-auto h-[28rem] md:h-[32rem] w-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="outline outline-1 outline-juduls p-8 space-y-4">
            <h1 className="text-5xl text-slate-800">
              IDR <strong>5 Trilion</strong>
            </h1>
            <p className="text-gray-400">
              Total pendapatan klub kesehatan di Indonesia.{" "}
              <strong>MarketLine, 2020</strong>
            </p>
          </div>
          <div className="outline outline-1 outline-juduls p-8 space-y-4">
            <h1 className="text-5xl text-slate-800">
              <strong>167</strong> Milion
            </h1>
            <p className="text-gray-400">
              Potensial market gym dengan harga terjangkau di Indonesia,{" "}
              <strong>World Bank, 2020</strong>
            </p>
          </div>
          <div className="outline outline-1 outline-juduls p-8 space-y-4">
            <h1 className="text-5xl text-slate-800">
              <strong>+48%</strong>
            </h1>
            <p className="text-gray-400">
              Kebutuhan olahraga meningkat sejak pandemi{" "}
              <strong>Katadata,2020</strong>
            </p>
          </div>
        </div>
        <div className="my-12 w-full space-y-8 justify-center">
          <h1 className="text-5xl font-bold text-slate-800 text-center">
            Punya aset tak terpakai? Ingin memiliki Gym sendiri?{" "}
          </h1>
          <p className="text-gray-500 text-lg text-center">
            Jika Anda memiliki aset dengan bentuk bangunan/ gedung yang tidak
            digunakan, bahkan sudah memiliki gym namun tidak dapat mengelolanya,
            FIT HUB menjadi solusi agar aset Anda dapat menghasilkan keuntungan,
            FIT HUB juga dapat melakukan manajemen penuh terhadap bisnis gym
            Anda.
          </p>
          <h1 className="text-center text-4xl font-bold text-slate-800">
            AMBIL LANGKAH PERTAMA HARI INI
          </h1>
          <div className="w-full flex justify-center">
            <button className="bg-slate-700 text-white font-bold px-6 py-2.5 rounded-3xl">
              Kolaborasi Dengan Kami
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
