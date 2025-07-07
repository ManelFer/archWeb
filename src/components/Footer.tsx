import React from 'react';
import { Heart, Home } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-soft-rose rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-warm-brown" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Luiza França</h3>
                <p className="text-white/80">Arquitetura & Design</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Transformando espaços com identidade, aconchego e funcionalidade. 
              Cada projeto é único e especial.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Projeto Arquitetônico Residencial</li>
              <li className="hover:text-white transition-colors cursor-pointer">Projeto de Interiores Comercial</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consultoria Arquitetônica</li>
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nosso Compromisso</h4>
            <blockquote className="text-white/70 italic leading-relaxed">
              Seu espaço com identidade, aconchego e funcionalidade
            </blockquote>
            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-white/80">
                Horário de atendimento:<br />
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 Luiza França. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2 text-white/60">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-soft-rose fill-current" />
            <span>para transformar sonhos em realidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;