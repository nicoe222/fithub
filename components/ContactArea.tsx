"use client";
import React from "react";
import bg from "../public/assets/bg-gym.jpg";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "290",
      width: "540",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="md:px-28 px-5">
        <div className="grid md:grid-cols-2 grid-cols-1 space-y-4 pb-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 items-center justify-center">
              <h1 className="md:text-4xl text-2xl text-judul font-bold">
                GET FIT WITH US
              </h1>

              <p className="md:text-xl text-sm text-gray-500">
                FIT HUB berusaha memberikan kemudahan akses kesehatan dan
                kebugaran untuk semua orang melalui penawaran akses gym premium
                ke seluruh lokasi FIT HUB, kelas tanpa batas setiap hari dengan
                biaya terjangkau. Sekarang, siapapun menjadi lebih mudah untuk
                FIT bersama.
              </p>
            </div>

            <button className=" w-fit py-2 px-4 bg-judul text-white font-semibold rounded-md cursor-pointer hover:bg-slate-800">
              Selengkapnya
            </button>
          </div>
          <div className="w-full justify-center">
            <YouTube
              className=""
              videoId="iWv35HUwaQk"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );
  }

  _onReady(event: any) {
    event.target.pauseVideo();
  }
}
