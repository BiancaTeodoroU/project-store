"use client";

import React from "react";

const Stats = [
  { label: 'Pedidos Realizados', value: '50k+' },
  { label: 'Restaurantes', value: '1.2k' },
  { label: 'Cidades', value: '15' },
  { label: 'Nota média', value: '4.9/5' },
]

export function SocialProof(): React.JSX.Element {
  return (
    <section className="py-12 border-y border-zinc-100 bg-zinc-100/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {Stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-black text-zinc-900">{stat.value}</p>
            <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}