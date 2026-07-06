import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";

type BrandMarkProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function BrandMark({ compact = false, inverted = false }: BrandMarkProps) {
  if (SITE_CONFIG.logoSrc) {
    return (
      <Image
        src={SITE_CONFIG.logoSrc}
        alt="Logo da Jana Viana Brechó"
        width={compact ? 148 : 360}
        height={compact ? 48 : 360}
        className={compact ? "h-10 w-auto object-contain" : "h-auto w-full object-contain"}
        priority={!compact}
      />
    );
  }

  return (
    <span
      className={`brand-fallback ${compact ? "brand-fallback--compact" : ""} ${
        inverted ? "brand-fallback--inverted" : ""
      }`}
      aria-label="Jana Viana Brechó"
    >
      <span>Jana Viana</span>
      <strong>Brechó</strong>
    </span>
  );
}
