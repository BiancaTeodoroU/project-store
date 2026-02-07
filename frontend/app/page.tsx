'use client';

import { ShoppingBagIcon } from "@phosphor-icons/react";
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { SocialProof } from './components/social-proof/social-proof';
import { Footer } from './components/footer/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar/>
      <Hero/>
      <SocialProof/>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/5">
            <ShoppingBagIcon size={200} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Pronto para começar?</h2>
          <div className="absolute top-0 left-0 text-white/5">
            <ShoppingBagIcon size={200} />
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
