"use client";

import { useState } from "react";
import {
  FiMail,
  FiUser,
  FiBriefcase,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiMapPin,
  FiPhoneCall,
  FiClock,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    vehicleCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        vehicleCount: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-blue-900/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full mb-4 border border-blue-400/30">
            <span className="text-blue-200 text-sm font-semibold">
              📞 CONTACTO DIRETO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pronto para transformar sua gestão de frotas?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Solicite uma demonstração gratuita ou comece já a testar a
            plataforma. Nossa equipa está pronta para atender.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lado Esquerdo - Informações de Contacto */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informações de Contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Endereço</p>
                      <p className="text-gray-300 text-sm">Luanda, Angola</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiPhoneCall className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Telefone</p>
                      <p className="text-gray-300 text-sm">+244 XXX XXX XXX</p>
                      <p className="text-gray-400 text-xs">Disponível 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300 text-sm">
                        vendas@endatrack.co.ao
                      </p>
                      <p className="text-gray-400 text-xs">
                        Resposta em até 2h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiClock className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Horário de Atendimento
                      </p>
                      <p className="text-gray-300 text-sm">
                        Segunda a Sexta: 8h - 18h
                      </p>
                      <p className="text-gray-400 text-xs">Sábado: 9h - 13h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                    <p className="text-white text-sm">
                      <span className="font-semibold">
                        Atendimento prioritário
                      </span>{" "}
                      para clientes EndaTrack
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Formulário com labels associadas */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Solicitar Demonstração
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      <FiUser className="inline mr-1 text-blue-400" /> Nome *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-gray-400"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      <FiMail className="inline mr-1 text-blue-400" /> Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      <FiPhone className="inline mr-1 text-blue-400" /> Telefone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-gray-400"
                      placeholder="+244 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      <FiBriefcase className="inline mr-1 text-blue-400" />{" "}
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-gray-400"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-vehicle-count"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Número de veículos na frota
                  </label>
                  <input
                    type="number"
                    id="contact-vehicle-count"
                    name="vehicleCount"
                    inputMode="numeric"
                    autoComplete="off"
                    value={formData.vehicleCount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-gray-400"
                    placeholder="Ex: 10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-gray-400 resize-none"
                    placeholder="Conte-nos sobre suas necessidades..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Solicitar Demonstração
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <div className="bg-green-500/20 border border-green-400/30 text-green-200 px-4 py-3 rounded-lg text-center animate-fade-in text-sm">
                    ✓ Mensagem enviada! Entraremos em contacto em até 24h.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
