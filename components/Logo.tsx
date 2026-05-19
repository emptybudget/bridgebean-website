import Image from "next/image";

export default function Logo({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="Bridgebean"
      width={size}
      height={size}
      sizes={`${size}px`}
      className={className}
      priority
    />
  );
}
