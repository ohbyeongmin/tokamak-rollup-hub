'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import ArrowDown from "/public/ArrowDown.png";

export function NavLinks({
  links,
}) {
  const pathname = usePathname();

  return (
    <nav className="hidden w-full justify-around gap-8 md:flex lg:gap-0">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            className={clsx({
              'hover:text-tokamak-blue': !isActive,
              'text-tokamak-blue': isActive,
              'flex justify-center items-center gap-1': link.arrowDown,
            })}
          >
            {link.name}
            {link.arrowDown
              ? <Image src={ArrowDown}></Image>
              : null
            }
          </Link>
        )
      })}
    </nav>
  )
}
