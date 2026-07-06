"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { whatsappUrl } from "./WhatsAppLink";

const categories = ["Moda feminina", "Moda masculina", "Moda infantil", "Acessórios", "Livros", "Roupas para pets"];
const goals = ["Ver novidades", "Montar um visual", "Comprar para a família", "Encontrar algo específico"];
const details = ["PP/P", "M/G", "GG/Plus size", "Infantil", "Acessórios", "Livros", "Pet", "Ainda não sei"];

export function TriagePanel() {
  const [category, setCategory] = useState(categories[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [detail, setDetail] = useState(details[1]);

  const message = useMemo(
    () =>
      `Olá, vim pelo site da Jana Viana Brechó. Procuro: ${category}. Meu interesse é: ${detail}. Quero: ${goal}. Quais novidades estão disponíveis?`,
    [category, detail, goal]
  );

  return (
    <div className="grid overflow-hidden rounded border border-black/10 bg-fog shadow-soft lg:grid-cols-[0.72fr_1.28fr]">
      <div className="bg-ink p-6 text-white sm:p-8">
        <Search aria-hidden="true" className="size-7 text-blush" />
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-blush">Triagem simples</p>
        <h3 className="mt-3 font-heading text-3xl font-black leading-tight">Seu pedido já chega organizado.</h3>
        <p className="mt-4 text-sm leading-7 text-white/70">
          Escolha 3 detalhes e abra uma conversa pronta com a loja. Nenhuma informação é enviada antes do seu clique.
        </p>
      </div>

      <div className="grid gap-6 bg-white p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-wine">Categoria</span>
            <select name="category" value={category} onChange={(event) => setCategory(event.target.value)} className="h-12 rounded border border-black/15 bg-white px-3 text-sm focus-visible:border-wine">
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-wine">Tamanho ou tipo</span>
            <select name="detail" value={detail} onChange={(event) => setDetail(event.target.value)} className="h-12 rounded border border-black/15 bg-white px-3 text-sm focus-visible:border-wine">
              {details.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-wine">Objetivo</span>
            <select name="goal" value={goal} onChange={(event) => setGoal(event.target.value)} className="h-12 rounded border border-black/15 bg-white px-3 text-sm focus-visible:border-wine">
              {goals.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="grid items-center gap-5 border-t border-black/10 pt-5 md:grid-cols-[1fr_auto]">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-ink/45">Mensagem pronta</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">{message}</p>
          </div>
          <a href={whatsappUrl(message)} target="_blank" rel="noreferrer" className="button button--wine h-12 px-5">
            <MessageCircle aria-hidden="true" className="size-4" />
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
