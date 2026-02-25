import React, { useEffect, useState } from 'react';
import { Menu, X, Instagram, Mail, MessageCircle, Camera, Briefcase, Calendar, Star, Award, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import '../styles/Home.css';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappNumber = '5521986844932';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const portfolioImages = [
    'https://customer-assets.emergentagent.com/job_38a802c2-83b6-4617-ba31-3c72fe4ddf05/artifacts/gixrflbf_rayka%201.png',
    'https://customer-assets.emergentagent.com/job_38a802c2-83b6-4617-ba31-3c72fe4ddf05/artifacts/qvio3f1o_rayka%202.png',
    'https://customer-assets.emergentagent.com/job_38a802c2-83b6-4617-ba31-3c72fe4ddf05/artifacts/ls9tkqsa_rayka%203.png',
    'https://customer-assets.emergentagent.com/job_38a802c2-83b6-4617-ba31-3c72fe4ddf05/artifacts/2vb9h67l_rayka%204.png',
    'https://customer-assets.emergentagent.com/job_38a802c2-83b6-4617-ba31-3c72fe4ddf05/artifacts/dginmy8b_rayka%205.png'
  ];

  const services = [
    { icon: Camera, title: 'Ensaios Fotográficos', description: 'Editorial, lifestyle e comercial' },
    { icon: Star, title: 'Publicidade', description: 'Campanhas e material promocional' },
    { icon: Calendar, title: 'Eventos', description: 'Presença em eventos corporativos e sociais' },
    { icon: Award, title: 'Desfiles', description: 'Passarelas e apresentações fashion' },
    { icon: Sparkles, title: 'Conteúdo Digital', description: 'Produção para redes sociais' },
    { icon: Briefcase, title: 'Presença VIP', description: 'Participação em eventos exclusivos' }
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1 className="logo">Rayka Jordan</h1>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfólio</button>
            <button onClick={() => scrollToSection('sobre')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('dados-tecnicos')} className="nav-link">Dados Técnicos</button>
            <button onClick={() => scrollToSection('servicos')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('valores')} className="nav-link">Valores</button>
            <button onClick={() => scrollToSection('contato')} className="nav-link">Contato</button>
          </nav>

          <Button 
            className="contact-button-header"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="icon" />
            Contato
          </Button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">Portfólio</button>
            <button onClick={() => scrollToSection('sobre')} className="mobile-nav-link">Sobre</button>
            <button onClick={() => scrollToSection('dados-tecnicos')} className="mobile-nav-link">Dados Técnicos</button>
            <button onClick={() => scrollToSection('servicos')} className="mobile-nav-link">Serviços</button>
            <button onClick={() => scrollToSection('valores')} className="mobile-nav-link">Valores</button>
            <button onClick={() => scrollToSection('contato')} className="mobile-nav-link">Contato</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <img src={portfolioImages[0]} alt="Rayka Jordan" className="hero-image" />
        <div className="hero-content">
          <h2 className="hero-subtitle">MODELO PROFISSIONAL</h2>
          <h1 className="hero-title">Rayka Jordan</h1>
          <p className="hero-description">Editorial • Fashion • Publicidade</p>
          <Button 
            className="hero-cta"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="icon" />
            Entre em Contato
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about-section">
        <div className="about-background">
          <img src="https://customer-assets.emergentagent.com/job_model-rayka-agency/artifacts/v8rg5j1n_orla%20zona%20sul.png" alt="Copacabana" className="about-bg-image" />
          <div className="about-overlay"></div>
        </div>
        <div className="about-content">
          <h2 className="section-title">Sobre</h2>
          <Separator className="title-separator" />
          <div className="about-text">
            <p>
              Modelo profissional baseada no Rio de Janeiro, com experiência em ensaios editoriais, 
              publicidade e eventos. Apaixonada por moda e expressão artística através da fotografia.
            </p>
            <p>
              Com um olhar versátil e presença marcante, trabalho com as principais agências e 
              fotógrafos do mercado, trazendo autenticidade e profissionalismo para cada projeto.
            </p>
            <p>
              Disponível para trabalhos em todo território nacional e internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Portfólio</h2>
          <Separator className="title-separator" />
          <div className="portfolio-grid">
            {portfolioImages.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img src={image} alt={`Portfolio ${index + 1}`} />
                <div className="portfolio-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Data Section */}
      <section id="dados-tecnicos" className="technical-section">
        <div className="container">
          <h2 className="section-title">Dados Técnicos</h2>
          <Separator className="title-separator" />
          <Card className="technical-card">
            <CardContent className="technical-content">
              <div className="technical-grid">
                <div className="technical-item">
                  <span className="technical-label">Busto</span>
                  <span className="technical-value">34</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Cintura</span>
                  <span className="technical-value">36</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Quadril</span>
                  <span className="technical-value">38</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Altura</span>
                  <span className="technical-value">1,70m</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Peso</span>
                  <span className="technical-value">57kg</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Cor da Pele</span>
                  <span className="technical-value">Branca</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Cabelos</span>
                  <span className="technical-value">Castanhos</span>
                </div>
                <div className="technical-item">
                  <span className="technical-label">Olhos</span>
                  <span className="technical-value">Castanhos Claros</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services-section">
        <div className="container">
          <h2 className="section-title">Serviços</h2>
          <Separator className="title-separator" />
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="service-card">
                  <CardContent className="service-content">
                    <Icon className="service-icon" />
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="valores" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Valores</h2>
          <Separator className="title-separator" />
          <div className="pricing-content">
            <p className="pricing-text">
              Os valores variam de acordo com o tipo de trabalho, duração e localização.
            </p>
            <Button 
              className="pricing-cta"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="icon" />
              Consultar Valores
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contato</h2>
          <Separator className="title-separator" />
          <div className="contact-content">
            <div className="contact-item">
              <MessageCircle className="contact-icon" />
              <div className="contact-info">
                <span className="contact-label">WhatsApp</span>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-value">
                  +55 21 98684-4932
                </a>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <a href="mailto:contato@raykajordan.com.br" className="contact-value">
                  contato@raykajordan.com.br
                </a>
              </div>
            </div>
            <div className="contact-item">
              <Instagram className="contact-icon" />
              <div className="contact-info">
                <span className="contact-label">Instagram</span>
                <a href="https://www.instagram.com/raykajordan/" target="_blank" rel="noopener noreferrer" className="contact-value">
                  @raykajordan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Rayka Jordan. Todos os direitos reservados.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Home;