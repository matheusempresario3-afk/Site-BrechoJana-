import type { ReactNode } from "react";
import { createWhatsAppUrl } from "@/lib/site-config";

export const whatsappUrl = createWhatsAppUrl;

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
};

export function WhatsAppLink({
  children,
  className,
  message,
  ariaLabel
}: WhatsAppLinkProps) {
  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
