import React from "react";
const features = [
  {
    name: "8K+",
    description:
      "Autem reprehenderit aut debitis ut. Officiis harum omnis placeatae.",
  },
  {
    name: "25k+",
    description:
      "Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat.",
  },
  {
    name: "98%",
    description:
      "Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. perspiciatis.",
  },
  {
    name: "12M",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure.",
  },
];

function Cta({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="flex justify-center flex-col lg:flex-row bg-black">
      <div className="lg:w-3/12 lg:mx-6 lg:mt-4 md:w-full">
        <div className="flex justify-center">
          <div className="relative">
            <img src="./Image.png" />
            <img
              src="./dot2.png"
              className="hidden absolute -bottom-12 -right-20 lg:block"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-5/12 lg:mx-6 lg:mt-4 md:w-full md:mx-4 mt-2 sm:mx-2 mt-1">
        <div className="w-full h-full relative px-8 py-32  shadow-2xl sm:rounded-3xl sm:px-16">
          <div className="w-[355px] h-[415px] left-0 top-[0] absolute bg-red-500  rounded-full blur-[300px]" />
          <div className="w-[322px] h-[443px] right-0 top-0 absolute bg-cyan-400  rounded-full blur-[300px]" />
          <h2 className="text-4xl font-inter font-semibold  text-white">
          {heading}
          </h2>
          <p className="mt-6 ml-2 text-lg font-inter font-normal leading-7 text-gray-300">
           {description}
          </p>
          <div className="mt-10 ml-2 gap-x-6">
            <a
              href="#"
              className="bg-sky-400  text-white rounded-md px-4 py-2  mr-2"
            >
              Add card
            </a>
          </div>
          <img
            src="./dot1.png"
            className="hidden absolute top-0 right-0 lg:w-[250] lg:h-[250] lg:block"
          />
        </div>
      </div>
    </div>
  );
}

// bg-gray-900

export default Cta;
