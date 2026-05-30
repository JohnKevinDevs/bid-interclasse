import Image from "next/image";

interface MediaFrameProps {
  src?: string;
  alt: string;
  aspect?: "portrait" | "wide";
  className?: string;
}

export function MediaFrame({
  src,
  alt,
  aspect = "wide",
  className = "",
}: MediaFrameProps) {
  const aspectClass = aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 ${aspectClass} ${className}`}
    >
      <Image
        src={src ?? "/images/sports/placeholder-sport.svg"}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
