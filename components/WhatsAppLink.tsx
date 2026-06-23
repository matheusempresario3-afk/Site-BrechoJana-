import type { ReactNode } from "react";

const phone = "5519991915448";
const defaultText =
  "Olá, vim pelo site da Jana Viana Brechó e quero planejar uma visita à loja.";

export function whatsappUrl(message = defaultText) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

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
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
