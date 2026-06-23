import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

const navItems = [
  { label: "Garimpo", href: "#garimpo" },
  { label: "Achadinhos", href: "#achadinhos" },
  { label: "Triagem", href: "#triagem" },
  { label: "Loja", href: "#loja" }
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/95 text-ink backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="font-heading text-sm font-black uppercase tracking-[0.18em] text-wine">
          Jana Viana
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-wine">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/brechodajanaviana/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da Jana Viana Brechó"
            className="grid size-10 place-items-center border border-black/10 bg-white transition hover:border-wine hover:text-wine"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href="#loja"
            aria-label="Ver endereço da loja"
            className="hidden size-10 place-items-center border border-black/10 bg-white transition hover:border-wine hover:text-wine sm:grid"
          >
            <MapPin className="size-4" />
          </a>
          <WhatsAppLink className="hidden items-center gap-2 bg-wine px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink sm:flex">
            <MessageCircle className="size-4" />
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </header>
  );
}
