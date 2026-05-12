"use client";

import {
  FiTrendingDown,
  FiDollarSign,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiTrendingDown size={32} />,
    title: "Redução de Custos",
    description:
      "Diminuição de até 30% nos custos operacionais com otimização de rotas e redução de desperdícios.",
    stat: "-30%",
  },
  {
    icon: <FiDollarSign size={32} />,
    title: "Economia de Combustível",
    description:
      "Redução de até 25% no consumo de combustível através de monitorização e análise de rotas.",
    stat: "-25%",
  },
  {
    icon: <FiUsers size={32} />,
    title: "Aumento de Produtividade",
    description:
      "Ganho de até 40% em produtividade com melhor gestão de tempo e recursos da frota.",
    stat: "+40%",
  },
  {
    icon: <FiTarget size={32} />,
    title: "Manutenção Preventiva",
    description:
      "Redução de 35% em custos de manutenção com alertas preventivos e agendamento inteligente.",
    stat: "-35%",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            BENEFÍCIOS
          </span>
          <h2 className="section-title">Resultados Reais para sua Empresa</h2>
          <p className="section-subtitle">
            Empresas que utilizam a EndaTrack já estão colhendo resultados
            expressivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {benefit.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <p className="text-xl font-semibold mb-4">
            "Reduzimos nossos custos operacionais em 28% nos primeiros 3 meses
            com a EndaTrack"
          </p>
          <p className="text-sm opacity-90">
            — Gestor de Frota, Transportadora líder em Angola
          </p>
        </div>
      </div>
    </section>
  );
}
