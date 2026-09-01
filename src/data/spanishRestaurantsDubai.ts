export interface SpanishRestaurantBenchmark {
  id: string;
  name: string;
  location: string;
  concept: string;
  category: 'Casual / Taberna' | 'Premium / Fine Dining' | 'Lifestyle / Beach Club';
  avgTicketAed: { min: number; max: number; label: string };
  alcoholLicense: boolean;
  differentiators: string[];
  websiteUrl: string;
}

export const SPANISH_RESTAURANTS_DUBAI: SpanishRestaurantBenchmark[] = [
  {
    id: "lola-taberna",
    name: "Lola Taberna Española",
    location: "TRYP by Wyndham, Barsha Heights (TECOM)",
    concept: "Taberna tradicional / Tapas de barrio y raciones",
    category: "Casual / Taberna",
    avgTicketAed: { min: 120, max: 200, label: "120 – 200 AED" },
    alcoholLicense: true,
    differentiators: [
      "Eventos semanales dinámicos (Noches de flamenco, brunch temático, ladies night)",
      "Punto de encuentro consolidado para la comunidad hispanohablante y residentes locales",
      "Ticket accesible y ambiente relajado sin código de vestimenta estricto"
    ],
    websiteUrl: "http://www.lolataberna.com/"
  },
  {
    id: "salero-tapas",
    name: "Salero - Tapas & Bodega",
    location: "Kempinski Hotel, Mall of the Emirates, Al Barsha",
    concept: "Bodega andaluza / Paellas tradicionales y tapas clásicas",
    category: "Casual / Taberna",
    avgTicketAed: { min: 180, max: 280, label: "180 – 280 AED" },
    alcoholLicense: true,
    differentiators: [
      "Ubicación de altísimo tráfico conectada directamente con Mall of the Emirates",
      "Música y cante flamenco en vivo con regularidad",
      "Captación equilibrada entre turistas internacionales y público local"
    ],
    websiteUrl: "https://www.kempinski.com/en/dubai/mall-of-the-emirates/dining/salero-tapas-bodega/"
  },
  {
    id: "tatel-dubai",
    name: "TATEL Dubai",
    location: "Hotel Boulevard, Autograph Collection, Downtown Dubai",
    concept: "Fine Dining / Cocina española de autor & Supper Club nocturno",
    category: "Premium / Fine Dining",
    avgTicketAed: { min: 300, max: 450, label: "300 – 450+ AED" },
    alcoholLicense: true,
    differentiators: [
      "Respaldo internacional de marca con socios de alto perfil (Rafael Nadal, Cristiano Ronaldo, Manuel Campos)",
      "Concepto de cena con entretenimiento en vivo (DJ, cantantes, coctelería premiada)",
      "Ubicación Prime en Downtown orientada al segmento de lujo y ocio corporativo"
    ],
    websiteUrl: "https://tatelrestaurants.com/en/dubai-restaurant/"
  },
  {
    id: "barrafina-difc",
    name: "Barrafina Restaurant DIFC",
    location: "Gate Village, DIFC",
    concept: "Barra de tapas contemporánea y producto fresco de temporada",
    category: "Premium / Fine Dining",
    avgTicketAed: { min: 250, max: 400, label: "250 – 400 AED" },
    alcoholLicense: true,
    differentiators: [
      "Franquicia icónica londinense con Estrella Michelin adaptada a Dubái",
      "Cocina abierta con servicio dinámico alrededor de una barra central de mármol",
      "Fuerte presencia de ejecutivos financieros, abogados y turismo gastronómico"
    ],
    websiteUrl: "https://www.barrafina.com/locations/barrafina-dubai/"
  },
  {
    id: "tagomago",
    name: "Tagomago",
    location: "Azure Residences, Palm Jumeirah",
    concept: "Cocina balear mediterránea / Beach Club & Chiringuito de lujo",
    category: "Lifestyle / Beach Club",
    avgTicketAed: { min: 300, max: 500, label: "300 – 500+ AED" },
    alcoholLicense: true,
    differentiators: [
      "Acceso directo a playa privada y vistas icónicas en Palm Jumeirah",
      "Enfoque en arroces, pescados al carbón y ambiente festivo estilo Ibiza/Formentera",
      "Público de alto poder adquisitivo y estilo de vida vacacional"
    ],
    websiteUrl: "https://tagomago.ae/"
  },
  {
    id: "sevilles",
    name: "Seville's Spanish Tapas Bar",
    location: "Wafi City Mall (Rooftop Gardens), Oud Metha",
    concept: "Restaurante clásico y bar de tapas (Pionero histórico)",
    category: "Casual / Taberna",
    avgTicketAed: { min: 140, max: 220, label: "140 – 220 AED" },
    alcoholLicense: true,
    differentiators: [
      "Más de dos décadas de operación continua con base de clientes fieles",
      "Terraza exterior amplia ideal para eventos privados y grupos familiares",
      "Menú tradicional centrado en clásicos españoles sin pretensiones"
    ],
    websiteUrl: "https://sevilles.ae/"
  }
];
