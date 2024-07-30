'use client'
import Link from "next/link";
import GeneralBtn from "../buttons/general";
import { horizonCards, verticalCards } from "./3d-cards";
import { rollups } from "@/lib/deploy";
import { useState } from "react";

export default function DeployCard({ updateRollupType, resetTypes, rollupType }) {
  const [toggleClick, setClick] = useState(false)

  function updateType(t) {
    if (rollupType !== '') {
      resetTypes()
    } else {
      updateRollupType(t)
    }
  }

  return (
    <div className="flex flex-col gap-16 md:flex-row">
      {rollups.map((info, index) => {
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
                  <sup className={info.type === "op" ? "text-optimism-red" : "text-zeroknowledge-green"}>
                    {" " + info.superScript[0]}
                  </sup>
                </h1>
                <div className="flex flex-col justify-between text-lg md:min-h-64 lg:min-h-44 xl:min-h-32">
                  <div>
                    <p className="text-gray-400">{info.description}</p>
                  </div>
                  <Link href={info.docsUrl}>
                    <span className="font-semibold text-tokamak-blue underline">
                      For additional information, check out Documentation.
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <GeneralBtn isActive={info.isActive} toggleClick={toggleClick} onClick={() => {
                  if (info.isActive) {
                    updateType(info.type)
                    setClick(!toggleClick)
                  }
                }}>
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
