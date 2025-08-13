import React from 'react';
import './Footer.css'; // Archivo CSS para los estilos
import logoFooter from '../assets/logo-footer.png'; // Asegúrate de tener un logo para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-seccion logo-seccion">
          <img src={logoFooter} alt="Logo de Transparencia Conectada" className="logo-footer" />
          <p className="slogan">Diseño y tecnología para la transparencia.</p>
        </div>

        <div className="footer-seccion enlaces-seccion">
          <h4>Explora</h4>
          <ul>
            <li><a href="#propuesta">Propuesta de Valor</a></li>
            <li><a href="#manifiesto">Manifiesto</a></li>
            <li><a href="#perfil-fundadora">Fundadora</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-seccion contacto-seccion">
          <h4>Contacto</h4>
          <p>Email: info@transparenciaconectada.com</p>
          <p>Teléfono: +52 951 123 4567</p>
        </div>

        <div className="footer-seccion redes-seccion">
          <h4>Síguenos</h4>
          <div className="redes-sociales">
            <a href="https://linkedin.com/in/fannydesignstyle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/fannydesignstyle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/fannydesignstyle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Transparencia Conectada. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
