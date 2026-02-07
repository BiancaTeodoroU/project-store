'use client';

import Link from 'next/link';
import { Utensils, ShoppingBag, ArrowRight, Star, Instagram, Phone } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-orange-100 selection:text-orange-900">
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2.5 text-orange-600 font-extrabold text-2xl tracking-tight">
            <div className="bg-orange-600 p-1.5 rounded-lg text-white">
              <Utensils size={24} />
            </div>
            <span>FoodBt</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
            <a href="#clientes" className="hover:text-orange-600 transition-colors">Para Você</a>
            <a href="#restaurantes" className="hover:text-orange-600 transition-colors">Para Restaurantes</a>
          </div>

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

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
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
                Fazer meu pedido <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/auth" className="bg-white text-zinc-900 border border-zinc-200 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all shadow-sm">
                Cadastrar Restaurante
              </Link>
            </div>
          </div>

          {/* Imagem Hero com efeito visual */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="absolute -z-10 top-0 right-0 w-125 h-125 bg-orange-200/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-150">
              <Image
                src="/images/paste.png"
                alt="App Interface"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Pedidos Realizados', value: '50k+' },
            { label: 'Restaurantes', value: '1.2k' },
            { label: 'Cidades', value: '15' },
            { label: 'Nota média', value: '4.9/5' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-zinc-900">{stat.value}</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5">
            <ShoppingBag size={200} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Pronto para começar?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth" className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all">
              Criar Conta Grátis
            </Link>
            <Link href="/auth" className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Falar com Comercial
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-orange-600 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-3">
            <span className="text-2xl font-bold text-white">
              Sobre o FoodBt
            </span>
            <p className="text-white font-medium mt-4 text-md">
              O FoodBt é a ponte tecnológica entre a sua fome e os melhores sabores da cidade.
              Oferecemos uma plataforma intuitiva para clientes e
              um ecossistema de crescimento completo para restaurantes parceiros.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-white hover:text-first-color transition-colors font-medium duration-300 text-sm">
                Serviços
              </a>
              <a href="#projects" className="text-white hover:text-first-color transition-colors duration-300 font-medium text-sm">
                Restaurantes
              </a>
              <a href="#contact" className="text-white hover:text-first-color transition-colors duration-300 font-medium text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Conecte-se Comigo</h3>
            <div className="flex gap-3">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
                aria-label="GitHub"
              >
                <Instagram size={32}></Instagram>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
                aria-label="LinkedIn"
              >
                <Phone size={32}></Phone>
              </a>
            </div>
            <div className="text-white font-bold text-sm">
              <p>foodbt@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © {currentYear} Bianca. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>

    </div>
  );
}