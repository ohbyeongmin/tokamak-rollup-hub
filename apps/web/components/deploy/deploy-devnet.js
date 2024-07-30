'use client'

import Link from "next/link";
import GeneralBtn from "../buttons/general";
import ImageBtn from "../buttons/image-button";
import JSONPretty from "react-json-pretty";
import DownloadIcon from "/public/Download.png";
import CopyIcon from "/public/Copy.png"
import Image from "next/image";
import { useRef } from "react";


export default function DeployDevnet() {
  const sampleData = {
    "l1ChainID": 900,
    "l2ChainID": 901,
    "l2BlockTime": 2,
    "nativeTokenName": "Tokamak Network Token",
    "nativeTokenSymbol": "TON",
    "nativeTokenAddress": "0x75fE809aE1C4A66c27a0239F147d0cc5710a104A",
    "maxSequencerDrift": 300,
    "sequencerWindowSize": 200,
    "channelTimeout": 120,
    "p2pSequencerAddress": "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "batchInboxAddress": "0xff00000000000000000000000000000000000901",
    "batchSenderAddress": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "cliqueSignerAddress": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "l1UseClique": true,
    "l1StartingBlockTag": "latest",
    "l2OutputOracleSubmissionInterval": 10,
    "l2OutputOracleStartingTimestamp": 0,
    "l2OutputOracleStartingBlockNumber": 0,
    "l2OutputOracleProposer": "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "l2OutputOracleChallenger": "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    "l2GenesisBlockGasLimit": "0x1c9c380",
    "l1BlockTime": 3,
    "baseFeeVaultRecipient": "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
    "l1FeeVaultRecipient": "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
    "sequencerFeeVaultRecipient": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "baseFeeVaultMinimumWithdrawalAmount": "0x8ac7230489e80000",
    "l1FeeVaultMinimumWithdrawalAmount": "0x8ac7230489e80000",
    "sequencerFeeVaultMinimumWithdrawalAmount": "0x8ac7230489e80000",
    "baseFeeVaultWithdrawalNetwork": "remote",
    "l1FeeVaultWithdrawalNetwork": "remote",
    "sequencerFeeVaultWithdrawalNetwork": "remote",
    "proxyAdminOwner": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "finalSystemOwner": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "portalGuardian": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "finalizationPeriodSeconds": 2,
    "fundDevAccounts": true,
    "l2GenesisBlockBaseFeePerGas": "0x1",
    "gasPriceOracleOverhead": 2100,
    "gasPriceOracleScalar": 1000000,
    "enableGovernance": true,
    "governanceTokenSymbol": "OP",
    "governanceTokenName": "Optimism",
    "governanceTokenOwner": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "eip1559Denominator": 50,
    "eip1559DenominatorCanyon": 250,
    "eip1559Elasticity": 6,
    "l1GenesisBlockTimestamp": "0x64c811bf",
    "l2GenesisRegolithTimeOffset": "0x0",
  }

  const inputs = {
    cloneRepoValue: 'git clone https://github.com/tokamak-network/tokamak-thanos.git',
    makeBuildValue: 'make build',
    devnetUpValue: 'make devnet-up',
    cdGettingStartedValue: 'cd packages/tokamak/contract-bedrock/scripts/getting-started',
    versionScriptValue: './version.sh',
    dockerComposeVersionValue: 'docker compose version'
  }

  const { cloneRepoValue,
    makeBuildValue,
    devnetUpValue,
    cdGettingStartedValue,
    versionScriptValue,
    dockerComposeVersionValue
  } = inputs;

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    alert('Copied to clipboard.');
  }

  return (
    <div className="w-full py-8 flex lg:flex-row flex-col justify-center items-start text-gray-400">
      <div className="lg:w-1/2 w-full p-6 gap-8 flex flex-col">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-xl text-white font-semibold">How to deploy rollup locally</h3>
          <div>
            <p>
              Please refer to this <Link href={""}><span className="text-tokamak-blue underline">document</span></Link> for any prerequisite installations before deploying the rollup in your local environment.
            </p>
          </div>
          <div>
            <p>
              Download the JSON file generated based on your input.
            </p>
            <p>
              Your own rollup will be created.
            </p>
          </div>
          <GeneralBtn isActive={true} >
            <div className="flex w-full justify-center gap-2 items-center">
              <Image src={DownloadIcon} className="w-[14px] h-[14px]" />
              <span className="text-[14px] font-semibold">Download file</span>
            </div>
          </GeneralBtn>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>First, copy the repository below to the PCs you want to deploy locally.</p>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={cloneRepoValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(cloneRepoValue)
            }} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>json file and overwrite it with devnetL1-template.json.</p>
          <p>
            Go to the repository you cloned and type make build. This will install the various files for the rollup deployment.
          </p>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={makeBuildValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(makeBuildValue)
            }} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>
            When all is done, type make devnet-up to deploy the rollup with the information from the build.
          </p>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={devnetUpValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(devnetUpValue)
            }} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>
            If you need to check the version of a dependency you installed, type the following
          </p>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={cdGettingStartedValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(cdGettingStartedValue)
            }} />
          </div>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={versionScriptValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(versionScriptValue)
            }} />
          </div>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={dockerComposeVersionValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(dockerComposeVersionValue)
            }} />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 rounded-2xl bg-card-background flex flex-col gap-4">
        <h3 className="text-xl text-white font-semibold">Rollup information</h3>
        <div className="bg-black rounded-2xl p-4 overflow-x-scroll">
          <JSONPretty id="json-pretty-test" style={{ fontSize: "0.8rem" }} data={sampleData} theme={{
            'key': 'color:#92E391',
            'string': 'color:#ABD6FC',
            'value': 'color:#82C0FA',
            'boolean': 'color:#82C0FA'
          }}>
          </JSONPretty>
        </div>
      </div>
    </div >
  )
}
