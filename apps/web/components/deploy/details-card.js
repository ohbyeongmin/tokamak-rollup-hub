'use client'

import Link from "next/link"
import ImageBtn from "../buttons/image-button"
import GeneralBtn from "../buttons/general"
import Cancel from "/public/Cancel.png";
import { handleSubmit } from "./details-action"
import { useState } from "react"
import { details } from "@/lib/deploy"
import { objectMap } from "@/lib/utils"

export default function DetailsCard({ rollupType, networkType }) {
  const { description, networks } = details.find((t) => {
    return t.type === rollupType
  })

  const [detailValues, setDetailValues] = useState({
    "rollupName": "",
    "chainId": null,
    "adminAddress": "",
    "sequencerAddress": "",
    "batcherAddress": "",
    "proposerAddress": "",
  });

  const valueChange = (event, key) => {
    const {
      currentTarget: { value },
    } = event;
    const changeObject = objectMap(detailValues, (v, k) => {
      return k === key ? value : v
    })
    setDetailValues(changeObject)
  }

  const clearValue = (key) => {
    const newObject = objectMap(detailValues, (v, k) => {
      return k === key ? typeof v == 'number' ? null : "" : v
    })
    setDetailValues(newObject)
  }


  return (
    <div className="flex flex-col w-full items-center py-2 gap-8">
      {networkType}
      <pre className="font-sans text-center text-lg text-gray-400 whitespace-pre-wrap">
        {description} <Link href={''}><span className="text-tokamak-blue underline">documents.</span></Link>
      </pre>
      <form className="flex flex-col justify-center items-center w-full text-gray-400 gap-8">
        <div className="flex bg-card-background rounded-xl p-4 w-full gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-2 md:w-3/5">
            <label htmlFor="rollupName">Rollup Name</label>
            <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl p-2 border-[1px] border-[#192232]">
              <input type="text" name="rollupName" onChange={(e) => {
                valueChange(e, 'rollupName')
              }} value={detailValues['rollupName']} id="rollupName" className="w-full bg-transparent outline-none text-white caret-tokamak-blue" />
              <ImageBtn type="button" image={Cancel} onClick={() => {
                clearValue('rollupName')
              }} />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-2/5">
            <label htmlFor="chainId">Chain ID</label>
            <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl p-2 border-[1px] border-[#192232]">
              <input type="number" id="chainId" onChange={(e) => {
                valueChange(e, 'chainId')
              }} value={detailValues['chainId']} name="chinId" className="w-full [&::-webkit-inner-spin-button]:appearance-none bg-transparent outline-none text-white caret-tokamak-blue" />
              <ImageBtn type="button" image={Cancel} onClick={() => {
                clearValue('chainId')
              }} />
            </div>
            <p className="text-[13px]">
              Please enter the value you registered in&nbsp;
              <Link href={''}>
                <span className="text-tokamak-blue underline">
                  Chainlist
                </span>
              </Link> beforehand
            </p>
          </div>
        </div>
        <div className="flex bg-card-background rounded-xl p-4 w-full gap-8 lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-1/3 lg:items-start lg:text-start w-3/4 flex flex-col items-center text-center gap-2">
            <h3 className="text-white text-lg">Address Set-up</h3>
            <p>Please list the main addresses that will be used in your rollup. The required ones are automatically populated and can be edited.</p>
          </div>
          <div className="lg:w-2/3 gap-6 flex flex-col w-full">
            <div className="md:flex-row flex gap-8 flex-col">
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="admin">Admin</label>
                <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl p-2 border-[1px] border-[#192232]">
                  <input type="text" name="admin" id="admin" onChange={(e) => {
                    valueChange(e, 'adminAddress')
                  }} value={detailValues['adminAddress']} className="w-full bg-transparent outline-none text-white caret-tokamak-blue" />
                  <ImageBtn type="button" image={Cancel} onClick={() => {
                    clearValue('adminAddress')
                  }} />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="sequencer">Sequencer</label>
                <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl p-2 border-[1px] border-[#192232]">
                  <input type="text" name="sequencer" id="sequencer" onChange={(e) => {
                    valueChange(e, 'sequencerAddress')
                  }} value={detailValues['sequencerAddress']} className="w-full bg-transparent outline-none text-white caret-tokamak-blue" />
                  <ImageBtn type="button" image={Cancel} onClick={() => {
                    clearValue('sequencerAddress')
                  }} />
                </div>
              </div>
            </div>
            <div className="md:flex-row flex-col flex gap-8">
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="batcher">Batcher</label>
                <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl p-2 border-[1px] border-[#192232]">
                  <input type="text" name="batcher" id="batcher" onChange={(e) => {
                    valueChange(e, 'batcherAddress')
                  }} value={detailValues['batcherAddress']} className="w-full bg-transparent outline-none text-white caret-tokamak-blue" />
                  <ImageBtn type="button" image={Cancel} onClick={() => {
                    clearValue('batcherAddress')
                  }} />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="proposer">Proposer</label>
                <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl p-2 border-[1px] border-[#192232]">
                  <input type="text" name="proposer" id="proposer" onChange={(e) => {
                    valueChange(e, 'proposerAddress')
                  }} value={detailValues['proposerAddress']} className="w-full bg-transparent outline-none text-white caret-tokamak-blue" />
                  <ImageBtn type="button" image={Cancel} onClick={() => {
                    clearValue('proposerAddress')
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <GeneralBtn isActive={true} formAction={handleSubmit}>Deploy rollup</GeneralBtn>
      </form >
    </div >
  )
}
