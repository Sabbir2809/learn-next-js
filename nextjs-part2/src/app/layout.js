// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700"] });

export const metadata = {
  title: "Learn Next Js | Home",
  description: "Learn Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-300`}>
        {/* <Header></Header> */}
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
