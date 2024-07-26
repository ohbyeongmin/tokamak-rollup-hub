import clsx from "clsx";

export default function GeneralBtn({ isActive, ...props }) {
  return (
    <button
      className={clsx("w-48 rounded-3xl py-3 text-sm font-medium", {
        "bg-tokamak-blue hover:bg-tokamak-blue-hover": isActive,
        "cursor-default bg-gray-900 text-gray-400": !isActive,
      })}
      {...props}
    />
  );
}
