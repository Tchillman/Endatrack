"use client";

import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Básico",
    price: "49.900",
    period: "mês",
    description: "Ideal para pequenas frotas",
    features: [
      "Até 5 veículos",
      "Rastreamento em tempo real",
      "Relatórios básicos",
      "Alertas por email",
      "Suporte por WhatsApp",
      "Histórico de 3 meses",
    ],
    buttonText: "Começar Agora",
    popular: false,
  },
  {
    name: "Profissional",
    price: "99.900",
    period: "mês",
    description: "Para empresas em crescimento",
    features: [
      "Até 20 veículos",
      "Tudo do plano Básico",
      "Relatórios avançados",
      "Alertas SMS + Email",
      "App mobile completo",
      "Histórico de 12 meses",
      "API de integração",
      "Suporte prioritário",
    ],
    buttonText: "Mais Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Para grandes operações",
    features: [
      "Veículos ilimitados",
      "Tudo do plano Profissional",
      "Gestor de conta dedicado",
      "Suporte 24/7",
      "Dashboard customizado",
      "Treinamento in loco",
      "SLA personalizado",
      "Integrações completas",
    ],
    buttonText: "Falar com Vendas",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            PLANOS
          </span>
          <h2 className="section-title">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="section-subtitle">
            Planos flexíveis que se adaptam ao tamanho e necessidades da sua
            frota
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-blue-500 transform scale-105"
                  : "hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  MAIS POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  {plan.price === "Sob Consulta" ? (
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-500"> Kz/{plan.period}</span>
                      <p className="text-xs text-gray-400 mt-1">+ IVA</p>
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <FiCheck className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            * Todos os planos incluem suporte técnico e atualizações gratuitas
          </p>
        </div>
      </div>
    </section>
  );
}
