import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

export function FloatingActions() {
  return (
    <WhatsAppLink
      ariaLabel="Falar com a Jana Viana Brechó pelo WhatsApp"
      className="floating-whatsapp"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
      <span className="hidden text-sm font-bold sm:inline">Falar no WhatsApp</span>
    </WhatsAppLink>
  );
}
