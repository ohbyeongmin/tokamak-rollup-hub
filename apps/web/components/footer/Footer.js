import Image from "next/image";
import ArrowTop from "/public/ArrowTop.png";

export default function Footer() {
  return (
    <footer className="flex size-3 h-20 w-full items-center justify-between bg-black px-5">
      <p className="flex gap-2 font-['Open_Sans'] font-normal text-copyright-gray">
        <span>Copyright ©2024</span>
        <span className="text-zinc-200">Tokamak Network</span>
        <span className="hidden md:flex">All Rights Reserved.</span>
      </p>
      <div className="flex h-16 w-16 items-center justify-center">
        <Image src={ArrowTop}></Image>
      </div>
    </footer>
  );
}
