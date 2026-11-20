"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

const StartupImage = ({
  src,
  alt,
  className,
}: {
  src?: string | null;
  alt: string;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} (image unavailable)`}
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-white-100 text-black-300 min-h-[164px]",
          className
        )}
      >
        <ImageOff className="size-8" />
        <span className="text-14-normal">Image unavailable</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

export default StartupImage;
