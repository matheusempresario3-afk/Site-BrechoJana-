import {
  ArrowRight,
  Baby,
  BadgePercent,
  CheckCircle2,
  Clock3,
  Gem,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Tag
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteHeader } from "@/components/SiteHeader";
import { TriagePanel } from "@/components/TriagePanel";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Avenida%20J%C3%A2nio%20Quadros%20771%20Centro%20Monte%20Mor%20SP";
const instagramUrl = "https://www.instagram.com/brechodajanaviana/";

const heroImage =
  "/images/jana-viana-hero.png";

const categories = [
  {
    title: "Moda feminina",
    text: "Blusas, vestidos, jeans, conjuntos e peças para garimpar com calma.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Moda masculina",
    text: "Peças casuais e básicas para o dia a dia, sem perder estilo.",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Moda infantil",
    text: "Opções para renovar as peças das crianças com economia.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Plus size",
    text: "Modelagens variadas e atendimento sem pressa para escolher bem.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Calçados",
    text: "Pares novos e seminovos para completar o visual da semana.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Acessórios",
    text: "Bolsas, bijuterias e detalhes que completam o visual.",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80"
  }
];

const finds = [
  {
    title: "Looks femininos",
    tag: "garimpo da semana",
    note: "Peças para passeio, trabalho e fim de semana.",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=82"
  },
  {
    title: "Moda para a família",
    tag: "variedade",
    note: "Opções femininas, masculinas e infantis em um só endereço.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=82"
  },
  {
    title: "Peças novas e seminovas",
    tag: "selecionados",
    note: "As novidades mudam conforme a entrada de peças na loja.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=82"
  },
  {
    title: "Calçados e detalhes",
    tag: "complete o visual",
    note: "Acessórios e calçados para deixar a produção pronta.",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=82"
  }
];

const proof = [
  "Loja física na Avenida Jânio Quadros, 771, no Centro de Monte Mor.",
  "Atendimento próximo para ajudar na escolha do estilo, tamanho e ocasião.",
  "Novidades frequentes para quem gosta de garimpar antes que as peças saiam.",
  "Moda acessível para mulheres, homens, crianças e clientes plus size."
];

const instagramPosts = [
  "Achadinhos que acabaram de chegar",
  "Sugestões para visitar a loja",
  "Peças novas e seminovas selecionadas",
  "Detalhes de calçados e acessórios"
];

