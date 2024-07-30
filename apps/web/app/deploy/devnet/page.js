import DeployContainer from "@/components/deploy/deploy-container";
import DeployDevnet from "@/components/deploy/deploy-devnet";
import { getData } from "@/components/deploy/details-action";

export default async function Page({ searchParams }) {
  const data = await getData(searchParams.rollupName)

  return (
    <div className="flex justify-center gap-7 px-6 py-8 xl:px-12">
      <DeployContainer title={'Local Deployment Guide'}>
        <DeployDevnet deployConfig={data} />
      </DeployContainer>
    </div>
  )
}
