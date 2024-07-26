"use client";

import clsx from "clsx";
import Link from "next/link";
import GeneralBtn from "../buttons/general";
import { horizonCards, verticalCards } from "./3d-cards";

const deployInfos = [
  {
    type: "op",
    isActive: true,
    description:
      "Customized L2 stack built on Optimism, which offers fast and affordable computation and state updates by using optimistic rollup. Along with Optimism’s capabilities, this stack also includes a flexible transaction fee to enhance the user experience.",
    docsUrl: "",
    superScript: ["OP", "text-optimism-red"],
  },
  {
    type: "zk",
    isActive: false,
    description:
      "Cutting-edge virtual machine for L2, designed to work with ZKSNARKS. It supports a previously unseen L2 rollup architecture that reduces computational complexity without compromising security or privacy.",
    docsUrl: "",
    superScript: ["ZK+", "text-zeroknowledge-green"],
  },
];

export default function DeployCard() {
  return (
    <div className="flex flex-col gap-16 md:flex-row">
      {deployInfos.map((info, index) => {
        return (
          <div
            key={index}
            className="flex h-[37rem] flex-col justify-between md:w-[22rem] lg:w-[30rem] xl:w-[36rem]"
          >
            <div className="flex h-full items-center">
              {info.type === "op" ? horizonCards() : verticalCards()}
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-5 text-center">
              <div className="flex h-full flex-col gap-4">
                <h1 className="h-9 text-3xl font-bold">
                  Tokamak
                  <sup className={info.superScript[1]}>
                    {" " + info.superScript[0]}
                  </sup>
                </h1>
                <div className="flex flex-col justify-between text-lg md:min-h-64 lg:min-h-44 xl:min-h-32">
                  <div>
                    <p className="text-gray-500">{info.description}</p>
                  </div>
                  <Link href={info.docsUrl}>
                    <span className="font-semibold text-tokamak-blue underline">
                      For additional information, check out Documentation.
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <GeneralBtn isActive={info.isActive}>
                  {info.isActive ? "Choose" : "Coming Soon"}
                </GeneralBtn>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
