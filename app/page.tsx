import Image from "next/image";
import {
  ArrowUpRight,
  Baby,
  BookOpen,
  Check,
  Dog,
  Gem,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  PackageCheck,
  RefreshCcw,
  Shirt,
  Sparkles,
  Tags,
  UsersRound
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BrandMark } from "@/components/BrandMark";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteHeader } from "@/components/SiteHeader";
import { TriagePanel } from "@/components/TriagePanel";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE_CONFIG } from "@/lib/site-config";

const heroImage = "/images/jana-viana-hero.png";

const categories = [
  {
    title: "Moda feminina",
    note: "Peças para diferentes estilos e momentos.",
    icon: Sparkles,
    image: "/images/generated/categoria-moda-feminina.webp"
  },
  {
    title: "Moda masculina",
    note: "Básicos, casuais e achados para o dia a dia.",
    icon: Shirt,
    image: "/images/generated/categoria-moda-masculina.webp"
  },
  {
    title: "Moda infantil",
    note: "Variedade para acompanhar cada fase.",
    icon: Baby,
    image: "/images/generated/categoria-moda-infantil.webp"
  },
  {
    title: "Acessórios",
    note: "Detalhes que transformam o visual.",
    icon: Gem,
    image: "/images/generated/categoria-acessorios.webp"
  },
  {
    title: "Livros",
    note: "Boas histórias também fazem parte do garimpo.",
    icon: BookOpen,
    image: "/images/generated/categoria-livros.webp"
  },
  {
    title: "Roupas para pets",
    note: "Achados charmosos para os companheiros da família.",
    icon: Dog,
    image: "/images/generated/categoria-roupas-pets.webp"
  }
];

const benefits = [
  { title: "Preços acessíveis", icon: Tags },
  { title: "Peças selecionadas", icon: PackageCheck },
  { title: "Variedade para a família", icon: UsersRound },
  { title: "Novidades frequentes", icon: RefreshCcw },
  { title: "Atendimento próximo", icon: HeartHandshake },
  { title: "Novos e seminovos", icon: Sparkles }
];

const gallery = [
  {
    alt: "Composição de moda feminina em tons quentes",
    image: "/images/generated/galeria-roupas.webp",
    className: "mosaic-item mosaic-item--tall"
  },
  {
    alt: "Arara organizada com roupas variadas",
    image: "/images/generated/categoria-moda-masculina.webp",
    className: "mosaic-item"
  },
  {
    alt: "Acessórios e peças para compor o visual",
    image: "/images/generated/categoria-acessorios.webp",
    className: "mosaic-item"
  },
  {
    alt: "Seleção de calçados e acessórios",
    image: "/images/generated/galeria-calcados-acessorios.webp",
    className: "mosaic-item mosaic-item--wide"
  }
];

const contactMessage =
  "Olá, vim pelo site da Jana Viana Brechó e gostaria de saber quais novidades estão disponíveis hoje.";

