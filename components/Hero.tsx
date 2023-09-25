import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
];

export default function Hero({
  name,
  navbar,
  heading,
  description,
}: {
  name: string;
  navbar: any;
  heading: any;
  description: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 bg-gray-900">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-2 p-1.5 ml-8">
              <span className="sr-only">{name}</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <div className="hidden lg:flex lg:gap-x-12 ml-10">
              {navbar.map((item: any) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="bg-gray-800  text-white rounded-full px-4 py-2 mr-2"
            >
              Log In
            </a>
            <a
              href="#"
              className="bg-blue-400  text-white rounded-full px-4 py-2  mr-2"
            >
              Sign Up
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navbar.map((item: any) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative bg-black isolate overflow-hidden pt-14">
        <div className="w-full h-full absolute">
          <div className="lg:w-1/5 lg:h-1/2 lg:blur-[300px] md:w-1/5  md:h-1/2 md:blur-[250px]  left-0 top-[0] absolute bg-red-500  rounded-full blur-[230px] w-1/2 h-1/2" />
          <div className="lg:w-1/5 lg:h-1/2 lg:blur-[300px] md:w-1/5 md:h-1/2 md:blur-[250px]  right-0 top-0 absolute bg-cyan-400  rounded-full blur-[230px] w-1/2 h-1/2" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-6xl font-inter font-extrabold  text-white sm:text-6xl">
              {heading.heading1}
              <span className="text-6xl font-inter font-medium  text-white sm:text-6xl">{heading.heading2}</span>
            </h1>
            <h2 className="text-6xl font-inter font-extrabold  text-white sm:text-6xl">
            {heading.heading3}
            </h2>

            <p className="mt-6 text-xl font-inter font-normal leading-7	   text-gray-200">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-blue-400 text-lg font-medium  text-white rounded-full px-8 py-3  mr-2"
              >
                Get Started
              </a>

              <a
                href="#"
                className="bg-gray-800 text-lg font-medium  text-blue-400 rounded-full px-8 py-3  mr-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
