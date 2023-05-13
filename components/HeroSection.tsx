import React from "react";
// import heroVid from "../public/assets/Hero.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="z-0">
        <div>
          <video
            src={require("../public/assets/Hero.mp4")}
            muted
            loop
            autoPlay
            className="w-full aspect-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