export default function Home() {
  const hasGroupLink = Boolean(SITE_CONFIG.groupLink);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo" className="overflow-hidden bg-white text-ink">
        <section id="inicio" className="hero-section scroll-mt-24">
          <Image
            src={heroImage}
            alt="Ambiente acolhedor com araras de roupas, calçados e acessórios"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay" />

          <div className="hero-content page-shell">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--light">Moda acessível em Monte Mor</p>
              <h1>Moda, achados e novidades para toda a família.</h1>
              <p className="hero-lead">
                Roupas femininas, masculinas e infantis, acessórios, livros e até peças para pets. Tudo com qualidade, variedade e preços acessíveis.
              </p>
              <div className="hero-actions">
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="button button--light">
                  <Instagram aria-hidden="true" className="size-5" />
                  Ver novidades
                </a>
                <WhatsAppLink message={contactMessage} className="button button--whatsapp">
                  <MessageCircle aria-hidden="true" className="size-5" />
                  Falar no WhatsApp
                </WhatsAppLink>
                <a href="#categorias" className="button button--ghost-light">
                  Conhecer categorias
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>

            <div className="hero-brand" aria-label="Jana Viana Brechó">
              <BrandMark inverted />
              <span>Monte Mor/SP</span>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="page-shell trust-strip__inner">
            <span>Novos & seminovos</span>
            <span>Para toda a família</span>
            <span>Achados com preço acessível</span>
          </div>
        </div>

        <AnimatedSection id="categorias" className="section scroll-mt-24 bg-white">
          <div className="page-shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">O que você encontra aqui</p>
                <h2>Um garimpo que vai além do guarda-roupa.</h2>
              </div>
              <p>Sempre tem algo novo esperando por você.</p>
            </div>

            <div className="category-grid">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <a
                    key={category.title}
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="category-card"
                    aria-label={`Ver novidades de ${category.title} no Instagram`}
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover"
                    />
                    <div className="category-card__shade" />
                    <div className="category-card__content">
                      <Icon aria-hidden="true" className="size-5" />
                      <div>
                        <h3>{category.title}</h3>
                        <p>{category.note}</p>
                      </div>
                      <ArrowUpRight aria-hidden="true" className="category-card__arrow size-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section bg-linen">
          <div className="page-shell">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Por que escolher a Jana Viana?</p>
              <h2>Qualidade para escolher. Preço para aproveitar.</h2>
              <p>Uma seleção variada, próxima e simples de acompanhar.</p>
            </div>
            <div className="benefit-list">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="benefit-item">
                    <span><Icon aria-hidden="true" className="size-5" /></span>
                    <h3>{benefit.title}</h3>
                    <Check aria-hidden="true" className="size-4 text-wine" />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section bg-white">
          <div className="page-shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Encontre mais rápido</p>
                <h2>Conte o que você procura antes de chamar.</h2>
              </div>
              <p>O site organiza sua mensagem e abre a conversa pronta no WhatsApp.</p>
            </div>
            <TriagePanel />
          </div>
        </AnimatedSection>

        <AnimatedSection id="novidades" className="section scroll-mt-24 bg-fog">
          <div className="page-shell">
            <div className="novelties-intro">
              <div>
                <p className="eyebrow">Novidades</p>
                <h2>Os achados mudam. A vontade de garimpar fica.</h2>
              </div>
              <div>
                <p>As peças mudam, mas as novidades não param. Acompanhe o Instagram e descubra os achados da vez.</p>
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="text-link">
                  Ver novidades no Instagram
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>

            <div className="mosaic-grid">
              {gallery.map((item) => (
                <a
                  key={item.image}
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={item.className}
                  aria-label="Ver novidades reais no Instagram"
                >
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <span>Ver achados <ArrowUpRight aria-hidden="true" className="size-4" /></span>
                </a>
              ))}
            </div>
            <p className="image-note">Imagens ilustrativas. Consulte as peças atuais no Instagram ou no WhatsApp.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="sobre" className="about-section scroll-mt-24">
          <div className="about-media">
            <Image
              src="/images/generated/sobre-curadoria.webp"
              alt="Seleção de roupas em uma arara"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow--light">Sobre a marca</p>
            <h2>Escolher bem também é uma forma de economizar.</h2>
            <p>
              A Jana Viana Brechó nasceu para mostrar que é possível se vestir bem, encontrar produtos diferentes e economizar ao mesmo tempo. Aqui você encontra moda feminina, masculina e infantil, acessórios, livros e até opções para pets. São peças novas e seminovas escolhidas com carinho para levar mais estilo, variedade e praticidade para o dia a dia.
            </p>
            <div className="about-signature">
              <BrandMark compact inverted />
              <span>Moda para toda a família</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="group-section">
          <div className="page-shell group-section__inner">
            <div>
              <p className="eyebrow eyebrow--light">Novidades primeiro</p>
              <h2>Entre no grupo e acompanhe as novidades.</h2>
              <p>Produtos e oportunidades podem aparecer e acabar rápido. Entre no grupo de novidades e fique por dentro das peças disponíveis.</p>
            </div>
            {hasGroupLink ? (
              <a href={SITE_CONFIG.groupLink} target="_blank" rel="noreferrer" className="button button--light h-14 px-7">
                Entrar no grupo de novidades
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
            ) : (
              <div className="group-action">
                <button type="button" disabled className="button button--disabled h-14 px-7" aria-describedby="group-status">
                  Grupo em breve
                </button>
                <p id="group-status">O link será liberado aqui assim que estiver disponível.</p>
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contato" className="section scroll-mt-24 bg-white">
          <div className="page-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Contato</p>
              <h2>Perto de você. Fácil de chamar.</h2>
              <p>Converse pelo WhatsApp, acompanhe o Instagram ou planeje seu atendimento presencial em Monte Mor.</p>

              <div className="contact-actions">
                <WhatsAppLink message={contactMessage} className="button button--wine h-14 px-6">
                  <MessageCircle aria-hidden="true" className="size-5" />
                  Falar no WhatsApp
                </WhatsAppLink>
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="button button--outline h-14 px-6">
                  <Instagram aria-hidden="true" className="size-5" />
                  Ver Instagram
                </a>
              </div>

              <dl className="contact-details">
                <div>
                  <dt>Instagram</dt>
                  <dd>{SITE_CONFIG.instagramHandle}</dd>
                </div>
                <div>
                  <dt>Localização</dt>
                  <dd>{SITE_CONFIG.address}</dd>
                </div>
                <div>
                  <dt>Atendimento</dt>
                  <dd>Presencial em Monte Mor/SP</dd>
                </div>
              </dl>
            </div>

            <div className="map-frame">
              <iframe
                title="Mapa da Jana Viana Brechó em Monte Mor"
                src="https://www.google.com/maps?q=Avenida%20J%C3%A2nio%20Quadros%2C%20771%20Centro%20Monte%20Mor%20SP&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noreferrer" className="map-route">
                <Navigation aria-hidden="true" className="size-5" />
                Como chegar
              </a>
            </div>
          </div>
        </AnimatedSection>

        <section className="final-cta">
          <div className="page-shell final-cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">Gostou de alguma novidade?</p>
              <h2>Descubra o que está disponível hoje.</h2>
              <p>Chame a Jana Viana Brechó e encontre seu próximo achado.</p>
            </div>
            <div className="final-cta__actions">
              <WhatsAppLink message={contactMessage} className="button button--light h-14 px-6">
                <MessageCircle aria-hidden="true" className="size-5" />
                Falar no WhatsApp
              </WhatsAppLink>
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="button button--ghost-light h-14 px-6">
                <Instagram aria-hidden="true" className="size-5" />
                Ver Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell site-footer__top">
          <div>
            <BrandMark compact />
            <p>Moda para toda a família, com novidades frequentes e peças novas e seminovas.</p>
          </div>
          <nav aria-label="Links do rodapé">
            <a href="#categorias">Categorias</a>
            <a href="#novidades">Novidades</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="site-footer__location">
            <MapPin aria-hidden="true" className="size-5" />
            <span>Monte Mor/SP</span>
          </div>
        </div>
        <div className="page-shell site-footer__bottom">
          <span>Jana Viana Brechó</span>
          <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer">{SITE_CONFIG.instagramHandle}</a>
        </div>
      </footer>

      <FloatingActions />
    </>
  );
}
