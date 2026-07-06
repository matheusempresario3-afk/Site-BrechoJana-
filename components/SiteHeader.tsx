"use client";

import { useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { WhatsAppLink } from "./WhatsAppLink";
import { SITE_CONFIG } from "@/lib/site-config";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Categorias", href: "#categorias" },
  { label: "Novidades", href: "#novidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Ir para o início" onClick={() => setIsOpen(false)}>
          <BrandMark compact />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="Abrir Instagram da Jana Viana Brechó"
          >
            <Instagram aria-hidden="true" className="size-4" />
          </a>
          <WhatsAppLink className="button button--wine h-11 px-5 text-sm" ariaLabel="Falar com a Jana Viana Brechó pelo WhatsApp">
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </WhatsAppLink>
        </div>

        <button
          type="button"
          className="icon-button sm:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div id="menu-mobile" className="border-t border-black/10 bg-white px-4 py-4 shadow-soft sm:hidden">
          <nav aria-label="Navegação para celular" className="grid">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="button button--outline h-12 text-sm">
              <Instagram aria-hidden="true" className="size-4" />
              Instagram
            </a>
            <WhatsAppLink className="button button--wine h-12 text-sm">
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
