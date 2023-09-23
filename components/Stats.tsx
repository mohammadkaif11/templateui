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

function Stats() {
  return (
    <>
        <div className="bg-black flex flex-col justify-center p-10 md:flex-row">
          <div className="p-4 lg:w-3/6 md:w-full mx-1">
            <h1 className="my-6 text-4xl text-white">
              Get actionable data that will help grow your business
            </h1>
            <p className="my-6 text-xl text-white ">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
              laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
              quis at.
            </p>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-bold leading-7 text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 leading-7 text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>{" "}
          </div>
          <div className="lg:w-2/6 md:w-full mx-1 mt-4">
            <img
              src="./Imagewithgradient.png"
              alt="Feature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </>
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
