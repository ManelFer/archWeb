import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const ProjectCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      // title: 'Apartamento Moderno',
      // category: 'Residencial',
      // description: 'Design contemporâneo com toques minimalistas em apartamento de 120m²',
      image: './public/car-1.png'
    },
    {
      id: 2,
      // title: 'Casa de Campo',
      // category: 'Residencial',
      // description: 'Projeto rústico moderno que harmoniza com a natureza',
      image: './public/car-2.png'
    },
    {
      id: 3,
      // title: 'Escritório Corporativo',
      // category: 'Comercial',
      // description: 'Ambiente profissional que inspira criatividade e produtividade',
      image: './public/car-3.png'
    },
    {
      id: 4,
      // title: 'Loft Industrial',
      // category: 'Residencial',
      // description: 'Integração de elementos industriais com conforto residencial',
      image: './public/car-4.png'
    },
    {
      id: 5,
      // title: 'Café Boutique',
      // category: 'Comercial',
      // description: 'Ambiente acolhedor que convida à contemplação e relaxamento',
      image: './public/car-5.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Projetos Realizados
          </h2>
          <div className="w-24 h-1 bg-soft-rose mx-auto mb-8"></div>
          <p className="text-lg text-warm-beige max-w-2xl mx-auto">
            Cada projeto é uma história única, criada com paixão e dedicação para transformar espaços em lares.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 relative">
                  <img
                    src={project.image}
                    // alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-2xl">
                      <span className="inline-block bg-soft-rose text-warm-brown px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg opacity-90 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div> */}

                  <button className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-soft-rose scale-125' 
                    : 'bg-warm-beige/30 hover:bg-warm-beige/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentSlide === index 
                    ? 'ring-2 ring-soft-rose scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={project.image}
                  // alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  currentSlide === index ? 'bg-soft-rose/20' : 'bg-black/20'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;