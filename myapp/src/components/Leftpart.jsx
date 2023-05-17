import React, { useState, useEffect, useRef } from "react";

const Leftpart = () => {
  const [scrollCor, setScrollCor] = useState(0);
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((scrollProgress / scrollHeight).toFixed(4)) * 100);
      }
    };

    window.addEventListener("scroll", updateProgressBar);
  });

  const scrollHandler = (e) => {
    let y = window.scrollY;
    setScrollCor(y);
    console.warn(scrollCor);
  };

  const addAnimaton = () => {
    let height = window.screen.height;
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");

    if (scrollCor >= height && scrollCor < 3 * height) {
      slide1.style.opacity = 1;
      slide1.style.transform = "translate(0px,0px)";
      slide1.style.transform = "scale(1,1)";

      slide2.style.opacity = 0;
      slide2.style.transform = "translate(0px,250px)";
      slide2.style.transform = "scale(0.8,0.8)";

      slide3.style.opacity = 0;
      slide3.style.transform = "translate(0px,250px)";
      slide3.style.transform = "scale(0.8,0.8)";
    } else if (scrollCor >= 3 * height && scrollCor < 4 * height) {
      slide1.style.opacity = 0;
      slide1.style.transform = "translate(0px,250px)";
      slide1.style.transform = "scale(0.8,0.8)";

      slide2.style.opacity = 1;
      slide2.style.transform = "translate(0px,0px)";
      slide2.style.transform = "scale(1,1)";

      slide3.style.opacity = 0;
      slide3.style.transform = "translate(0px,250px)";
      slide3.style.transform = "scale(0.8,0.8)";
    } else if (scrollCor >= 4 * height) {
      slide1.style.opacity = 0;
      slide1.style.transform = "translate(0px,250px)";
      slide1.style.transform = "scale(0.8,0.8)";

      slide2.style.opacity = 0;
      slide2.style.transform = "translate(0px,250px)";
      slide2.style.transform = "scale(0.8,0.8)";

      slide3.style.opacity = 1;
      slide3.style.transform = "translate(0px,0px)";
      slide3.style.transform = "scale(1,1)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    console.warn(scrollCor);
    addAnimaton();
  });
  return (
    <div className="sticky top-0 relative h-[20vh] w-1/2 p-12">
      <div className=" sticky top-0 left-0 h-screen  max-w-[475px] rounded-lg bg-[#101010] p-12 my-8 h-50 flex flex-col ">
        <div
          className=" absolute top-0  left-0 h-screen w-fit py-16 px-16 lg:px-10 lg:opacity-1 lg:translate-y-[0px] transition-all duration-700 delay-200 rounded-lg"
          rounded-lg
          id="slide1"
        >
          <div className=" md:w-[388px] lg:w-[388px] h-[500px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
            <div className=" w-[100%] h-[100%]">
              
              <iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            <div className=" w-[100%] h-[50%] bg-[#101010] mt-8">
              <h1 className=" text-white text-center text-4xl mt-8">
                A keyboard <br /> first experience
              </h1>
              <br />
              <p className=" text-center text-white pb-4 mx-2 opacity-40">
                Powerful shortcuts and a keyboard-first workflow means you will
                get to your finish line in no time!
              </p>
            </div>
          </div>
        </div>
        <div
          className=" absolute top-0 left-0 h-screen w-fit py-16 lg:px-10 opacity-0 translate-y-[250px] transition-all duration-700 delay-200 rounded-lg"
          id="slide2"
        >
          <div className=" md:w-[388px] lg:w-[388px] h-[500px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
            <div className=" w-[100%] h-[100%] ">
              
              <iframe src="https://giphy.com/embed/f3iwJFOVOwuy7K6FFw" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Pluralsight-man-development-developer-f3iwJFOVOwuy7K6FFw">via GIPHY</a></p>
            </div>
            <div className=" w-[100%] h-[50%] bg-[#101010] mt-8">
              <h1 className=" text-white text-center text-4xl">
                Bullets to visuals
                <br /> in a click.
              </h1>
              <br />
              <p className=" text-center text-white pb-4 mx-2 opacity-40">
                transform any block to any other and try different options
                without any design hassle
              </p>
            </div>
          </div>
        </div>
        <div
          className=" absolute top-0 left-0 h-screen w-fit py-16 lg:px-10 opacity-0 translate-y-[250px] transition-all duration-700 delay-200 rounded-lg"
          id="slide3"
        >
          <div className=" md:w-[388px] lg:w-[388px] h-[500px]  rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
            <div className=" w-[100%] h-[100%]">
             
              <iframe src="https://giphy.com/embed/kAuA24AYr9rXXTcSPc" width="480" height="326" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kodewithklossy-kwk-kode-with-klossy-kAuA24AYr9rXXTcSPc">via GIPHY</a></p>
            </div>
            <div className=" w-[100%] h-[50%] bg-[#101010] ">
              <h1 className=" text-white text-center text-4xl mt-8">
                A powerful assistant <br /> just a click away
              </h1>
              <br />
              <p className=" text-center text-white pb-4 mx-2 opacity-40">
                Insert blocks, perform powerful actions and leverage the
                limitless power of AI - all without leaving your keyboard
              </p>
            </div>
          </div>
        </div>


        {/* <div className=" hidden p-4 md:absolute md:top-0 md:mt-28 md:right-0 md:h-screen md:flex md:flex-col md:items-center md:gap-2"> */}
        <div className=" hidden md:absolute md:top-[50%] md:-translate-y-[50%] md:mt-36 md:right-0 md:h-screen md:flex md:flex-col md:items-center md:gap-2">
          <span className=" text-[12px] opacity-1 text-white">
            {scrollCor >= 3 * window.screen.height &&
            scrollCor < 4 * window.screen.height
              ? "02"
              : scrollCor > 4 * window.screen.height
              ? "03"
              : "01"}
          </span>
          <div className=" w-[4px] h-[350px] relative rounded-full bg-[#232323] overflow-hidden">
            <span
              className=" absolute top-0 left-0 w-full bg-[#A594FD] rounded-full"
              style={{ height: `${completion}%` }}
            ></span>
          </div>
          <span className=" text-[12px] opacity-1 text-white">03</span>
        </div>
      </div>
    </div>
  );
};

export default Leftpart;
