import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: '../assets/car-5.jpeg'
        }}
      >
        <img src="./public/car-5.jpeg" alt="fundo" className='w-full' />
        <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/80 via-warm-brown/60 to-warm-brown/40"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cream rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-cream rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-cream rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
            Luiza França
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 font-light mb-8 leading-relaxed">
            Arquitetura & Interiores
          </p>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-warm-beige/20">
            <blockquote className="text-2xl md:text-3xl font-medium text-warm-brown italic leading-relaxed">
              "Seu espaço com identidade, aconchego e funcionalidade"
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setActiveSection('projects')}
              className="bg-soft-rose text-warm-brown px-8 py-4 rounded-full font-semibold hover:bg-cream hover:text-warm-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="border-2 border-cream text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream hover:text-warm-brown transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-cream" />
      </div>
    </section>
  );
};

export default Hero;