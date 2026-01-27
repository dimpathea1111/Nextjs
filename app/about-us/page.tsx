import React from "react";
import { useState } from "react";

export default function AboutUsPage(){

      const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);


    return(
            <div className="bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold text-white">
              Product
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Features
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Marketplace
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Company
            </a>
          </div>

          {/* Desktop Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden bg-gray-900 bg-opacity-95">
            <div className="flex justify-between p-6">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-2 px-6">
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Product
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Features
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Company
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Log in
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[144.5rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[288.75rem]"
          ></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg text-gray-400 sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    )
}