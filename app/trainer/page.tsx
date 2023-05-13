import Image from "next/image";
import React from "react";
import pt from "../../public/assets/pt_right.jpg";

const page = () => {
  return (
    <div className="">
      <div className="bg-sections h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white ">
          PERSONAL TRAINER
        </h1>
      </div>
      <div className="md:px-28 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-4 md:gap-0">
          <div>
            <section className="text-gray-900 space-y-2 md:space-y-4 md:pr-8 pr-0">
              <h1 className="md:text-6xl text-3xl font-bold">
                Lampaui Batas dengan bantuan Personal Trainer
              </h1>
              <p className="text-sm text-gray-500">
                Setiap orang memiliki tujuan kebugaran yang berbeda. Pelatih
                kami ada di sini untuk membantu Anda tetap termotivasi,
                mendorong potensi, menemukan kepercayaan diri, pencapaian, dan
                peningkatan pengetahuan tentang kesehatan dan kebugaran.
              </p>
              <p className="text-sm text-gray-500">
                Pelatih kami memiliki pengetahuan yang baik mengenai kesehatan
                dan kebugaran, juga telah tersertifikasi. Dengan program dan
                layanan yang tepat, Anda akan menjadi mencapai hasil yang
                diinginkan.
              </p>
              <h1 className="text-lg text-gray-700 font-bold">
                TEMUKAN MOTIVASI KAMU
              </h1>
              <p className="text-sm text-gray-500">
                Apa pun tujuan kebugaran kamu, mereka akan membuat rencana
                pelatihan yang berfokus <strong>dan membantu kamu</strong>pada
                tujuan kamu mencapai dan melampaui tujuan tersebut melalui
                beragam rutinitas yang dirancang untuk terus menantang
                kekuatanmu.{" "}
              </p>
            </section>
          </div>
          <div className="">
            <Image src={pt} alt="" className="rounded-3xl" />
          </div>
        </div>

        <div>
          <h1 className="md:text-6xl text-2xl text-center text-gray-900 font-bold my-12">
            Pesan Sesi Kamu Sekarang!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-8 md:gap-12">
            <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
              <div className="overflow-hidden">
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                  <div className="font-bold text-2xl text-blues">4 Sesi</div>
                  <div>
                    <p className="line-through text-lg text-gray-300 font-semibold">
                      IDR 1.375.000
                    </p>
                  </div>
                  <div>
                    <p className="line-through text-lg text-gray-500 font-semibold">
                      IDR 1.100.000
                    </p>
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                  <span>IDR 275k</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                  / pertemuan
                </div>
                <div className="px-4 mt-8">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
              <div className="overflow-hidden">
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                  <div className="font-bold text-2xl text-blues">8 Sesi</div>
                  <div>
                    <p className="line-through text-lg text-gray-300 font-semibold">
                      IDR 1.375.000
                    </p>
                  </div>
                  <div>
                    <p className="line-through text-lg text-gray-500 font-semibold">
                      IDR 1.100.000
                    </p>
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                  <span>249 $</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                  / month
                </div>
                <div className="px-4 mt-8">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
              <div className="overflow-hidden">
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                  <div className="font-bold text-2xl text-blues">24 Sesi</div>
                  <div>
                    <p className="line-through text-lg text-gray-300 font-semibold">
                      IDR 1.375.000
                    </p>
                  </div>
                  <div>
                    <p className="line-through text-lg text-gray-500 font-semibold">
                      IDR 1.100.000
                    </p>
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                  <span>249 $</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                  / month
                </div>
                <div className="px-4 mt-8">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
              <div className="overflow-hidden">
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                  <div className="font-bold text-2xl text-blues">16 Sesi</div>
                  <div>
                    <p className="line-through text-lg text-gray-300 font-semibold">
                      IDR 1.375.000
                    </p>
                  </div>
                  <div>
                    <p className="line-through text-lg text-gray-500 font-semibold">
                      IDR 1.100.000
                    </p>
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                  <span>249 $</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                  / month
                </div>
                <div className="px-4 mt-8">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
              <div className="overflow-hidden">
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                  <div className="font-bold text-2xl text-blues">36 Sesi</div>
                  <div>
                    <p className="line-through text-lg text-gray-300 font-semibold">
                      IDR 1.375.000
                    </p>
                  </div>
                  <div>
                    <p className="line-through text-lg text-gray-500 font-semibold">
                      IDR 1.100.000
                    </p>
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                  <span>249 $</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                  / month
                </div>
                <div className="px-4 mt-8">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
              <div className="overflow-hidden">
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                  <div className="font-bold text-2xl text-blues">48 Sesi</div>
                  <div>
                    <p className="line-through text-lg text-gray-300 font-semibold">
                      IDR 1.375.000
                    </p>
                  </div>
                  <div>
                    <p className="line-through text-lg text-gray-500 font-semibold">
                      IDR 1.100.000
                    </p>
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                  <span>249 $</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                  / month
                </div>
                <div className="px-4 mt-8">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
