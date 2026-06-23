import { MessageCircle, Navigation } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Avenida%20J%C3%A2nio%20Quadros%20771%20Centro%20Monte%20Mor%20SP";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-50 hidden items-center gap-2 md:flex">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir rota para Jana Viana Brechó"
          className="grid size-12 place-items-center rounded-full bg-white text-wine shadow-soft transition hover:-translate-y-1"
        >
          <Navigation className="size-5" />
        </a>
        <WhatsAppLink
          ariaLabel="Chamar Jana Viana Brechó no WhatsApp"
          className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:-translate-y-1 hover:shadow-soft"
        >
          <MessageCircle className="size-7" />
        </WhatsAppLink>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_auto] gap-2 border-t border-black/10 bg-white/95 p-3 shadow-soft backdrop-blur md:hidden">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 items-center justify-center gap-2 bg-wine px-4 text-xs font-bold uppercase tracking-[0.08em] text-white"
        >
          <Navigation className="size-4" />
          Planejar visita
        </a>
        <WhatsAppLink className="grid h-12 w-14 place-items-center bg-[#25D366] text-white">
          <MessageCircle className="size-5" />
        </WhatsAppLink>
      </div>
    </>
  );
}
