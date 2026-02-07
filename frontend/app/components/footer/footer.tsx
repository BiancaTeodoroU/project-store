"use client";

import { InstagramLogoIcon, PhoneIcon } from "@phosphor-icons/react";
import React from "react";

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return(
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
                <InstagramLogoIcon size={32} color='#ffff'/>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
                aria-label="LinkedIn"
              >
                <PhoneIcon size={32} color='#ffff'/>
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
            © {currentYear}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}