import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tokamak Rollup Hub",
  description: "Rollup your chain!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
