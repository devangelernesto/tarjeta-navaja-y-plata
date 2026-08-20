import { Header } from './components/Header';
import { ActionLinks } from './components/ActionLinks';
import { Services } from './components/Services';
import { Promotions } from './components/Promotions'; // Importamos promociones
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-md bg-barber-bg min-h-screen shadow-2xl overflow-hidden px-6 relative border-x border-gray-900 flex flex-col">
        
        <Header />
        <ActionLinks />
        <Services />
        <Promotions /> {/* Colocamos la nueva sección aquí */}
        
        <div className="mt-auto">
          <Footer />
        </div>
        
      </div>
    </main>
  );
}

export default App;