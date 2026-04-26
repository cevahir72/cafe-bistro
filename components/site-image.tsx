import Image from "next/image";

type SiteImageProps = {
  alt: string;
  src: string;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "auto" | "high" | "low";
  decoding?: "async" | "sync" | "auto";
  sizes?: string;
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 1600;
const DEFAULT_HEIGHT = 1200;

export function SiteImage({
  alt,
  src,
  className,
  priority = false,
  loading,
  fetchPriority,
  decoding,
  sizes,
  width,
  height,
}: SiteImageProps) {
  return (
    <Image
      alt={alt}
      className={className}
      decoding={decoding ?? "async"}
      fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
      height={height ?? DEFAULT_HEIGHT}
      loading={priority ? undefined : (loading ?? "lazy")}
      priority={priority}
      sizes={sizes ?? "100vw"}
      src={src}
      width={width ?? DEFAULT_WIDTH}
    />
  );
}