'use client'

import Link from "next/link";
import GeneralBtn from "../buttons/general";
import ImageBtn from "../buttons/image-button";
import JSONPretty from "react-json-pretty";
import DownloadIcon from "/public/Download.png";
import CopyIcon from "/public/Copy.png"
import Image from "next/image";

const downloadJson = (data, filename) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function DeployDevnet({ deployConfig }) {
  const inputs = {
    cloneRepoValue: 'git clone https://github.com/tokamak-network/tokamak-thanos.git',
    makeBuildValue: 'make build',
    devnetUpValue: 'make devnet-up',
    cdGettingStartedValue: 'cd packages/tokamak/contract-bedrock/scripts/getting-started',
    versionScriptValue: './version.sh',
    dockerComposeVersionValue: 'docker compose version'
  }

  const handleDownload = () => {
    downloadJson(deployConfig, 'deploy-config.json')
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
          <GeneralBtn isActive={true} onClick={handleDownload} >
            <div className="flex w-full justify-center gap-2 items-center">
              <Image src={DownloadIcon} className="w-[14px] h-[14px]" />
              <span className="text-[14px] font-semibold">Download file</span>
            </div>
          </GeneralBtn>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>First, copy the repository below to the PCs you want to deploy locally.</p>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={cloneRepoValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
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
            <input type="text" name="test" id="test" value={makeBuildValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
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
            <input type="text" name="test" id="test" value={devnetUpValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
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
            <input type="text" name="test" id="test" value={cdGettingStartedValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(cdGettingStartedValue)
            }} />
          </div>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={versionScriptValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(versionScriptValue)
            }} />
          </div>
          <div className="flex items-center w-full justify-between bg-[#080A0E] rounded-xl py-2 px-4 border-[1px] border-[#192232]">
            <input type="text" name="test" id="test" value={dockerComposeVersionValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
            <ImageBtn type="button" image={CopyIcon} onClick={() => {
              copyToClipboard(dockerComposeVersionValue)
            }} />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 max-h-[100vh] w-full p-4 rounded-2xl bg-card-background flex flex-col gap-4">
        <h3 className="text-xl text-white font-semibold">Rollup information</h3>
        <div className="bg-black rounded-2xl p-4 overflow-x-scroll">
          <JSONPretty id="json-pretty-test" style={{ fontSize: "0.8rem" }} data={deployConfig} theme={{
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
