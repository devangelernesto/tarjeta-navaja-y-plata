import { businessData } from '../config/data';
import { FaTrophy, FaHandshake, FaShareAlt } from 'react-icons/fa';

export const Promotions = () => {

  // Iconos en rojo para que destaquen como "Llamados a la acción"
  const renderPromoIcon = (id: number) => {
    switch(id) {
      case 1: return <FaTrophy className="text-barber-red text-2xl drop-shadow-md" />;
      case 2: return <FaHandshake className="text-barber-red text-2xl drop-shadow-md" />;
      case 3: return <FaShareAlt className="text-barber-red text-2xl drop-shadow-md" />;
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
            Beneficios y Dinámicas
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {businessData.promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="bg-gradient-to-br from-[#1a1d24] to-black border border-gray-800 p-5 rounded-xl shadow-lg relative overflow-hidden transition-all hover:border-gray-600"
          >
            {/* Brillo rojo sutil en el fondo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-barber-red opacity-5 rounded-full blur-3xl"></div>
            
            <h3 className="text-barber-silver font-oswald text-xl tracking-wide mb-3 relative z-10 flex items-center gap-3">
              {renderPromoIcon(promo.id)}
              {promo.title}
            </h3>
            
            <p className="text-gray-400 text-sm font-inter leading-relaxed relative z-10">
              {promo.description}
            </p>
            
            {promo.quote && (
              <div className="mt-4 border-l-2 border-barber-red pl-3 italic text-gray-500 text-xs font-inter relative z-10">
                {promo.quote}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </section>
  );
};