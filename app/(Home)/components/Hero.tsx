"use client";

import {
  FiCheckCircle,
  FiMapPin,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import { Circle, CircleCheck, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: "url('/img/blackTrack.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Conteúdo */}
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-5 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-400/30">
              <Circle className="text-green-500 fill-green-500 flex" size={10} />
              <span className="text-blue-200 text-sm font-semibold">
                
                Plataforma Disponível
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="text-blue-400">Gestão de Frotas</span>
              <br />
              Inteligente e<span className="text-blue-400"> em Tempo Real</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Reduza custos operacionais em até 30% e aumente a produtividade da
              sua frota com a solução mais avançada de rastreamento e
              monitorização do mercado angolano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Começar Agora
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Ver Funcionalidades
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <FiCheckCircle className="text-green-400" />
                <span className="text-sm">Implementação Rápida</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <FiMapPin className="text-blue-400" />
                <span className="text-sm">Rastreamento Real</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <FiTrendingUp className="text-blue-400" />
                <span className="text-sm">+30% Eficiência</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <FiShield className="text-green-400" />
                <span className="text-sm">Dados Seguros</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">15-30%</div>
                <div className="text-blue-200">
                  Redução de Custos Operacionais
                </div>
              </div>
              <hr className="border-white/20 my-6" />
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <span>Empresas que já confiam</span>
                  <span className="font-bold text-blue-300">+10</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Veículos Monitorados</span>
                  <span className="font-bold text-blue-300">500+</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Disponibilidade</span>
                  <span className="font-bold text-blue-300">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
