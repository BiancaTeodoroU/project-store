'use client';

import { useAuth } from '../../../src/hooks/useAuth';
import { MagnifyingGlassIcon, StarIcon, ClockIcon, SpinnerIcon } from "@phosphor-icons/react";
import Image from "next/image";

// Dados mockados para estabilizar o visual antes de ligar o banco
const CATEGORIES = [
  { name: 'Pizzas', icon: '🍕' },
  { name: 'Hambúrgueres', icon: '🍔' },
  { name: 'Japonesa', icon: '🍣' },
  { name: 'Brasileira', icon: '🍲' },
  { name: 'Doces', icon: '🍰' },
];

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <SpinnerIcon className="animate-spin text-orange-600" size={48} />
        <p className="mt-4 text-zinc-500 font-medium">Validando sua sessão...</p>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-zinc-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-2xl font-bold">Olá, {user?.name || 'Cliente'}!</h1>
        {/* Header de Busca */}
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-zinc-900 mb-6">O que vamos comer hoje?</h1>
          <div className="relative max-w-2xl">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por restaurantes ou pratos..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black"
            />
          </div>
        </header>

        {/* Categorias (Scroll Horizontal) */}
        <section className="mb-12">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button key={cat.name} className="flex flex-col items-center gap-2 min-w-25 bg-white p-4 rounded-2xl border border-zinc-100 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group">
                <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-xs font-bold text-zinc-600">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Grid de Restaurantes */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-zinc-900">Restaurantes Populares</h2>
            <button className="text-orange-600 text-sm font-bold hover:underline">Ver todos</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Exemplo de Card de Restaurante */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-xl transition-all group cursor-pointer">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src="/images/cozinha-regional-brasileira.jpg" 
                    alt="Restaurante"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-zinc-900">Sabor do Brasil</h3>
                    <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                      <StarIcon weight="fill" size={16} />
                      <span>4.8</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 mb-4">Brasileira • 30-45 min • R$ 5,00 taxa</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 w-fit px-2 py-1 rounded-md">
                    <ClockIcon size={14} />
                    <span>ENTREGA GRÁTIS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}