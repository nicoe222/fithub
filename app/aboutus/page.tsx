import Image from "next/image";
import React from "react";
import right from "../../public/assets/right_image.jpg";

const page = () => {
  return (
    <div>
      <div className="bg-aboutus h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white uppercase">
          Tentang Kami.
        </h1>
      </div>
      <div className="px-5 md:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 my-12">
          <div className="">
            <h1 className="font-bold text-xl md:text-5xl">Get Fit With Us</h1>
            <section className="space-y-8 py-8 text-gray-500 text-lg">
              <p>
                Kesadaran masyarakat untuk tetap FIT dan kebutuhan untuk fitness
                kian meningkat, tetapi mereka kesulitan mengakses tempat
                kebugaran dengan harga terjangkau. Inilah yang menjadi ide awal
                berdirinya, FIT HUB.
              </p>
              <p>
                FIT HUB hadir sebagai Premium dan Affordable Gym di Indonesia
                dengan misi untuk memberikan kemudahan akses ke Kesehatan dan
                Kebugaran untuk semua orang, bukan hanya penggemar fitness.
              </p>
              <p>
                Untuk meningkatkan kenyamanan anggota, FIT HUB menyediakan
                fasilitas premium dengan desain area yang modern, dan kelas
                tanpa batas seperti Zumba, Yoga, Pound Fit, Cycling, danberbagai
                kelas lainnya untuk weight training dengan suasana yang nyaman.
                FIT HUB juga menyediakan bantuan Personal Trainer dengan harga
                yang terjangkau.
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
      </div>
    </div>
  );
};

export default page;
