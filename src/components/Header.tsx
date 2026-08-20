import { businessData } from '../config/data';
import logo from '../assets/logo.jpeg'; 

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-12 pb-6 text-center">
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 bg-barber-silver rounded-full blur-md opacity-10"></div>
        <img 
          src={logo} 
          alt={`Logo de ${businessData.name}`} 
          className="relative z-10 w-full h-full object-cover rounded-full border border-gray-700 shadow-2xl"
        />
      </div>
      
      {/* Aquí usamos font-oswald */}
      <h1 className="text-4xl font-bold font-oswald text-barber-silver tracking-wide uppercase mt-2">
        {businessData.name}
      </h1>
      <p className="text-sm text-barber-silver-dark font-medium tracking-[0.2em] uppercase mt-2">
        {businessData.subtitle}
      </p>
    </header>
  );
};