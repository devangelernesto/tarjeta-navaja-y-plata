import { businessData } from '../config/data';
// Cambiamos FaFacebookF por FaTiktok
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

export const ActionLinks = () => {
  const whatsappUrl = `https://wa.me/${businessData.contact.whatsapp}?text=${encodeURIComponent(businessData.contact.whatsappMessage)}`;

  return (
    <section className="flex flex-col items-center w-full mt-6">
      
      <div className="w-full text-center mb-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-barber-bg px-4 text-barber-silver-dark font-oswald text-lg tracking-wider uppercase">
            Reserva o Contáctanos
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        
        {/* Botón WhatsApp */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-barber-panel border border-gray-800 hover:border-gray-500 hover:bg-gray-800 text-barber-silver font-medium py-4 px-5 rounded-lg flex items-center justify-between transition-all duration-300 shadow-lg"
        >
          <span className="flex items-center gap-4 text-lg">
            <FaWhatsapp className="text-2xl text-green-500" />
            WhatsApp
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Agendar ▸</span>
        </a>

        {/* Botón TikTok (NUEVO) */}
        <a 
          href={businessData.contact.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-barber-panel border border-gray-800 hover:border-gray-500 hover:bg-gray-800 text-barber-silver font-medium py-4 px-5 rounded-lg flex items-center justify-between transition-all duration-300 shadow-lg"
        >
          <span className="flex items-center gap-4 text-lg">
            {/* TikTok usa sus colores blanco/negro/cyan/rosa, el blanco resalta bien aquí */}
            <FaTiktok className="text-2xl text-white" />
            TikTok
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Seguir ▸</span>
        </a>

        {/* Botón Instagram */}
        <a 
          href={businessData.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-barber-panel border border-gray-800 hover:border-gray-500 hover:bg-gray-800 text-barber-silver font-medium py-4 px-5 rounded-lg flex items-center justify-between transition-all duration-300 shadow-lg"
        >
          <span className="flex items-center gap-4 text-lg">
            <FaInstagram className="text-2xl text-pink-500" />
            Instagram
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Visitar ▸</span>
        </a>

      </div>
    </section>
  );
};