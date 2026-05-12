"use client";

import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor de Operações",
    company: "Translog Angola",
    content:
      "A EndaTrack revolucionou nossa gestão de frotas. Reduzimos custos em 25% e aumentamos a eficiência das entregas significativamente.",
    rating: 5,
  },
  {
    name: "Ana Paula Santos",
    role: "Gestora de Frota",
    company: "Distribuidora Kwanza",
    content:
      "O suporte é excelente e a plataforma é muito intuitiva. Conseguimos monitorizar toda a frota em tempo real com facilidade.",
    rating: 5,
  },
  {
    name: "Fernando Oliveira",
    role: "CEO",
    company: "Logistics Solutions",
    content:
      "Melhor investimento que fizemos. O ROI veio em menos de 6 meses e a satisfação da equipa é total.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            DEPOIMENTOS
          </span>
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            Empresas que já transformaram sua gestão de frotas com a EndaTrack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role} - {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
