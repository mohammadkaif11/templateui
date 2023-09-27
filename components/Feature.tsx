import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const icons = [
  {
    id: "RrEoHXEL6P",
    name: "Spam report",
    icon: TrashIcon,
  },
  {
    id: "RrEoHXEL6Q",
    name: "Compose in markdown",
    icon: PencilSquareIcon,
  },
  {
    id: "RrEoHXEL6R",
    name: "Email commenting",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    id: "RrEoHXEL6S",
    name: "Customer connections",
    icon: HeartIcon,
  },
];

export default function Features({ feature }: { feature: any }) {
  return (
    <div className="bg-black w-full">
      <div className="bg-black py-24 sm:py-32 max-w-[1400px] mx-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="relative">
              <h2 className="text-4xl font-inter font-semibold leading-10 text-white">
                {feature.title}{" "}
              </h2>
              <img
                src="./template_4_feature.png"
                className="absolute hidden -bottom-20 -left-40 lg:block"
                width={300}
                height={400}
              />
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {feature.features.map((feature: any) => (
                <div key={feature.id}>
                  <dt className="text-lg font-inter font-medium leading-6 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400">
                      {icons.map(
                        (data: any, index: number) =>
                          data.id === feature.id && (
                            <data.icon
                              key={data.id}
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          )
                      )}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-1 text-base font-inter font-normal leading-6 text-gray-500">
                    {feature.desc}
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
