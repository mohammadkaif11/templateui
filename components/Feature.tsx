import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const icons = [
  {
    key: 1,
    name: "Spam report",
    icon: TrashIcon,
  },
  {
    key: 2,
    name: "Compose in markdown",
    icon: PencilSquareIcon,
  },
  {
    key: 3,
    name: "Email commenting",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    key: 4,
    name: "Customer connections",
    icon: HeartIcon,
  },
];

export default function Features({
  heading,
  features,
}: {
  heading: string;
  features: any;
}) {
  return (
    <div className="bg-black w-full">

<div className="bg-black py-24 sm:py-32 max-w-[1400px] mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="relative">
            <h2 className="text-4xl font-inter font-semibold leading-10 text-white">
              {heading}{" "}
            </h2>
            <img
              src="./image1.png"
              className="absolute hidden -bottom-20 -left-40 lg:block"
              width={300}
              height={400}
            />
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature: any) => (
              <div key={feature.name}>
                <dt className="text-lg font-inter font-medium leading-6 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400">
                    {icons.map(
                      (data: any, index: number) =>
                        data.key === feature.key && (
                          <data.icon
                            key={index}
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        )
                    )}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base font-inter font-normal leading-6 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  );
}
