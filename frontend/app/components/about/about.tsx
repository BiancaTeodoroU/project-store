'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Elemento decorativo de fundo (folhas) */}
          <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20 -z-10 bg-[url('/images/leaf-pattern.png')] bg-contain bg-no-repeat" />
          <div className="space-y-4">
            <div className="relative aspect-4/5 rounded-t-[5rem] rounded-bl-[5rem] overflow-hidden shadow-xl">
              <Image src="/images/banoffe.webp" alt="Chef preparando comida" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-tl-[5rem] rounded-b-[5rem] overflow-hidden shadow-xl">
              <Image src="/images/churrasco.jpg" alt="Salada fresca" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-4 pt-12">
            <div className="relative aspect-square rounded-tr-[5rem] rounded-b-[5rem] overflow-hidden shadow-xl">
              <Image src="/images/comidas-tipicas-coxinha.jpg" alt="Pizza artesanal" fill className="object-cover" />
            </div>
            <div className="relative aspect-4/5 rounded-t-[5rem] rounded-br-[5rem] overflow-hidden shadow-xl">
              <Image src="/images/pf.jpg" alt="Hambúrguer suculento" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <header className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-zinc-900 leading-tight italic">
              Nós <span className="text-orange-500 underline decoration-orange-100">somos o FoodBt</span>
            </h2>
            <p className="text-zinc-500 text-lg font-bold italic">
              Uma História Deliciosa
            </p>
          </header>

          <div className="space-y-6 text-zinc-500 leading-relaxed text-sm">
            <p className="italic">
              A ideia do <strong>FoodBt</strong> nasceu do meu desejo de ir além dos estudos teóricos e construir uma plataforma robusta e completa. Como desenvolvedora, sempre fui fascinada pela complexidade de ecossistemas como o iFood, e decidi aceitar o desafio de replicar essa experiência do zero.
            </p>
            <p className="italic">
              Criei este projeto com o intuito de praticar tecnologias modernas do front-end ao back-end e me desenvolver ainda mais como profissional. O FoodBt é o resultado dessa jornada: um marketplace de comida funcional, escalável e focado em oferecer a melhor experiência para clientes e restaurantes.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              href="https://bianca.dev.br/"
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
            >
              Conheça outros projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}