import React from 'react';
import HeroSection from '../components/HeroSection';
import ManifiestoSection from '../components/ManifiestoSection';
import PropuestaValorSection from '../components/PropuestaValorSection';
import ObjetivosSection from '../components/ObjetivosSection';
import PerfilFundadora from '../components/PerfilFundadora';
import TarjetaFuncionario from '../components/TarjetaFuncionario';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import funcionariosData from '../data/funcionarios.json';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <HeroSection />
      
      <div id="propuesta">
        <PropuestaValorSection />
      </div>
      
      <div id="objetivos">
        <ObjetivosSection />
      </div>
      
      <div id="manifiesto">
        <ManifiestoSection />
      </div>
      
      <div id="perfil-fundadora">
        <PerfilFundadora />
      </div>
      
      <section className="seccion-destacados">
        <h2>Funcionarios Destacados</h2>
        <div className="contenedor-tarjetas">
          {funcionariosData.map(funcionario => (
            <TarjetaFuncionario key={funcionario.id} funcionario={funcionario} />
          ))}
        </div>
      </section>
      
      <div id="contacto">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;