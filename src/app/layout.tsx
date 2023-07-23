import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWRE NFT Launchpad",
  description: "Ed in Between Lines",
  icons: {
    icon: "/logos/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* <body className={inter.className}> */}

      <body className='main_container'>
        <div>{children}</div>
        {/* <div className='scrolling_text_container'>
          <p className='scrolling_text'>
            Auction is not <span className='live'>LIVE</span> yet
          </p>
        </div> */}
      </body>
    </html>
  );
}
