import React from "react";

function Cta({
  cta,
}: {
  cta: any;
}) {
  return (
    <div className="bg-black w-full p-10">
      <div className="bg-black mx-auto max-w-[1740px] flex flex-col lg:flex-row">
        <div className="hidden  w-[428px] h-[600px]  justify-center items-center lg:flex">
          <img
            src="./template_4_cardCta.png"
            className="-mr-[100%] w-[]"
            style={{ position: "relative", zIndex: "1" }}
          />
        </div>
        <div className="lg:w-[1100px] lg:h-[533px] sm:w-[95%] p-6 relative rounded-b-3xl rounded-t-3xl overflow-hidden border-6 border-black">
          {" "}
          <img
            src="./template_4_dot2Cta.png"
            className="hidden absolute bottom-0 left-0 lg:block"
            width={250}
            height={250}
          />
          <img
            src="./template_4_dot1Cta.png"
            className="hidden absolute top-0 right-0 lg:w-[250] lg:h-[250] lg:block"
          />
          <img src="./template_4_redCta.png" className="absolute top-0 left-0 w-[55%]" />
          <img
            src="./template_4_cyanCta.png"
            className="absolute bottom-0 right-0 w-[55%]"
          />
          <div className="max-w-xl mx-auto lg:my-24 sm:my-2 relative z-1">
            <h2 className="text-4xl font-inter font-semibold  text-white">
              {cta.title}
            </h2>
            <p className="mt-6 ml-2 text-lg font-inter font-normal leading-7 text-gray-300">
              {cta.subtitle}
            </p>
            <div className="mt-10 ml-2 gap-x-6">
              <a
                href="#"
                className="bg-sky-400  text-white rounded-md px-4 py-2  mr-2"
              >
                Add card
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
