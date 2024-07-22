import Link from "next/link";
import Image from "next/image";
import Logo from "/public/L2OndemandBI.png";
import TRM from "/public/TokamakRollupHub.png";
import Thanos from "/public/ThanosSymbol.png";
import ArrowDown from "/public/ArrowDown.png";
import MobileMenu from "/public/MobileMenu.png";

export default function NavBar() {
  return (
    <div className="relative flex min-h-20 items-center justify-center overflow-x-clip overflow-y-visible">
      <div className="elliptical absolute -top-[87px] min-h-[174px] min-w-[1000px] bg-custom-blue blur-3xl"></div>
      <div className="absolute left-0 top-0 flex h-full w-full grow items-center justify-between px-4 md:px-8">
        <div className="flex w-2/6">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Tokamak Rollup Hub Logo"
              className="h-7 w-8 object-contain"
            ></Image>
            <Image
              src={TRM}
              alt="Tokamak Rollup Hub"
              className="hidden h-4 w-44 object-contain lg:flex"
            ></Image>
          </Link>
        </div>
        <nav className="w-2/6">
          <ul className="hidden w-full justify-around gap-8 md:flex lg:gap-0">
            <li>
              <Link href={"/deploy"}>Deploy</Link>
            </li>
            <li>
              <Link href={"/discover"} className="flex items-center gap-1">
                Discover
                <Image src={ArrowDown} className="min-w-3"></Image>
              </Link>
            </li>
            <li>
              <Link href={"/more"} className="flex items-center gap-1">
                More
                <Image src={ArrowDown} className="min-w-3"></Image>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex w-2/6 justify-end">
          <div className="flex w-full items-center justify-end gap-4">
            <div className="flex min-h-8 min-w-8 items-center justify-center rounded-full border-2 border-tokamak-blue">
              <Image src={Thanos}></Image>
            </div>
            <button className="flex h-10 min-w-36 items-center justify-center rounded-3xl border-2 border-button-border-gray px-4 py-3 text-center text-xs text-button-text-gray">
              Connect Wallet
            </button>
            <Image
              src={MobileMenu}
              className="min-h-9 min-w-9 md:hidden"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