const testimonials = [
  "Atendimento ótimo e peças lindas.",
  "Preços excelentes e muita variedade.",
  "Loja agradável de visitar e sempre com novidade."
];

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-white text-ink">
      <SiteHeader />

      <section className="relative min-h-[86svh] bg-ink pt-16 text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Araras de roupas em brechó boutique" className="h-full w-full object-cover" />
          <div className="hero-vignette absolute inset-0" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
              <Store className="size-4 text-blush" />
              Centro de Monte Mor | @brechodajanaviana
            </div>
            <h1 className="font-heading text-4xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              Jana Viana Brechó
            </h1>
            <p className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight text-blush sm:text-4xl">
              Moda bonita, acessível e confiável para garimpar no Centro de Monte Mor.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Roupas femininas, masculinas, infantis, plus size, calçados e acessórios novos e seminovos para toda a família.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 bg-white px-7 text-sm font-bold uppercase tracking-[0.12em] text-wine transition hover:-translate-y-1 hover:bg-blush"
              >
                <Navigation className="size-5" />
                Planejar visita à loja
              </a>
              <WhatsAppLink className="inline-flex h-14 items-center justify-center gap-2 border border-white/28 px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-wine">
                <MessageCircle className="size-5" />
                Chamar no WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wine px-4 py-4 pb-24 text-white sm:px-6 md:pb-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <MapPin className="size-4 text-blush" />
            <span className="md:hidden">Centro de Monte Mor - ver rota</span>
            <span className="hidden md:inline">Avenida Jânio Quadros, 771 - Centro - Monte Mor/SP</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/78">
            <span>Loja física</span>
            <span>Novidades frequentes</span>
            <span>Moda para família</span>
          </div>
        </div>
      </section>

      <AnimatedSection id="garimpo" className="soft-paper px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-wine">Garimpo por família</p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
                Entre sabendo onde procurar seu achadinho.
              </h2>
            </div>
            <WhatsAppLink
              message="Olá, vim pelo site da Jana Viana Brechó. Quero saber quais categorias estão com novidades hoje."
              className="inline-flex h-12 items-center justify-center gap-2 bg-ink px-6 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-wine"
            >
              Perguntar novidades
              <ArrowRight className="size-4" />
            </WhatsAppLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article key={category.title} className="group bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[5/3] overflow-hidden bg-fog">
                    <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/64 to-transparent" />
                    <Icon className="absolute left-4 top-4 size-7 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-black">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/64">{category.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="achadinhos" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-wine">Mural de achadinhos</p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
              Uma vitrine de inspiração, sem promessa de estoque fixo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink/64">
              As imagens são exemplos visuais até a loja liberar fotos reais. A ideia é mostrar variedade e desejo sem prometer que uma peça específica ainda esteja disponível.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 border border-wine px-6 text-sm font-bold uppercase tracking-[0.1em] text-wine transition hover:bg-wine hover:text-white"
            >
              <Instagram className="size-4" />
              Ver Instagram
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {finds.map((item, index) => (
              <article
                key={item.title}
                className={`group overflow-hidden bg-fog ${index === 1 ? "sm:mt-12" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-wine backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-2xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="triagem" className="bg-linen px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-wine">Antes de ir</p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
              Monte uma mensagem rápida para receber orientação da loja.
            </h2>
          </div>
          <TriagePanel />
        </div>
      </AnimatedSection>

      <AnimatedSection id="loja" className="woven bg-ink px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">Prova local</p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
              Uma loja física para ver, provar e garimpar com segurança.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              O principal diferencial da Jana Viana é ter uma loja no Centro de Monte Mor, com atendimento próximo e variedade para diferentes estilos da família.
            </p>
            <div className="mt-8 grid gap-3">
              {proof.map((item) => (
                <div key={item} className="flex gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-white/76">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blush" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 text-ink shadow-soft">
            <iframe
              title="Mapa da Jana Viana Brechó"
              src="https://www.google.com/maps?q=Avenida%20J%C3%A2nio%20Quadros%2C%20771%20Centro%20Monte%20Mor%20SP&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-heading text-xl font-black">Avenida Jânio Quadros, 771</p>
                <p className="mt-1 text-sm text-ink/60">Centro - Monte Mor/SP</p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 bg-wine px-5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-ink"
              >
                <Navigation className="size-4" />
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-wine">Instagram integrado</p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
                O Instagram funciona como vitrine viva da loja.
              </h2>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 bg-ink px-6 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-wine"
            >
              <Instagram className="size-4" />
              Seguir @brechodajanaviana
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {instagramPosts.map((post, index) => (
              <a
                key={post}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group min-h-64 bg-linen p-5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex items-center justify-between text-wine">
                  <Instagram className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.14em]">Post {index + 1}</span>
                </div>
                <div className="mt-16">
                  <p className="font-heading text-2xl font-black leading-tight">{post}</p>
                  <p className="mt-4 text-sm leading-6 text-ink/62">
                    Espaço reservado para fotos reais ou publicações autorizadas do perfil.
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-fog px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-wine">Por que vale a visita</p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
              Economia com sensação de descoberta.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: BadgePercent, title: "Preços acessíveis", text: "O brechó ajuda a renovar o guarda-roupa sem pesar tanto no mês." },
              { icon: Tag, title: "Peças selecionadas", text: "Novos e seminovos com curadoria para facilitar o garimpo." },
              { icon: Clock3, title: "Novidades frequentes", text: "Quem acompanha a loja encontra peças diferentes a cada reposição." },
              { icon: Star, title: "Atendimento próximo", text: "A conversa ajuda a encontrar peça, tamanho, ocasião e melhor horário de visita." }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-white p-6">
                  <Icon className="size-7 text-wine" />
                  <h3 className="mt-5 font-heading text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <section className="relative bg-wine px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=82" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-wine/80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">Depoimentos</p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-5xl">
              Espaço preparado para avaliações reais.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Quando a loja validar relatos de clientes, este bloco pode receber depoimentos verdadeiros.
            </p>
          </div>
          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <figure key={testimonial} className="bg-white/10 p-5 backdrop-blur">
                <div className="mb-3 flex gap-1 text-blush">
                  {[0, 1, 2, 3, 4].map((item) => (
                    <Star key={item} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg font-semibold leading-7">&ldquo;{testimonial}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm text-white/60">Cliente Jana Viana #{index + 1}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">
              Quer garimpar sem perder a viagem?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Planeje sua visita, chame no WhatsApp ou acompanhe as novidades no Instagram antes de passar na loja.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-wine transition hover:bg-blush"
            >
              <MapPin className="size-4" />
              Como chegar
            </a>
            <WhatsAppLink className="inline-flex h-14 items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:brightness-95">
              <MessageCircle className="size-4" />
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <footer className="bg-white px-4 py-8 pb-24 text-sm text-ink/62 sm:px-6 md:pb-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center">
          <p className="font-heading font-black uppercase tracking-[0.18em] text-wine">Jana Viana Brechó</p>
          <p>Brechó em Monte Mor. Avenida Jânio Quadros, 771 - Centro. WhatsApp: (19) 99191-5448.</p>
        </div>
      </footer>

      <FloatingActions />
    </main>
  );
}
