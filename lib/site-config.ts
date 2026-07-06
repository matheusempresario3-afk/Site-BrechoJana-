export const SITE_CONFIG = {
  name: "Jana Viana Brechó",
  instagramHandle: "@brechodajanaviana",
  instagramUrl: "https://www.instagram.com/brechodajanaviana/",
  whatsappNumber: "5519991915448",
  groupLink: "",
  logoSrc: "",
  city: "Monte Mor/SP",
  address: "Avenida Jânio Quadros, 771 - Centro - Monte Mor/SP",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida%20J%C3%A2nio%20Quadros%20771%20Centro%20Monte%20Mor%20SP"
} as const;

export function createWhatsAppUrl(
  message = "Olá, vim pelo site da Jana Viana Brechó e gostaria de saber quais são as novidades disponíveis hoje."
) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
