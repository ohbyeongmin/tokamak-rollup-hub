import DeployCard from "@/components/deploy/deploy-card";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-7 px-6 py-8 xl:px-16">
      <h1 className="text-3xl font-semibold">Deploy</h1>
      <div>
        <DeployCard />
      </div>
    </div>
  );
}
