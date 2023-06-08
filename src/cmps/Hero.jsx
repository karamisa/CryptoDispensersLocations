

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-20 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Find a CryptoDispensers Bitcoin ATM</span>{' '}
              <span className="block text-[#f7931a] xl:inline">Near you</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                With over 16k CDReload locations across the US, we are the largest Bitcoin ATM network in the world.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/findalocation"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#356ce0] hover:bg-[#356ce0] md:py-4 md:text-lg md:px-10"
                >
                  Store Locator
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="/us"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#356ce0] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Browse Directory
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 hidden lg:block md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-contain"
            src="https://assets.website-files.com/615661aaff6efe50e081960a/636178790a5adbe3cce97543_BitcoinATM.svg"
            alt=""
            width={500}
            height={500}

          />
        </div>
      </main>
      </div>
    </section>
  );
}