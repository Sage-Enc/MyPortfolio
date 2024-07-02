import React from "react";
import Awkward from "../assets/Awkward.png";

function Testimonials() {
  const testimonials = [];
  return (
    <div className="font-SourceCodePro bg-[#222327] border-b-2 border-neutral-600 lg:px-10">
      <div className="px-4 py-10 md:px-16">
      <h2 className="text-[#6343A3] text-2xl md:text-4xl text-center font-semibold">
        Testimonials
      </h2>
      <br />
        {testimonials.length ? (
          testimonials.map((testimonial) => <h2>Hello World</h2>)
        ) : (
          <>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-red-700 font-extrabold">
              Error!!!
            </h2>
            <img src={Awkward} alt="" className="w-1/2 md:w-1/4 m-auto my-8" />
            <h2 className=" text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#e5e5e5]">
              I've Got No Testimonials Yet!!!
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
