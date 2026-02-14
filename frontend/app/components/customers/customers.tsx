'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon, QuotesIcon, StarIcon } from '@phosphor-icons/react';
import { testimonials } from '../../../src/data/testimonials';

export default function Customers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-12 md:py-24 px-4 overflow-hidden">
      <div className="text-center mb-16 md:mb-24 space-y-4">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <StarIcon weight="fill" size={12} /> Prova Social
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter">
          O que dizem sobre o <span className="text-orange-500">FoodBt</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-10 lg:gap-16">
        {/* Lado Esquerdo: Imagem com Proporção Fluida */}
        <div className="lg:col-span-6 relative order-1">
          <div className="relative w-full aspect-square md:aspect-4/3 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />
            <Image
              key={current.id}
              src="/images/pessoas-no-restaurante.jpg"
              alt="Momentos FoodBt"
              fill
              className="object-cover animate-in fade-in zoom-in-105 duration-700"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
          </div>
        </div>

        {/* Lado Direito: Card de Conteúdo Responsivo */}
        <div className="lg:col-span-6 flex flex-col order-2 lg:-ml-20 z-30">
          <div
            key={`content-${current.id}`}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-zinc-50 animate-in fade-in slide-in-from-bottom-8 lg:slide-in-from-right-8 duration-500"
          >
            {/* Avaliação em Estrelas */}
            <div className="flex gap-1 mb-6 justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} weight="fill" className="text-orange-400" size={20} />
              ))}
            </div>

            <QuotesIcon size={48} weight="fill" className="text-orange-500/10 mb-4 hidden lg:block" />
            <blockquote className="text-zinc-800 text-lg md:text-xl font-medium leading-relaxed mb-10 text-center lg:text-left">
              "{current.content}"
            </blockquote>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-100 pt-8">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md ring-4 ring-orange-50">
                  <Image src={current.avatar} alt={current.name} fill className="object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-black text-zinc-900 text-base">{current.name}</p>
                  <p className="text-orange-500 font-bold text-xs uppercase tracking-widest">{current.handle}</p>
                </div>
              </div>

              {/* Navegação Mobile-Friendly */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="p-4 rounded-2xl bg-zinc-50 text-zinc-400 hover:bg-orange-50 hover:text-orange-500 transition-all active:scale-90"
                  aria-label="Anterior"
                >
                  <ArrowLeftIcon size={20} weight="bold" />
                </button>
                <button
                  onClick={next}
                  className="p-4 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all active:scale-90"
                  aria-label="Próximo"
                >
                  <ArrowRightIcon size={20} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}