import React from "react";

function Cta2() {
  return (
    <div className="flex justify-center bg-black p-10">
      <div className="w-6/12" style={{ border: "2px solid red" }}>
      
      </div>
      <div className="w-6/12" style={{border:"2px solid green"}}>
      <div className="px-8 py-32  shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="w-[355px] h-[415px] left-0 top-[0] absolute bg-red-500  rounded-full blur-[300px]" />
            <div className="w-[322px] h-[443px] right-0 top-0 absolute bg-cyan-400  rounded-full blur-[300px]" />
            <div className="ml-auto max-w-4xl">
              <h2 className="text-3xl ml-2 font-bold tracking-tight text-white sm:text-4xl">
                Add your card to get 50% on paid package after launch
              </h2>
              <p className="mt-6 ml-2 text-lg leading-8 text-gray-300">
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames.
              </p>
              <div className="mt-10 ml-2 gap-x-6">
                <a
                  href="#"
                  className="bg-blue-400  text-white rounded-md px-4 py-2  mr-2"
                >
                  Add card
                </a>
              </div>
            </div>
            <img
              src="./dot1.png"
              className="absolute top-0 right-0 "
              width={250}
              height={250}
            />
          </div>
      </div>
    </div>
  );
}

export default Cta2;
