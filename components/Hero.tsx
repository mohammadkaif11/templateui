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
    <div className="bg-black relative">
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
              className="bg-sky-400  text-white rounded-full px-4 py-2  mr-2"
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
      <div className="bg-black isolate  pt-14 sm:px-3 max-w-[1596px] mx-auto">
          <img src="./heroRed.png" className="absolute   left-0" />
          <img src="./heroCyan.png" className="absolute  right-0" />
     
      
        <div className="py-32  sm:py-48 lg:py-56">
          <div className="mx-auto text-center max-w-3xl">
            <h1 className="text-6xl  font-inter font-meduim text-white">
              {heading.heading1}
              <span className="text-6xl font-inter font-extrabold  text-sky-400">
                {heading.heading2}
              </span>
            </h1>
            <h2 className="text-6xl   font-inter font-meduim  text-white">
              {heading.heading3}
            </h2>
          </div>
          <div className=" mx-auto  text-center max-w-xl">
            <p className="mt-6 text-xl font-inter font-normal leading-7	   text-gray-200">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-sky-400 text-lg font-medium  text-white rounded-full px-8 py-3  mr-2"
              >
                Get Started
              </a>

              <a
                href="#"
                className="bg-gray-800 text-lg font-medium  text-sky-400 rounded-full px-8 py-3  mr-2"
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
