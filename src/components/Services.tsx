import { businessData } from '../config/data';
import { FaShieldAlt, FaMedal, FaCrown, FaCut } from 'react-icons/fa';

export const Services = () => {

  const renderIcon = (id: number) => {
    switch(id) {
      case 1: return <FaShieldAlt className="text-barber-silver text-xl" />; 
      case 2: return <FaMedal className="text-barber-silver text-xl" />; 
      case 4: return <FaCut className="text-barber-silver text-xl" />; 
      case 3: return <FaCrown className="text-barber-silver text-xl" />; 
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
            /* Agregamos la clase "group" aquí para detectar el hover en toda la tarjeta */
            className="group min-w-[280px] bg-barber-panel rounded-xl overflow-hidden shadow-xl snap-center border border-gray-800 flex-shrink-0 flex flex-col cursor-pointer"
          >
            <div className="h-44 w-full overflow-hidden relative">
              {/* Le agregamos pointer-events-none para que el ratón "atraviese" el degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-barber-panel to-transparent opacity-60 z-10 pointer-events-none"></div>
              
              <img 
                src={service.image} 
                alt={service.name} 
                /* Cambiamos hover:scale-110 por group-hover:scale-110 */
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-0"
              />
            </div>
            
            <div className="p-4 flex flex-col flex-grow relative z-20 -mt-6">
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="text-barber-silver font-oswald text-lg tracking-wide leading-tight flex items-center gap-2 drop-shadow-md">
                  {renderIcon(service.id)}
                  {service.name}
                </h3>
                <span className="bg-barber-red text-white px-3 py-1 rounded text-sm font-inter font-bold shadow-lg border border-red-900">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-400 text-xs font-inter mt-2 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};