import { useState } from "react";
export default function Testimonials({ testimonials }: { testimonials: any }) {
  const [index, setIndex] = useState<number>(0);

  const changeCarousel = (ind: number) => {
    setIndex(index + ind);
  };

  return (
    <div className=" bg-template_2_testiminols_bgImage bg-black bg-cover">
      <section className="relative isolate overflow-hidden  max-w-[1800px] mx-auto h-[649px] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-sm font-inter font-semibold text-4xl text-white text-center">
          <h1>{testimonials[index].name}</h1>
        </div>
        <div className="mx-auto mt-4 max-w-sm font-inter font-normal text-2xl text-white text-center">
          <h1>{testimonials[index].designation}</h1>
        </div>
        <div className="flex justify-between">
          <div className="my-auto">
            <button
              disabled={index == 0}
              onClick={() => changeCarousel(-1)}
              className="sm:mx-2"
            >
              <img
                className="relative left-0 inline w-[80px]"
                id="arrow_right"
                alt=""
                src="/template_4_leftArrow.svg"
              />
            </button>
          </div>
          <div className="mx-auto w-[840px] h-[390px]">
            <figure className="mt-10">
              <blockquote className="bg-gray-900 p-24  relative overflow-hidden text-center text-lg font-inter font-normal leading-8 text-white sm:text-2xl sm:leading-9 rounded-2xl">
                <p className="text-3xl">
                  <span>
                    {" "}
                    <img
                      src="./template_4_leftComma.png"
                      className="lg:w-[69px]  w-[38px]  inline -mr-2"
                    />
                  </span>
                  {testimonials[index].testimonial}.
                  <span>
                    <img
                      src="./template_4_rightComma.png"
                      className="lg:w-[69px]  w-[38px] inline ml-1"
                    />
                  </span>
                </p>
              </blockquote>
            </figure>
          </div>
          <div className="my-auto">
            <button
              disabled={index == testimonials.length - 1}
              className="float-right text-white"
              onClick={() => changeCarousel(1)}
            >
              <img
                className="relative right-0 inline w-[80px]"
                id="arrow_left"
                alt=""
                src="/template_4_rightArrow.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
