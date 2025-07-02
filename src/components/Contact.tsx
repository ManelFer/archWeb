import React from 'react';
import { Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/arq.luizafranca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      color: 'hover:text-pink-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anna-luiza-frança-moura-913385344/',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/5579996524316',
      color: 'hover:text-green-500'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(79) 99652-4316'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'arq.luizafranca@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Aracaju, SE'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-beige/20 via-soft-rose/10 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-soft-rose mx-auto mb-8"></div>
          <p className="text-lg text-warm-beige max-w-2xl mx-auto">
            Pronta para transformar seu espaço? Entre em contato e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-warm-beige/20">
            <h3 className="text-2xl font-semibold text-warm-brown mb-6">
              Envie uma Mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-warm-beige font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-warm-beige/30 rounded-lg focus:ring-2 focus:ring-soft-rose focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-warm-beige font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-warm-beige/30 rounded-lg focus:ring-2 focus:ring-soft-rose focus:border-transparent outline-none transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-warm-beige font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-warm-beige/30 rounded-lg focus:ring-2 focus:ring-soft-rose focus:border-transparent outline-none transition-all duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-warm-beige font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-warm-beige/30 rounded-lg focus:ring-2 focus:ring-soft-rose focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-soft-rose text-warm-brown py-4 rounded-lg font-semibold hover:bg-warm-beige hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-warm-beige/20">
              <h3 className="text-2xl font-semibold text-warm-brown mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-soft-rose rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-warm-brown" />
                      </div>
                      <div>
                        <p className="text-sm text-warm-beige font-medium">
                          {info.label}
                        </p>
                        <p className="text-warm-brown font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-warm-beige/20">
              <h3 className="text-2xl font-semibold text-warm-brown mb-6">
                Redes Sociais
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-6 rounded-xl border border-warm-beige/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-warm-beige ${social.color}`}
                    >
                      <Icon className="w-8 h-8 mb-3" />
                      <span className="font-medium text-sm">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-soft-rose to-warm-beige rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Pronta para começar?
              </h3>
              <p className="text-white/90 mb-6">
                Agende uma conversa gratuita para discutirmos seu projeto.
              </p>
              <a
                href="https://wa.me/5579996524316"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-warm-brown px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;