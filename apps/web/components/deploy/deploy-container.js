
export default function DeployContainer({ children, title }) {
  return (
    <div className="flex w-full flex-col items-center xl:w-[80rem]">
      <h1 className="text-3xl text-center font-semibold">{title}</h1>
      {children}
    </div>
  )
}
