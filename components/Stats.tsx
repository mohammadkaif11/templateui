import React from "react";

function Stats({
  heading,
  description,
  stats,
}: {
  heading: string;
  description: string;
  stats: any;
}) {
  return (
    <div className="bg-black w-full">
      <div className="bg-black flex flex-col justify-center md:p-3 md:flex-row sm:p-1 max-w-[1400px] mx-auto">
        <div className="lg:w-1/2 md:w-full p-10">
          <span className="my-6 text-sm font-inter font-semibold text-indigo-300">
            Valuable metrics
          </span>
          <h1 className="my-6 text-4xl font-inter font-semibold  text-white">
            {heading}
          </h1>
          <p className="my-6 text-lg font-inter font-normal leading-7 text-white ">
            {description}
          </p>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {stats.map((stat: any) => (
              <div key={stat.name}>
                <dt className="text-2xl font-inter font-bold leading-8 text-white">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-base font-inter font-medium leading-6 text-white">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>{" "}
        </div>
        <div className="lg:w-1/2 md:w-full mx-1 mt-4 max-h-[690px]">
          <img
            src="./Imagewithgradient.png"
            alt="Feature"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;

{
  /* <div className="bg-black p-4 shadow-md ">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="col-span-1 p-10">
   
  </div>
  <div className="col-span-1">
   
  </div>
</div>
</div> */
}
