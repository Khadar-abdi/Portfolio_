import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "Portfolio_Khader",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
      <body>


        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          
        >


          <main className="flex flex-col xl:px-56 lg:px-52 md:px-20  ">
            <Header />
            {children}
            <Footer />
          </main>

        </ThemeProvider>
      </body>
    </html>

  );
}
