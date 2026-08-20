import { businessData } from '../config/data';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full mt-12 pb-8 border-t border-gray-800 pt-8 flex flex-col items-center">
      
      {/* Icono y Dirección */}
      <FaMapMarkerAlt className="text-barber-silver-dark text-3xl mb-3" />
      <p className="text-barber-silver font-oswald tracking-wide text-center px-4 mb-5 text-lg">
        {businessData.location.address}
      </p>
      
      {/* Botón de Google Maps */}
      <a 
        href={businessData.location.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border border-gray-600 text-barber-silver-dark hover:text-white hover:border-gray-400 px-6 py-2 rounded-full font-inter text-sm transition-all duration-300 mb-10 uppercase tracking-widest"
      >
        Abrir en Google Maps
      </a>

      {/* Derechos de autor y firma de desarrollo */}
      <p className="text-gray-600 text-[10px] font-inter uppercase tracking-widest text-center leading-relaxed">
        © {new Date().getFullYear()} {businessData.name} <br/>
        <span className="text-gray-800">Desarrollado por Ángel Ernesto</span>
      </p>
      
    </footer>
  );
};