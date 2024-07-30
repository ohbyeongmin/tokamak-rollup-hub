'use client'

import DeployCard from "@/components/deploy/deploy-card";
import DeployContainer from "@/components/deploy/deploy-container";
import DetailsCard from "@/components/deploy/details-card";
import EnvironmentCard from "@/components/deploy/environment-card";
import { useState } from "react";

export default function Page() {
  const [rollupType, setRollupType] = useState("");
  const [networkType, setNetworkType] = useState("");

  function resetTypes() {
    setRollupType("")
    setNetworkType("")
  }

  return (
    <div className="flex flex-col items-center gap-7 px-6 py-8 xl:px-16">
      <div className="flex flex-col items-center gap-16">
        <DeployContainer title={'Deploy'}>
          <DeployCard updateRollupType={setRollupType} resetTypes={resetTypes} rollupType={rollupType} />
        </DeployContainer>
        {
          rollupType === ''
            ? null
            :
            <DeployContainer title={'Environment'}>
              <EnvironmentCard type={rollupType} networkType={networkType} updateNetworkType={setNetworkType} />
            </DeployContainer>
        }
        {
          rollupType === ''
            ? null
            :
            networkType === ''
              ? null
              :
              <DeployContainer title={'Your Rollup Details'}>
                <DetailsCard rollupType={rollupType} networkType={networkType} />
              </DeployContainer>
        }
      </div>
    </div>
  );
}
