import Image from "next/image";
import ArrowTop from "/public/ArrowTop.png";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-5 fixed left-0 bottom-0 w-full h-20 size-3 ">
      <p className="font-normal flex gap-2 font-['Open_Sans'] text-copyright-gray ">
        <span>Copyright ©2024</span>
        <span className="text-zinc-200">Tokamak Network</span>
        <span className="hidden md:flex">All Rights Reserved.</span>
      </p>
      <div className="w-16 h-16 flex justify-center items-center">
        <Image src={ArrowTop}></Image>
      </div>
    </div>
  )
}
