import DeployContainer from "@/components/deploy/deploy-container";
import DeployDevnet from "@/components/deploy/deploy-devnet";

export default function Page() {
  return (
    <div className="flex justify-center gap-7 px-6 py-8 xl:px-12">
      <DeployContainer title={'Local Deployment Guide'}>
        <DeployDevnet />
      </DeployContainer>
    </div>
  )
}
