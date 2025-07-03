import React from 'react';
// import { Award, Heart, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  // const values = [
  //   {
  //     icon: Heart,
  //     title: 'Aconchego',
  //     description: 'Criamos ambientes que transmitem calor humano e bem-estar.'
  //   },
  //   {
  //     icon: Lightbulb,
  //     title: 'Identidade',
  //     description: 'Cada projeto reflete a personalidade única de nossos clientes.'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Funcionalidade',
  //     description: 'Soluções inteligentes que otimizam o uso de cada espaço.'
  //   },
  //   {
  //     icon: Users,
  //     title: 'Experiência',
  //     description: 'Mais de 10 anos transformando sonhos em realidade.'
  //   }
  // ];

  return (
    <section className="py-20 bg-warm-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-soft-rose mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-warm-beige/20">
              <h3 className="text-2xl font-semibold text-warm-brown mb-6">
                Luiza França
              </h3>
              <p className="text-lg text-warm-beige leading-relaxed mb-6">
                Sou Luiza França, sergipana, arquiteta e apaixonada em explorar as possibilidades de um espaço.
              </p>
              <p className="text-lg text-warm-beige leading-relaxed mb-6">
                Por aqui, eu te convido a acompanhar meu trabalho com arquitetura e interiores, a partir de projetos residenciais e comerciais que traduzam
                a personalidade de cada cliente, alinhando funcionalidade, beleza e autenticidade.
              </p>

            </div>
          </div>

          {/* Image and Values */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-warm-beige/20">
                <img
                  src="/perfil.png"
                  alt="Luiza França"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-4 bg-gradient-to-t from-warm-brown/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Values Grid
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-warm-beige/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-soft-rose rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-warm-brown" />
                    </div>
                    <h3 className="text-lg font-semibold text-warm-brown mb-2">
                      {value.title}
                    </h3>
                    <p className="text-warm-beige text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;