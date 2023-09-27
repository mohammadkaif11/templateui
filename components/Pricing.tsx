import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

interface Frequency {
  value: string;
  label: string;
  priceSuffix: string;
}

interface Tier {
  name: string;
  id: string;
  href: string;
  price: string | Record<string, string>;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
}

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const frequencies: Frequency[] = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const tiers: Tier[] = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$15", annually: "$144" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Custom",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    featured: false,
    cta: "Contact sales",
  },
];

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of all sizes
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? "bg-sky-400 text-white" : "text-gray-500",
                    "cursor-pointer rounded-full px-2.5 py-1"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-gray-900 ring-gray-900 rounded-3xl p-8 ring-1 xl:p-10"
            >
              <h3
                id={tier.id}
                className="text-white text-lg font-semibold leading-8"
              >
                {tier.name}
              </h3>
              <p className="text-white mt-4 text-sm leading-6">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-white text-4xl font-bold tracking-tight">
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[frequency.value]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-white text-sm font-semibold leading-6">
                    {frequency.priceSuffix}
                  </span>
                ) : null}
              </p>

              <ul
                role="list"
                className="text-white mt-8 space-y-3 text-sm leading-6 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className=" bg-sky-400 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
