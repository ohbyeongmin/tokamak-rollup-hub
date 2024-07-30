"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowDown from "/public/ArrowDown.png";

export function NavLinks({ links }) {
  const pathname = usePathname();

  return (
    <nav className="hidden w-full justify-around gap-8 md:flex lg:gap-0">
      {links.map((link, index) => {
        const isActive = pathname.includes(link.href);
        return (
          <Link
            key={index}
            href={link.href}
            className={clsx({
              "hover:text-tokamak-blue": !isActive,
              "text-tokamak-blue": isActive,
              "flex items-center justify-center gap-1": link.arrowDown,
            })}
          >
            {link.name}
            {link.arrowDown ? <Image src={ArrowDown}></Image> : undefined}
          </Link>
        );
      })}
    </nav>
  );
}
