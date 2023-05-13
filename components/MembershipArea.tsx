"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import member from "../public/assets/IMG_7955-12.jpg";
import member1 from "../public/assets/IMG_7955-13.jpg";
import member2 from "../public/assets/IMG_7955-14-1.jpg";
import member3 from "../public/assets/IMG_7955-15.jpg";
import member4 from "../public/assets/IMG_7955-16.jpg";

const MembershipArea = () => {
  return (
    <div className="bg-gray-100 w-full px-5 md:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:py-24 py-4">
        <div className=" space-y-8">
          <h1 className="text-5xl font-bold">NgeGym Ga Pake Mahal</h1>
          <h1 className="text-5xl font-bold text-gray-300">
            Mulai dari <span className="text-sky-500">RP 239.000</span>
          </h1>
          <p className="text-2xl font-light text-gray-600">
            Dapatkan akses tak terbatas ke seluruh premium gym FIT HUB dan kelas
            gratis setiap harinya.
          </p>
          <button className="py-2.5 bg-cyan-800 px-4 rounded-lg text-white font-semibold drop-shadow-md">
            DAFTAR MEMBERSHIP SEKARANG
          </button>
        </div>
        <div className="">
          <Splide options={{ rewind: true }} aria-label="React Splide Example">
            <SplideSlide>
              <Image src={member} alt="" className="rounded-3xl" />
            </SplideSlide>
            <SplideSlide>
              <Image src={member1} alt="" className="rounded-3xl" />
            </SplideSlide>
            <SplideSlide>
              <Image src={member2} alt="" className="rounded-3xl" />
            </SplideSlide>
            <SplideSlide>
              <Image src={member3} alt="" className="rounded-3xl" />
            </SplideSlide>
            <SplideSlide>
              <Image src={member4} alt="" className="rounded-3xl" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default MembershipArea;
