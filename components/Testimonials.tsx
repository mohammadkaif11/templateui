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
        <div className="flex justify-between">
          <div className="my-auto">
            <button
              disabled={index == 0}
              onClick={() => changeCarousel(-1)}
              className="sm:mx-2"
            >
              <img
                className="relative left-0 inline w-[40px]"
                id="arrow_right"
                alt=""
                src="/template_4_leftArrow.svg"
              />
            </button>
          </div>
          <div className="mx-auto max-w-lg  lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="bg-gray-900 p-20  relative overflow-hidden text-center text-lg font-inter font-normal leading-8 text-white sm:text-2xl sm:leading-9 rounded-2xl">
                <img
                  src="./template_4_redCta.png"
                  className="absolute top-0 left-0 w-[50%]"
                />
                <img
                  src="./template_4_cyanCta.png"
                  className="absolute bottom-0 right-0 w-[50%]"
                />
                <p>{testimonials[index].testimonial}.</p>
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
                className="relative right-0 inline w-[40px]"
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
