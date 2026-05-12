"use client";

import { FiMail, FiPhone, FiMapPin, FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/img/Enda-logo.PNG"
                alt=""
                width={80}
                height={80}
              />
              <div>
                <h3 className="text-xl font-bold text-white">EndaTrack</h3>
                <p className="text-xs text-gray-400">GESTÃO DE FROTAS</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Solução completa para gestão de frotas em Angola. Tecnologia de
              ponta para resultados reais.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#funcionalidades"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <FiMail className="text-blue-400" />
                <span>vendas@endatrack.co.ao</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FiPhone className="text-blue-400" />
                <span>+244 948 085 035</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FiMapPin className="text-blue-400" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2026 EndaTrack. Todos os direitos reservados. |
            <a href="#" className="hover:text-blue-400 ml-1">
              Política de Privacidade
            </a>{" "}
            |
            <a href="#" className="hover:text-blue-400 ml-1">
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}