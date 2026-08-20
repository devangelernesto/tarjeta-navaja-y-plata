import { businessData } from '../config/data';
// Importamos iconos limpios y profesionales
import { FaShieldAlt, FaMedal, FaCrown, FaCut } from 'react-icons/fa';

export const Services = () => {

  // Función para asignar el icono correcto según el ID del servicio
  const renderIcon = (id: number) => {
    switch(id) {
      case 1: return <FaShieldAlt className="text-[#cd7f32] text-xl" />; // Tono Bronce
      case 2: return <FaMedal className="text-gray-300 text-xl" />; // Tono Plata
      case 3: return <FaCrown className="text-yellow-600 text-xl" />; // Tono Oro oscuro
      case 4: return <FaCut className="text-barber-silver text-xl" />; // Navaja/Diseño
      default: return null;
    }
  };

  return (
    <section className="w-full mt-10">
      
      <div className="w-full text-center mb-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-barber-bg px-4 text-barber-silver-dark font-oswald text-lg tracking-wider uppercase">
            Nuestros Servicios
          </span>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory custom-scrollbar">
        {businessData.services.map((service) => (
          <div 
            key={service.id} 
            className="min-w-[280px] bg-barber-panel rounded-xl overflow-hidden shadow-xl snap-center border border-gray-800 flex-shrink-0 flex flex-col"
          >
            <div className="h-44 w-full overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2 gap-2">
                
                {/* Aquí inyectamos el icono junto al nombre */}
                <h3 className="text-barber-silver font-oswald text-lg tracking-wide leading-tight flex items-center gap-2">
                  {renderIcon(service.id)}
                  {service.name}
                </h3>

                <span className="bg-barber-bg text-barber-silver-dark px-2 py-1 rounded text-sm font-inter font-semibold border border-gray-700 shadow-inner">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-400 text-xs font-inter mt-1 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};