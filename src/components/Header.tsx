import React, { useState } from 'react';
import { Home, User, Image, Phone, Menu, X, Briefcase } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'services', label: 'Serviços', icon: Briefcase },
    { id: 'projects', label: 'Projetos', icon: Image },
    { id: 'contact', label: 'Contato', icon: Phone },
  ];

  return (
    <header className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-warm-beige/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-soft-rose rounded-full flex items-center justify-center">
              <Home className="w-5 h-5 text-warm-brown" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-warm-brown">Luiza França</h1>
              <p className="text-sm text-warm-beige">Arquitetura & Interiores</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-soft-rose text-warm-brown'
                      : 'text-warm-beige hover:text-warm-brown hover:bg-soft-rose/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-warm-brown hover:bg-soft-rose/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-warm-beige/20 py-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                      activeSection === item.id
                        ? 'bg-soft-rose text-warm-brown'
                        : 'text-warm-beige hover:text-warm-brown hover:bg-soft-rose/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;