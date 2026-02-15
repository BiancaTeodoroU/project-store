"use client";

import { ArrowRightIcon, StarIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image';

export function Hero(): React.JSX.Element {
  return(
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center">
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <StarIcon size={16} fill="currentColor" />
            <span>O delivery mais rápido da região</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-zinc-900 leading-[1.1] tracking-tight">
            A fome não espera. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to from-orange-600 to-amber-500">O FoodBt entrega.</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-500 max-w-xl leading-relaxed">
            Descubra os sabores da sua cidade com a facilidade que sua rotina exige. De pratos executivos a lanches artesanais.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/auth" className="group bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 hover:bg-orange-700 transition-all active:scale-95">
              Fazer meu pedido <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/auth" className="bg-white text-zinc-900 border border-zinc-200 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all shadow-sm">
              Cadastrar Restaurante
            </Link>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2 relative min-h-150">
          {/* Container da Imagem */}
          <div className="relative w-full h-full flex items-center justify-end pr-10">
            <div className="relative w-137.5 aspect-square">
              <Image
                src="/images/paste.png"
                alt="Prato Principal"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}