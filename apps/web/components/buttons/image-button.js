import Image from "next/image";

export default function ImageBtn({ image, ...props }) {
  return (
    <button
      {...props}
    >
      <Image
        src={image}
        width={24}
        height={24}
      />
    </button>
  );
}
