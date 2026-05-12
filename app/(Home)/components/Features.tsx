"use client";

import {
  FiMap,
  FiBarChart2,
  FiBell,
  FiPhone,
  FiShield,
  FiClock,
} from "react-icons/fi";

const features = [
  {
    icon: <FiMap size={32} />,
    title: "Rastreamento em Tempo Real",
    description:
      "Monitore toda sua frota com precisão GPS e atualizações ao vivo diretamente do seu computador ou smartphone.",
  },
  {
    icon: <FiBarChart2 size={32} />,
    title: "Relatórios Avançados",
    description:
      "Análises detalhadas sobre desempenho, consumo de combustível, quilometragem e comportamento do motorista.",
  },
  {
    icon: <FiBell size={32} />,
    title: "Alertas Inteligentes",
    description:
      "Notificações automáticas para manutenção preventiva, excesso de velocidade, desvios de rota e violações.",
  },
  {
    icon: <FiPhone size={32} />,
    title: "App Mobile",
    description:
      "Acompanhe sua frota de qualquer lugar com nosso aplicativo disponível para Android e iOS.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Segurança de Dados",
    description:
      "Proteção avançada das informações da sua empresa com criptografia de ponta a ponta.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Histórico Completo",
    description:
      "Acesso a todo histórico de rotas, paragens, velocidades e eventos dos últimos 12 meses.",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            FUNCIONALIDADES
          </span>
          <h2 className="section-title">
            Tudo o que precisa para gerir a sua frota
          </h2>
          <p className="section-subtitle">
            Uma plataforma completa com todas as ferramentas necessárias para o
            controlo eficiente da sua frota
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
