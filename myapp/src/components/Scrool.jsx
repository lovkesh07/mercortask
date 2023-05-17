import React from "react";
import Leftpart from "./Leftpart";
import Rightpart from "./Rightpart";
import star from "../images/star.png";

const Page = () => {
  const [scrollWidth, setScrollWidth] = React.useState(
    document.body.clientWidth
  );
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScrollWidth(document.body.clientWidth);
      console.warn(scrollWidth);
    });
  });

  return (
   

    
    <div className=" flex md:flex-row flex-col bg-black mt-28">
      <div className="  w-full md:w-1/2 lg:h-[600vh] text-white">
        <div className=" w-[75%]  py-5 mx-auto md:sticky md:top-[20%] md:left-0">
          <div className=" flex flex-row items-center md:mx-1 lg:mx-8">
            <img className="text-[#a594fd] w-10 h-10" src={star} />
            <h1 className=" text-2xl  text-[#a594fd]">
              Workflow
            </h1>
          </div>
          <h1 className=" text-5xl lg:text-7xl lg:mx-10 font-extrabold ">
            Create at <br/>the speed <br/>of thought.
          </h1>
          <br />
          <p  className=" hidden md:block my-5  lg:px-11 opacity-50">
            Focus on your getting your thoughts out and creating the best
            message while Chronicle does the heavylifting for you
          </p>
        </div>
      </div>
      {scrollWidth >= 968 ? <Leftpart /> : <Rightpart />}
    </div>
    
  );
};

export default Page;
