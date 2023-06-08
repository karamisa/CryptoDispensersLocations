
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logosmall.svg"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'CDReload', href: 'https://www.cryptodispensers.com/cdreload' },
  { name: 'BitcoinATMs', href: 'https://www.cryptodispensers.com/bitcoina-tms' },
  { name: 'About', href: 'https://www.cryptodispensers.com/about-us' },
  { name: 'FAQ', href: 'https://www.cryptodispensers.com/contact-us' },
]

export default function NavBar() {
  return (
    <header className="bg-transparent">
      <nav className="container mx-auto" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center px-2">
            <Link href="https://www.cryptodispensers.com">
              <Image src="https://assets.website-files.com/615661aaff6efe50e081960a/615661aaff6efe9c5381965b_CryptoDispensers-logo-horizontal.svg" alt="CryptoDispensers Logo" width={200} height={50} />
            </Link>
          </div>
          {/* <div className="flex items-center md:hidden">
            <Link href="https://www.cryptodispensers.com">
              <Image src={logo} alt="CryptoDispensers Logo" width={200} height={50} />
            </Link>
          </div> */}
          <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-[#232934] hover:text-[#356ce0]">
                  {link.name}
                </a>
              ))}
          </div>
          <div className="ml-10 space-x-4 hidden sm:block">
            <Link
              href="#"
              className="w-auto border border-[#356ce0] py-2 px-6 rounded text-[#356ce0] hover:bg-[#356ce0] hover:text-white hover:border-white hover:border hover:rounded"
            >
              Login
            </Link>
            <Link
              href="#"
              className="w-auto border border-white bg-[#356ce0] py-2 px-6 rounded text-white hover:bg-white hover:text-[#356ce0] hover:border-[#356ce0] hover:border hover:rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-[#232934] hover:text-[#356ce0]">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
