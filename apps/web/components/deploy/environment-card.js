'use client'
import { environments } from "@/lib/deploy"
import { objectMap } from "@/lib/utils"
import { clsx } from "clsx"
import { useState } from "react"

export default function EnvironmentCard({ type, networkType, updateNetworkType }) {
  const { description, cards } = environments.find((t) => {
    return t.type === type
  })

  function updateType(t) {
    if (networkType !== '' && networkType === t) {
      updateNetworkType('')
    } else {
      updateNetworkType(t)
    }
  }

  const [toggleClick, setToggleClick] = useState({
    "devnet": false,
    "testnet": false,
    "mainnet": false,
  })

  const clickEnvCard = (nType) => {
    const newObject = objectMap(toggleClick, (v, k) => {
      return k === nType ? !v : false
    })
    setToggleClick(newObject)
  }


  return (
    <div className="flex flex-col w-full items-center py-2 gap-8">
      <p className="text-gray-400 text-lg text-center">
        {description}
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:h-[20rem] gap-4 lg:h-72 xl:h-60">
        {cards.map((item, index) => {
          return (
            <div key={index} className={clsx("bg-card-background border-2 hover:border-tokamak-blue hover:border-2 hover:cursor-pointer rounded-2xl flex flex-col items-center text-center p-4 gap-4 md:w-1/3 md:h-full text-gra", {
              "border-transparent": !toggleClick[item.type],
              "border-tokamak-blue": toggleClick[item.type],
            })}
              onClick={() => {
                updateType(item.type)
                clickEnvCard(item.type)
              }}>
              <h3 className="font-[700] text-2xl">{item.title}</h3>
              <div className="text-gray-400 text-[1rem] flex flex-col justify-between h-full">
                <p>{item.description}</p>
                {item.isActive ? null : <span>Coming Soon</span>}
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}
