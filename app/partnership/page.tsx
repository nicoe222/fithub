import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-partnership h-96 bg-cover bg-center w-full bg-no-repeat items-center justify-center flex">
        <h1 className="md:text-7xl text-3xl font-bold text-white uppercase">
          Brand Partnership
        </h1>
      </div>
      <div className="px-5 md:px-28">
        <div className="space-y-4 my-8">
          <h1 className=" text-2xl md:text-5xl font-bold text-gray-900">
            KOLABORASI BERSAMA <span className="text-sky-500">FIT HUB</span>
          </h1>
          <p className=" text-lg md:text-xl text-gray-500">
            Menghadirkan ide, semangat, dan rasa ingin tahu melalui kolaborasi
            yang menyenangkan untuk mencapai tujuan bersama.
          </p>
        </div>
        <div className="w-full flex">
          <div className="bg-gray-100/90 py-4 md:py-8 w-full  px-4 md:px-6 space-y-4 rounded-lg drop-shadow-sm">
            <div className="md:pb-8 pb-4">
              <h1 className="text-xl md:text-3xl font-semibold text-slate-900">
                LET US REACH YOU!
              </h1>
            </div>
            {/* BATAS */}
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
              >
                Partner Type
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            {/* BATAS */}
            <div className="w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-red-700 dark:text-white"
              >
                Nomor Induk Karyawan (KHUSUS KORPORASI MEMBERSHIP)
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Fill Here"
                required
              />
            </div>
            <div className="flex flex-col w-full space-y-4">
              <div className="w-full">
                <label
                  htmlFor="countries"
                  className=" block mb-2 text-xs font-medium text-gray-500 dark:text-white"
                >
                  Nama Anda
                </label>
                <div className="flex space-x-4">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="US">Tuan</option>
                    <option value="CA">Nyonya</option>
                    <option value="FR">Nona</option>
                  </select>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="How can we call you?"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="countries"
                  className=" block mb-2 text-xs font-medium text-gray-500 dark:text-white"
                >
                  Nomor HP Anda
                </label>
                <div className="flex space-x-4">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="US">+62</option>
                  </select>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
              >
                Prefered Contact Time
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose Here</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
              >
                How much do you plan to invest?
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Amount</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
              >
                Do you own an asset/ property you want to use?
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose an options</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subcribe to our News Letters.
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                I’ve read and agree to{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Data Privacy{" "}
                </a>
                Policy.
              </label>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm outline outline-1 outline-gray-300 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                REDEEM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
