// src/config/data.ts
import img1 from '../assets/ID1.jpeg'; 
import img5 from '../assets/ID4.jpeg'; 
import img2 from '../assets/ID5.jpeg';
import img4 from '../assets/ID6.jpeg'; // Movido aquí para seguir el orden
import img3 from '../assets/ID3.jpeg';

export const businessData = {
  name: "Navaja y Plata",
  subtitle: "Estudio de Barbería",
  location: {
    address: "Calle del Consuelo #31 (Atrás de la Prepa 4)", 
    mapsLink: "https://maps.app.goo.gl/DLjn55UebGWurYAb8?g_st=aw" 
  },
  contact: {
    whatsapp: "527621685427", 
    whatsappMessage: "¡Hola! me gustaría agendar una cita.",
    instagram: "https://www.instagram.com/navajayplata?igsh=MXJmMms1cGtqem5qZQ==",
    tiktok: "https://www.tiktok.com/@navajayplata?_r=1&_t=ZS-98zWWDOEDQN"
  },
  services: [
    { 
      id: 1, 
      name: "Paquete Bronce", 
      description: "Corte fade normal con terminados impecables.", 
      price: "$100",
      image: img3 
    },
    { 
      id: 2, 
      name: "Paquete Plata", 
      description: "Corte + perfilado de barba a navaja.", 
      price: "$150",
      image: img5 
    },
    { 
      id: 4, 
      name: "Fade con Diseño", 
      description: "Corte con degradado y diseño personalizado.", 
      price: "$180",
      image: img2 
    },
    { 
      id: 3, 
      name: "Paquete Oro Premium", 
      description: "Corte + barba [Ritual de toalla caliente + mascarilla].", 
      price: "$220",
      image: img4 
    }
  ],
  promotions: [
    {
      id: 1,
      title: "El Cliente del Mes",
      description: "Cada cliente que se corte durante el mes participa en un sorteo. Premio: 1 corte Oro Premium totalmente gratis.",
      quote: '"Cada visita te acerca a un corte de cortesía. ¡Entre más vengas, más oportunidades tienes de ganar!"'
    },
    {
      id: 2,
      title: "Trae a un Amigo",
      description: "Si traes a alguien nuevo, él paga su corte normal y tú recibes 50% de descuento en tu siguiente corte o una cortesía tras ciertos referidos."
    },
    {
      id: 3,
      title: "Dinámica en Redes",
      description: "Síguenos, dale like, comparte la publicación y etiqueta a 2 amigos para ganar un Corte Oro Premium."
    }
  ]
};