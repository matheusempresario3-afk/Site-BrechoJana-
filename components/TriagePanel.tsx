"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { whatsappUrl } from "./WhatsAppLink";

const categories = ["Feminino", "Masculino", "Infantil", "Plus size", "Calçados", "Acessórios"];
const goals = ["Ver novidades", "Montar visual", "Comprar para a família", "Encontrar uma peça específica"];
const sizes = ["PP/P", "M/G", "GG/Plus", "Infantil", "Calçados", "Ainda não sei"];

export function TriagePanel() {
  const [category, setCategory] = useState(categories[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [size, setSize] = useState(sizes[1]);

const message = useMemo(
    () =>
      `Olá, vim pelo site da Jana Viana Brechó. Quero planejar uma visita à loja. Procuro: ${category}. Objetivo: ${goal}. Tamanho ou interesse: ${size}.`,
    [category, goal, size]
  );

  return (
    <div className="grid gap-6 bg-white p-5 shadow-soft md:grid-cols-[0.92fr_1.08fr] md:p-8">
      <div className="bg-ink p-6 text-white md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blush">Triagem simples</p>
        <h3 className="mt-4 font-heading text-3xl font-black leading-tight md:text-4xl">
          Informe o que você quer garimpar antes de sair de casa.
        </h3>
        <p className="mt-5 text-sm leading-6 text-white/72">
          Assim, a loja recebe seu pedido organizado e consegue orientar melhor sua visita.
        </p>
        <div className="mt-8 grid gap-3 text-sm">
          {["Categoria desejada", "Tamanho ou tipo de peça", "Objetivo da visita"].map((item) => (
            <div key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-white/78">
              <span className="grid size-6 place-items-center rounded-full bg-wine text-xs font-bold text-white">
                {item.slice(0, 1)}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid content-between gap-6">
        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-wine">Categoria</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 border border-black/10 bg-fog px-4 text-sm font-medium outline-none transition focus:border-wine"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-wine">Tamanho ou interesse</span>
            <select
              value={size}
              onChange={(event) => setSize(event.target.value)}
              className="h-12 border border-black/10 bg-fog px-4 text-sm font-medium outline-none transition focus:border-wine"
            >
              {sizes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-wine">Objetivo</span>
            <select
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              className="h-12 border border-black/10 bg-fog px-4 text-sm font-medium outline-none transition focus:border-wine"
            >
              {goals.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="border border-black/10 bg-linen p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Mensagem pronta</p>
          <p className="mt-3 text-sm leading-6 text-ink/72">{message}</p>
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 bg-wine px-5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-ink sm:w-auto"
          >
            <MessageCircle className="size-4" />
            Enviar no WhatsApp
            <Send className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
