import clsx from "clsx";

export default function GeneralBtn({ isActive, toggleClick, ...props }) {
  return (
    <button
      className={clsx("text-white w-48 rounded-3xl py-3 text-sm font-medium", {
        "cursor-default bg-gray-900 text-gray-400": !isActive,
        "bg-tokamak-blue-hover": toggleClick && isActive,
        "bg-tokamak-blue hover:bg-tokamak-blue-hover": !toggleClick && isActive,
      })}
      {...props}
    />
  );
}
