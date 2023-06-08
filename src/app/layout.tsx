import { Metadata } from 'next';
import './globals.css'
import Navbar from '@/cmps/NavBar.jsx';
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: {
    default: "CryptoDispensers Bitcoin ATM locations",
    template: "%s | CryptoDispensers Bitcoin ATM locations",
  },
  description: "Browse all CryptoDispensers Bitcoin ATM locations near ne.",
  keywords: [
    "Bitcoin ATM Around Me",
    "Bitcoin ATM Locations",
    "Exchange Bitcoin for Cash",
    "Exchange Cash for Bitcoin",
    "Bitcoin ATM Near Me",
    "CryptoDispensers",
    "Crypto Dispensers",
    "Bitcoin ATM Locations Near Me",
    "Bitcoin to Cash",
    "Bitcoin",
    "Bitcoin near me",
    "Bitcoin ATM",
    "Cash for Crypto",
    "Cryptocurrency",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${poppins.className} flex flex-col h-screen`}>
        <header className="h-auto">
          <Navbar />
        </header>
        <main className="container mx-auto flex-1">
          {children}
        </main>
        <footer className="h-16 bg-gray-800">
          <div className="container mx-auto flex items-center justify-center h-full">
            <p className="text-gray-400 text-sm">
              &copy; 2021 CryptoDispensers. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
