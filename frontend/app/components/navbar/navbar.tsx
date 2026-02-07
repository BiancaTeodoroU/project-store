'use client';

import { ForkKnifeIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export function Navbar(): React.JSX.Element {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center gap-2.5 text-orange-600 font-extrabold text-2xl tracking-tight">
          <div className="bg-orange-600 p-1.5 rounded-lg text-white">
            <ForkKnifeIcon size={24} />
          </div>
          <span>FoodBt</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
          <a href="#clientes" className="hover:text-orange-600 transition-colors">Para Você</a>
          <a href="#restaurantes" className="hover:text-orange-600 transition-colors">Para Restaurantes</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/auth" className="hidden sm:block text-zinc-600 font-bold hover:text-orange-600 transition-colors px-4 py-2">
            Entrar
          </Link>
          <Link href="/auth" className="bg-zinc-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-600 transition-all hover:shadow-xl hover:shadow-orange-200">
            Começar Agora
          </Link>
        </div>
      </div>
    </nav>
  ); 
}