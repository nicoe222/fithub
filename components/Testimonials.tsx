import React from "react";
import frame1 from "../public/assets/Frame-16.png";
import frame2 from "../public/assets/Frame-16-4.png";
import frame3 from "../public/assets/Frame-16-2.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="md:px-28 px-5 bg-gray-100">
      <h1 className="text-judul md:text-3xl text-xl font-bold">
        Saatnya FIT bersama{" "}
        <span className="border-b-[4px] border-yellow-500">
          <strong className="text-sky-500">15.000 </strong>member{" "}
        </span>
        FIT HUB di seluruh Indonesia
      </h1>

      <div className="my-5 md:my-14 px-6 mx-auto">
        <section className=" text-gray-800 text-center pb-5">
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <Image
                  src={frame1}
                  className="rounded-full shadow-lg w-32"
                  alt=""
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Felix</h5>
              <h6 className="font-medium text-blue-600 mb-4">Entrepeneur</h6>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <ul className="flex justify-center mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <Image
                  alt=""
                  src={frame2}
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Lisa Cudrow</h5>
              <h6 className="font-medium text-blue-600 mb-4">
                Graphic Designer
              </h6>
              <p className="mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul className="flex justify-center mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="mb-0">
              <div className="flex justify-center mb-6">
                <Image
                  alt=""
                  src={frame3}
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Marisa</h5>
              <h6 className="font-medium text-blue-600 mb-4">
                Marketing Specialist
              </h6>
              <p className="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul className="flex justify-center mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
