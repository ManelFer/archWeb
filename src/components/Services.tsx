import React from 'react';
import { Home, Palette, Ruler,  } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Projeto Arquitetônico Residencial',
      description: 'Projetos completos para residências, criando ambientes únicos que refletem o estilo de vida dos moradores.',
      features: ['Conceito e estilo', 'Mobiliário sob medida', 'Iluminação especializada', 'Decoração personalizada']
    },
    {
      icon: Palette,
      title: 'Projeto de Interiores Comercial',
      description: 'Ambientes comerciais que transmitem a identidade da marca e proporcionam experiências memoráveis.',
      features: ['Identidade visual', 'Fluxo otimizado', 'Ambientação comercial', 'Experiência do cliente']
    },
    {
      icon: Ruler,
      title: 'Consultoria Arquitetônica',
      description: 'Orientação especializada para projetos arquitetônicos.',
      features: ['Plantas baixas', 'Projetos executivos', 'Aprovação legal', 'Acompanhamento técnico']
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-soft-rose mx-auto mb-8"></div>
          <p className="text-lg text-warm-beige max-w-2xl mx-auto">
            Oferecemos soluções completas em arquitetura e design de interiores, 
            desde a concepção até a entrega final do seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-warm-beige/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-soft-rose rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-warm-brown" />
                </div>
                
                <h3 className="text-xl font-semibold text-warm-brown mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-warm-beige leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-warm-brown mb-3">
                    Inclui:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-warm-beige">
                        <div className="w-2 h-2 bg-soft-rose rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-warm-beige/20">
                  <a href="https://www.instagram.com/arq.luizafranca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <button className="text-warm-brown font-semibold hover:text-soft-rose transition-colors duration-300">
                      Saiba mais →
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-rose to-warm-beige rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Pronto para transformar seu espaço?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Entre em contato e vamos conversar sobre como posso ajudar a criar o ambiente dos seus sonhos.
            </p>
            <button className="bg-white text-warm-brown px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;