import type { ImgHTMLAttributes } from "react";

type SiteImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export function SiteImage({
  alt,
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...props
}: SiteImageProps) {
  return (
    <img
      alt={alt}
      decoding={decoding ?? "async"}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      loading={loading ?? (priority ? "eager" : "lazy")}
      {...props}
    />
  );
}