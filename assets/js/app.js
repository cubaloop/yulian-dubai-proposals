// Application State & Controller for Yulian's Proposal - Horizon Grove Edition
let state = {
  lang: 'es', // 'es' or 'en'
  currency: 'EUR', // 'EUR', 'AED', 'USD'
  unit: 'sqm', // 'sqm', 'sqft'
  activeTab: 'living', // 'living', 'commercial', 'townhouse'
  activeProperty: null,
  activeGalleryIndex: 0,
  activeMap: null,
  activeChart: null
};

// UI Translations
const TRANSLATIONS = {
  es: {
    heroWelcome: "welcome to your dubai portfolio",
    heroDesc: "Un espacio exclusivo donde el diseño arquitectónico de vanguardia se une al confort familiar y comercial, curado a medida para ti y tu madre.",
    viewApartments: "Ver Propuestas Residenciales",
    startingFrom: "Desde",
    searchProgress: "ESTADO DE BÚSQUEDA",
    
    navLiving: "Residencial (Vivir)",
    navCommercial: "Restaurante (Comercial)",
    navTownhouse: "Chalet (Personal)",
    getConsultation: "Get A Consultation ↗",
    
    tabLiving: "Apartamento para Vivir",
    tabLivingSub: "2-3 BHK • Downtown / Business Bay",
    tabCommercial: "Restaurante Comercial",
    tabCommercialSub: "12k-15k sqft • Áreas Abiertas",
    tabTownhouse: "Chalet para Rentar",
    tabTownhouseSub: "4 BHK • Damac Hills (Personal)",
    
    compareBtn: "Comparar Opciones",
    contactAdvisor: "Contactar Asesor",
    
    // Cards
    viewFullDetails: "Ver Ficha Completa",
    floor: "Piso",
    beds: "Habitaciones",
    baths: "Baños",
    priceNegotiable: "Negociable a",
    targetROI: "Plusvalía 5 Años",
    targetAnnual: "Proyección Anual",
    
    // Section Headers
    livingSectionTitle: "Residencias Seleccionadas",
    livingSectionDesc: "Propiedades con vistas directas al Burj Khalifa y Canal de Dubai, acabados premium y máxima idoneidad para vivir cómodamente con tu madre.",
    
    // Status Banners
    statusWorking: "Actualmente Trabajando en Encontrarte las mejores Opciones",
    statusWorkingSub: "Analizando disponibilidades exclusivas off-market y ubicaciones estratégicas con terrazas abiertas y licencias gastronómicas aprobadas.",
    reqTitle: "Criterios Establecidos",
    locationsTarget: "Zonas en Búsqueda",
    budgetRange: "Presupuesto Objetivo",
    dimensionsRange: "Superficie Solicitada",
    technicalFeatures: "Especificaciones Técnicas Clave",
    requestCall: "Avisarme al Encontrar Opciones",
    
    // Modal
    gallery: "Galería de Fotos de Alta Calidad",
    propertySpecs: "Ficha Arquitectónica",
    financialAnalysis: "Plusvalía Histórica (5 Años) & Proyección 2030",
    financialDesc: "Evolución real del valor del activo (2021-2026) y pronóstico de crecimiento fundamentado en el Dubai Urban Master Plan 2040.",
    suitabilityTitle: "Por Qué es la Mejor Opción para Vivir con tu Madre",
    upcomingProjectsTitle: "Mega-Proyectos en Desarrollo en la Zona (Impulsores de Valor)",
    mapTitle: "Ubicación Geográfica y Conectividad",
    bookViewing: "Agendar Visita Privada",
    askWhatsapp: "Consultar por WhatsApp",
    backToList: "Volver a las Propuestas",
    
    // Comparison
    compTitle: "Comparativa Inteligente de Opciones",
    compSubtitle: "Análisis técnico y financiero para respaldar la mejor decisión.",
    compPrice: "Precio de Venta",
    compTargetPrice: "Precio Negociable",
    compArea: "Superficie Total",
    compPricePerUnit: "Precio por m² / sqft",
    compFloorLevel: "Nivel de Piso",
    compFurnishing: "Estado de Mobiliario",
    compGrowth5y: "Revalorización 5 Años",
    compProjected2030: "Valor Proyectado 2030",
    compSuitability: "Confort Familiar (Madre)",
    
    // Contact Modal
    contactTitle: "Asesoría Privada Directa",
    contactSubtitle: "Consultoría exclusiva para Yulian • Dubai Real Estate Advisory",
    whatsappQuick: "Escribir por WhatsApp",
    callDirect: "Llamada Telefónica Directa",
    
    // Footer
    footerBuiltFor: "Herramienta personalizada exclusivamente para",
    footerCuratedBy: "Curada por tu Asesor Inmobiliario de Confianza en Dubai"
  },
  en: {
    heroWelcome: "welcome to your bespoke portfolio",
    heroDesc: "A unique space where avant-garde architecture meets tailored family and commercial convenience, curated specifically for you and your mother.",
    viewApartments: "View Residential Proposals",
    startingFrom: "From",
    searchProgress: "SEARCH STATUS",
    
    navLiving: "Living (Residential)",
    navCommercial: "Restaurant (Commercial)",
    navTownhouse: "Townhouse (Staff)",
    getConsultation: "Get A Consultation ↗",
    
    tabLiving: "Living Apartment",
    tabLivingSub: "2-3 BHK • Downtown / Business Bay",
    tabCommercial: "Restaurant Space",
    tabCommercialSub: "12k-15k sqft • Open Spaces",
    tabTownhouse: "Townhouse for Rent",
    tabTownhouseSub: "4 BHK • Damac Hills (Staff)",
    
    compareBtn: "Compare Proposals",
    contactAdvisor: "Contact Advisor",
    
    // Cards
    viewFullDetails: "View Full Dossier",
    floor: "Floor",
    beds: "Bedrooms",
    baths: "Bathrooms",
    priceNegotiable: "Negotiable to",
    targetROI: "5-Year Capital Gain",
    targetAnnual: "Projected Annual",
    
    // Section Headers
    livingSectionTitle: "Curated Residences",
    livingSectionDesc: "Prime properties featuring direct Burj Khalifa & Canal vistas, luxury turnkey finishes, and optimal comfort for you and your mother.",
    
    // Status Banners
    statusWorking: "Currently Sourcing the Best Options",
    statusWorkingSub: "Sourcing off-market restaurant opportunities with outdoor terraces and approved food licenses in prime Dubai waterfronts.",
    reqTitle: "Target Requirements",
    locationsTarget: "Target Locations",
    budgetRange: "Target Budget",
    dimensionsRange: "Target Area",
    technicalFeatures: "Key Technical Specifications",
    requestCall: "Notify Me on Match",
    
    // Modal
    gallery: "High-Resolution Photo Gallery",
    propertySpecs: "Architectural Dossier",
    financialAnalysis: "Historical Capital Growth (5-Year) & 2030 Forecast",
    financialDesc: "Asset appreciation trajectory (2021-2026) and future valuation model anchored to the Dubai Urban Master Plan 2040.",
    suitabilityTitle: "Why This Residence Is Perfect for Living with Your Mother",
    upcomingProjectsTitle: "Announced Area Mega-Projects (Value Catalysts)",
    mapTitle: "Geographic Location & Connectivity",
    bookViewing: "Schedule Private Viewing",
    askWhatsapp: "Inquire via WhatsApp",
    backToList: "Back to Proposals",
    
    // Comparison
    compTitle: "Side-by-Side Comparison Matrix",
    compSubtitle: "Technical and financial analysis for confident decision-making.",
    compPrice: "Listing Price",
    compTargetPrice: "Negotiated Target",
    compArea: "Total Area",
    compPricePerUnit: "Price per Unit",
    compFloorLevel: "Floor Level",
    compFurnishing: "Furnishing Status",
    compGrowth5y: "5-Year Capital Growth",
    compProjected2030: "2030 Projected Value",
    compSuitability: "Family Comfort Score",
    
    // Contact Modal
    contactTitle: "Private Advisory",
    contactSubtitle: "Direct consultation for Yulian • Dubai Real Estate Advisory",
    whatsappQuick: "Chat via WhatsApp",
    callDirect: "Direct Phone Call",
    
    // Footer
    footerBuiltFor: "Bespoke portal tailored exclusively for",
    footerCuratedBy: "Curated by your Trusted Dubai Real Estate Advisor"
  }
};

// Conversions
function formatPrice(aedAmount) {
  let finalVal = aedAmount;
  let symbol = "AED ";

  if (state.currency === 'EUR') {
    finalVal = aedAmount * PROPOSALS_DATA.rates.AED_TO_EUR;
    symbol = "€";
    if (finalVal >= 1000000) {
      return `${symbol}${(finalVal / 1000000).toFixed(2)}M`;
    }
    return `${symbol}${Math.round(finalVal).toLocaleString()}`;
  } else if (state.currency === 'USD') {
    finalVal = aedAmount * PROPOSALS_DATA.rates.AED_TO_USD;
    symbol = "$";
    if (finalVal >= 1000000) {
      return `${symbol}${(finalVal / 1000000).toFixed(2)}M`;
    }
    return `${symbol}${Math.round(finalVal).toLocaleString()}`;
  } else {
    if (finalVal >= 1000000) {
      return `${(finalVal / 1000000).toFixed(3).replace(/\.?0+$/, '')}M AED`;
    }
    return `${Math.round(finalVal).toLocaleString()} AED`;
  }
}

function formatArea(sqftAmount) {
  if (state.unit === 'sqm') {
    const sqm = sqftAmount * PROPOSALS_DATA.rates.SQFT_TO_SQM;
    return `${sqm.toFixed(1)} m²`;
  }
  return `${sqftAmount.toLocaleString()} sqft`;
}

function formatPricePerUnit(aedAmount, sqftAmount) {
  if (state.unit === 'sqm') {
    const sqm = sqftAmount * PROPOSALS_DATA.rates.SQFT_TO_SQM;
    if (state.currency === 'EUR') {
      const eur = aedAmount * PROPOSALS_DATA.rates.AED_TO_EUR;
      return `€${Math.round(eur / sqm).toLocaleString()}/m²`;
    } else if (state.currency === 'USD') {
      const usd = aedAmount * PROPOSALS_DATA.rates.AED_TO_USD;
      return `$${Math.round(usd / sqm).toLocaleString()}/m²`;
    }
    return `${Math.round(aedAmount / sqm).toLocaleString()} AED/m²`;
  } else {
    if (state.currency === 'EUR') {
      const eur = aedAmount * PROPOSALS_DATA.rates.AED_TO_EUR;
      return `€${Math.round(eur / sqftAmount).toLocaleString()}/sqft`;
    } else if (state.currency === 'USD') {
      const usd = aedAmount * PROPOSALS_DATA.rates.AED_TO_USD;
      return `$${Math.round(usd / sqftAmount).toLocaleString()}/sqft`;
    }
    return `${Math.round(aedAmount / sqftAmount).toLocaleString()} AED/sqft`;
  }
}

// Navigation & Toggles
function setLanguage(lang) {
  state.lang = lang;
  if (lang === 'es') {
    state.currency = 'EUR';
    state.unit = 'sqm';
  } else {
    state.currency = 'AED';
    state.unit = 'sqft';
  }
  updateUI();
}

function setCurrency(curr) {
  state.currency = curr;
  updateUI();
}

function setUnit(u) {
  state.unit = u;
  updateUI();
}

function setTab(tab) {
  state.activeTab = tab;
  updateUI();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateUI() {
  const t = TRANSLATIONS[state.lang];

  // Header active buttons
  document.getElementById('lang-es-btn').className = state.lang === 'es' ? 'px-2.5 py-0.5 text-xs font-bold rounded-full bg-white text-slate-950 shadow' : 'px-2.5 py-0.5 text-xs font-medium text-slate-400 hover:text-white';
  document.getElementById('lang-en-btn').className = state.lang === 'en' ? 'px-2.5 py-0.5 text-xs font-bold rounded-full bg-white text-slate-950 shadow' : 'px-2.5 py-0.5 text-xs font-medium text-slate-400 hover:text-white';

  ['EUR', 'AED', 'USD'].forEach(c => {
    const el = document.getElementById(`curr-${c.toLowerCase()}-btn`);
    if (el) {
      el.className = state.currency === c ? 'px-2.5 py-0.5 text-xs font-bold rounded-full bg-white text-slate-950 shadow' : 'px-2.5 py-0.5 text-xs font-medium text-slate-400 hover:text-white';
    }
  });

  ['sqm', 'sqft'].forEach(u => {
    const el = document.getElementById(`unit-${u}-btn`);
    if (el) {
      el.className = state.unit === u ? 'px-2 py-0.5 text-xs font-bold rounded-full bg-white text-slate-950 shadow' : 'px-2 py-0.5 text-xs font-medium text-slate-400 hover:text-white';
    }
  });

  // Static translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Navigation Tabs Styling
  const tabLiving = document.getElementById('nav-tab-living');
  const tabCommercial = document.getElementById('nav-tab-commercial');
  const tabTownhouse = document.getElementById('nav-tab-townhouse');

  const activeTabClass = "border-white text-slate-950 bg-white shadow-xl";
  const inactiveTabClass = "border-white/10 text-slate-400 hover:text-white hover:bg-white/5";

  tabLiving.className = `flex-1 py-3 px-5 rounded-full border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between ${state.activeTab === 'living' ? activeTabClass : inactiveTabClass}`;
  tabCommercial.className = `flex-1 py-3 px-5 rounded-full border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between ${state.activeTab === 'commercial' ? activeTabClass : inactiveTabClass}`;
  tabTownhouse.className = `flex-1 py-3 px-5 rounded-full border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between ${state.activeTab === 'townhouse' ? activeTabClass : inactiveTabClass}`;

  // Section visibility
  document.getElementById('section-living').classList.toggle('hidden', state.activeTab !== 'living');
  document.getElementById('section-commercial').classList.toggle('hidden', state.activeTab !== 'commercial');
  document.getElementById('section-townhouse').classList.toggle('hidden', state.activeTab !== 'townhouse');

  if (state.activeTab === 'living') {
    renderPropertyCards();
  } else if (state.activeTab === 'commercial') {
    renderCommercialSection();
  } else if (state.activeTab === 'townhouse') {
    renderTownhouseSection();
  }

  if (state.activeProperty) {
    renderPropertyModalContent(state.activeProperty);
  }
}

// Render Property Cards (Horizon Grove Minimalist Card Standard)
function renderPropertyCards() {
  const container = document.getElementById('properties-grid');
  const t = TRANSLATIONS[state.lang];
  container.innerHTML = '';

  PROPOSALS_DATA.properties.forEach(prop => {
    const formattedPrice = formatPrice(prop.priceAed);
    const formattedArea = formatArea(prop.sqft);
    const pricePerUnit = formatPricePerUnit(prop.priceAed, prop.sqft);
    const targetPrice = prop.targetPriceAed !== prop.priceAed ? formatPrice(prop.targetPriceAed) : null;

    const card = document.createElement('div');
    card.className = "horizon-card overflow-hidden flex flex-col group relative";
    card.innerHTML = `
      <!-- Hero Media Container -->
      <div class="relative h-80 w-full overflow-hidden bg-slate-900 cursor-pointer" onclick="openPropertyModal('${prop.id}')">
        <img src="${prop.heroImage}" alt="${prop.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <!-- Top Badges -->
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span class="badge-clean-gold px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            ${prop.badge}
          </span>
          <span class="badge-clean-white px-3 py-1 rounded-full text-xs font-semibold">
            ${prop.floor}
          </span>
        </div>

        <!-- 5Y Appreciation Pill -->
        <div class="absolute bottom-4 left-4 flex items-center space-x-2">
          <div class="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center">
            <span class="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
            ${prop.appreciationHistory.growth5y} (5A)
          </div>
        </div>

        <!-- Gallery Count Pill -->
        <div class="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-slate-300 text-xs font-medium backdrop-blur-md flex items-center">
          ${prop.gallery.length} fotos
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <!-- Title & Subtitle -->
          <div class="mb-4">
            <h3 class="text-2xl font-display font-extrabold text-white group-hover:text-amber-300 transition-colors tracking-tight cursor-pointer" onclick="openPropertyModal('${prop.id}')">
              ${prop.name}
            </h3>
            <p class="text-xs text-slate-400 flex items-center mt-1">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
              ${prop.subTitle}
            </p>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-3 gap-2.5 py-3.5 my-3 border-y border-white/10 text-center">
            <div class="bg-white/5 p-2.5 rounded-2xl border border-white/5">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block">${t.beds}</span>
              <span class="text-sm font-bold text-white">${prop.beds} BHK</span>
            </div>
            <div class="bg-white/5 p-2.5 rounded-2xl border border-white/5">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block">${t.baths}</span>
              <span class="text-sm font-bold text-white">${prop.baths} Baños</span>
            </div>
            <div class="bg-white/5 p-2.5 rounded-2xl border border-white/5">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block">${t.dimensionsRange}</span>
              <span class="text-sm font-bold text-amber-300">${formattedArea}</span>
            </div>
          </div>

          <!-- Highlight Pro -->
          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-6">
            ${prop.description[state.lang]}
          </p>
        </div>

        <!-- Footer / Price and CTA -->
        <div class="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
          <div>
            <div class="text-xs text-slate-400 font-medium">
              ${targetPrice ? `<span class="text-emerald-400 font-bold">${t.priceNegotiable} ${targetPrice}</span>` : pricePerUnit}
            </div>
            <div class="text-2xl font-black text-white font-display tracking-tight">
              ${formattedPrice}
            </div>
          </div>

          <button onclick="openPropertyModal('${prop.id}')" class="btn-horizon-white !px-4 !py-2.5 text-xs font-bold">
            <span>${t.viewFullDetails}</span>
            <svg class="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Commercial Section
function renderCommercialSection() {
  const comm = PROPOSALS_DATA.commercialSearch;
  const t = TRANSLATIONS[state.lang];
  const container = document.getElementById('commercial-content');

  container.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <!-- Status Notice Card with Restaurant Backdrop -->
      <div class="horizon-card p-8 md:p-12 relative overflow-hidden mb-8 border-white/20" style="background-image: linear-gradient(180deg, rgba(7,9,14,0.7) 0%, rgba(7,9,14,0.95) 100%), url('assets/images/backgrounds/restaurant_bg.jpg'); background-size: cover; background-position: center;">
        
        <div class="flex items-center space-x-3 text-amber-300 mb-4">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-widest">${comm.status[state.lang]}</span>
        </div>

        <h2 class="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
          ${comm.title[state.lang]}
        </h2>
        <p class="text-slate-200 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
          ${t.statusWorkingSub}
        </p>

        <!-- Requirements Summary Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/20">
          <div class="bg-black/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.dimensionsRange}</span>
            <span class="text-xl font-bold text-white font-display">${comm.specs.sizeRange}</span>
          </div>
          <div class="bg-black/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.budgetRange}</span>
            <span class="text-xl font-bold text-white font-display">${comm.specs.budget}</span>
          </div>
          <div class="bg-black/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.locationsTarget}</span>
            <span class="text-sm font-medium text-slate-200">${comm.specs.locations.join(" • ")}</span>
          </div>
        </div>
      </div>

      <!-- Specific Requirements Checklist -->
      <div class="horizon-card p-8 md:p-10 mb-8 border-white/10">
        <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center">
          <span class="w-3 h-3 rounded-full bg-amber-400 mr-3"></span>
          ${t.technicalFeatures}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${comm.specs.requirements[state.lang].map(req => `
            <div class="flex items-start space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span class="text-amber-400 text-lg font-bold">✓</span>
              <span class="text-sm text-slate-200 leading-snug">${req}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Box -->
      <div class="text-center py-6">
        <button onclick="openContactModal('commercial')" class="btn-horizon-white text-sm font-bold shadow-2xl">
          <span>${t.requestCall}</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `;
}

// Render Townhouse Section
function renderTownhouseSection() {
  const th = PROPOSALS_DATA.townhouseSearch;
  const t = TRANSLATIONS[state.lang];
  const container = document.getElementById('townhouse-content');

  container.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <!-- Status Notice Card with Townhouse Backdrop -->
      <div class="horizon-card p-8 md:p-12 relative overflow-hidden mb-8 border-white/20" style="background-image: linear-gradient(180deg, rgba(7,9,14,0.7) 0%, rgba(7,9,14,0.95) 100%), url('assets/images/backgrounds/townhouse_bg.jpg'); background-size: cover; background-position: center;">
        
        <div class="flex items-center space-x-3 text-amber-300 mb-4">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-widest">${th.status[state.lang]}</span>
        </div>

        <h2 class="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
          ${th.title[state.lang]}
        </h2>
        <p class="text-slate-200 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
          ${t.statusWorkingSub}
        </p>

        <!-- Requirements Summary Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/20">
          <div class="bg-black/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.beds}</span>
            <span class="text-xl font-bold text-white font-display">${th.specs.type[state.lang]}</span>
          </div>
          <div class="bg-black/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.budgetRange}</span>
            <span class="text-xl font-bold text-white font-display">${th.specs.budget}</span>
          </div>
          <div class="bg-black/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.locationsTarget}</span>
            <span class="text-sm font-medium text-slate-200">${th.specs.locations.join(" • ")}</span>
          </div>
        </div>
      </div>

      <!-- Specific Requirements Checklist -->
      <div class="horizon-card p-8 md:p-10 mb-8 border-white/10">
        <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center">
          <span class="w-3 h-3 rounded-full bg-amber-400 mr-3"></span>
          ${t.technicalFeatures}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${th.specs.requirements[state.lang].map(req => `
            <div class="flex items-start space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span class="text-amber-400 text-lg font-bold">✓</span>
              <span class="text-sm text-slate-200 leading-snug">${req}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Box -->
      <div class="text-center py-6">
        <button onclick="openContactModal('townhouse')" class="btn-horizon-white text-sm font-bold shadow-2xl">
          <span>${t.requestCall}</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `;
}

// Property Full Dossier Modal
function openPropertyModal(propId) {
  const prop = PROPOSALS_DATA.properties.find(p => p.id === propId);
  if (!prop) return;

  state.activeProperty = prop;
  state.activeGalleryIndex = 0;

  const modal = document.getElementById('property-modal');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  renderPropertyModalContent(prop);
}

function closePropertyModal() {
  const modal = document.getElementById('property-modal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  state.activeProperty = null;

  if (state.activeMap) {
    state.activeMap.remove();
    state.activeMap = null;
  }
  if (state.activeChart) {
    state.activeChart.destroy();
    state.activeChart = null;
  }
}

function renderPropertyModalContent(prop) {
  const t = TRANSLATIONS[state.lang];
  const container = document.getElementById('modal-content-body');
  const formattedPrice = formatPrice(prop.priceAed);
  const formattedArea = formatArea(prop.sqft);
  const pricePerUnit = formatPricePerUnit(prop.priceAed, prop.sqft);
  const targetPrice = prop.targetPriceAed !== prop.priceAed ? formatPrice(prop.targetPriceAed) : null;

  container.innerHTML = `
    <!-- Top Header Navigation -->
    <div class="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <button onclick="closePropertyModal()" class="flex items-center space-x-2 text-xs uppercase tracking-wider text-slate-300 hover:text-white font-bold transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        <span>${t.backToList}</span>
      </button>

      <div class="flex items-center space-x-3">
        <button onclick="openComparisonModal()" class="btn-horizon-glass px-4 py-2 text-xs font-bold">
          <span>${t.compareBtn}</span>
        </button>

        <button onclick="sendPropertyInquiry('${prop.id}')" class="btn-horizon-white px-5 py-2 text-xs font-bold">
          <span>WhatsApp Inquire ↗</span>
        </button>
      </div>
    </div>

    <!-- Modal Interior Content -->
    <div class="p-6 md:p-12 space-y-12 max-w-6xl mx-auto">
      
      <!-- Title & Price Block -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div class="flex items-center space-x-3 mb-3">
            <span class="badge-clean-gold px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">${prop.badge}</span>
            <span class="badge-clean-white px-3 py-1 rounded-full text-xs font-semibold">${prop.developer}</span>
            <span class="badge-clean-white px-3 py-1 rounded-full text-xs font-semibold">${prop.floor}</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight">
            ${prop.name}
          </h1>
          <p class="text-sm text-slate-400 mt-2 flex items-center">
            <span class="w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
            ${prop.location.name}
          </p>
        </div>

        <div class="text-left md:text-right bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
          <div class="text-xs text-slate-400 font-medium mb-1">
            ${targetPrice ? `<span class="text-emerald-400 font-bold">${t.priceNegotiable} ${targetPrice}</span> • ` : ''}${pricePerUnit}
          </div>
          <div class="text-3xl md:text-5xl font-display font-black text-white">
            ${formattedPrice}
          </div>
        </div>
      </div>

      <!-- Main Photo Gallery Slider -->
      <div>
        <div class="relative w-full h-96 md:h-[550px] rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
          <img id="modal-gallery-main" src="${prop.gallery[state.activeGalleryIndex]}" alt="${prop.name}" class="w-full h-full object-cover transition-opacity duration-300" />
          
          <button onclick="prevGalleryImage()" class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onclick="nextGalleryImage()" class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div class="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-slate-950/90 border border-white/20 text-xs font-bold text-white">
            <span id="gallery-counter">1</span> / ${prop.gallery.length}
          </div>
        </div>

        <!-- Thumbnail Strip -->
        <div class="flex space-x-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
          ${prop.gallery.map((img, idx) => `
            <button onclick="setGalleryImage(${idx})" class="flex-shrink-0 w-24 h-16 rounded-2xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-white scale-105' : 'border-transparent opacity-50 hover:opacity-100'}" id="thumb-${idx}">
              <img src="${img}" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Quick Specs Matrix -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="horizon-card p-5">
          <span class="text-xs text-slate-400 uppercase tracking-wider block">${t.beds}</span>
          <span class="text-2xl font-bold font-display text-white mt-1 block">${prop.beds} BHK</span>
        </div>
        <div class="horizon-card p-5">
          <span class="text-xs text-slate-400 uppercase tracking-wider block">${t.baths}</span>
          <span class="text-2xl font-bold font-display text-white mt-1 block">${prop.baths} Baños</span>
        </div>
        <div class="horizon-card p-5">
          <span class="text-xs text-slate-400 uppercase tracking-wider block">${t.dimensionsRange}</span>
          <span class="text-2xl font-bold font-display text-amber-300 mt-1 block">${formattedArea}</span>
        </div>
        <div class="horizon-card p-5">
          <span class="text-xs text-slate-400 uppercase tracking-wider block">${t.compFurnishing}</span>
          <span class="text-sm font-semibold text-slate-200 mt-2 block truncate">${prop.furnishing[state.lang]}</span>
        </div>
      </div>

      <!-- Description & Why Ideal for Living with Mother -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-6">
          <div class="horizon-card p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-4">${t.propertySpecs}</h3>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              ${prop.description[state.lang]}
            </p>
            
            <div class="mt-8 pt-6 border-t border-white/10">
              <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">Ventajas Competitivas</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${prop.pros[state.lang].map(p => `
                  <div class="flex items-center space-x-2 text-xs text-slate-200">
                    <span class="text-emerald-400 font-bold">✓</span>
                    <span>${p}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Suitability for Mother -->
          <div class="horizon-card p-8 border-amber-500/30">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-display font-bold text-white flex items-center">
                <span class="w-3 h-3 rounded-full bg-amber-400 mr-3"></span>
                ${t.suitabilityTitle}
              </h3>
              <span class="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
                Calificación: ${prop.familySuitability.score}
              </span>
            </div>
            
            <div class="space-y-3">
              ${prop.familySuitability.reasons[state.lang].map(r => `
                <div class="flex items-start space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span class="text-amber-400 text-base">★</span>
                  <span class="text-xs md:text-sm text-slate-300 leading-relaxed">${r}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Upcoming Projects in the Area -->
        <div class="space-y-6">
          <div class="horizon-card p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-2">${t.upcomingProjectsTitle}</h3>
            <p class="text-xs text-slate-400 mb-6">Desarrollos de infraestructura que impulsarán la plusvalía:</p>
            
            <div class="space-y-3">
              ${prop.upcomingProjects[state.lang].map(proj => `
                <div class="bg-black/60 p-4 rounded-2xl border border-white/10">
                  <div class="flex justify-between items-start mb-1">
                    <span class="text-xs font-bold text-white">${proj.name}</span>
                    <span class="text-[10px] text-amber-300 font-bold px-2 py-0.5 bg-amber-500/20 rounded">${proj.date}</span>
                  </div>
                  <span class="text-xs font-semibold text-emerald-400 flex items-center mt-2">
                    Impacto: ${proj.impact}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quick Action Card -->
          <div class="horizon-card p-8 text-center border-white/20">
            <h4 class="text-lg font-display font-bold text-white mb-2">¿Deseas visitar esta opción?</h4>
            <p class="text-xs text-slate-400 mb-6">Coordinamos visita presencial o video tour guiado exclusivo.</p>
            
            <button onclick="sendPropertyInquiry('${prop.id}')" class="btn-horizon-white w-full py-3.5 text-xs font-bold mb-3">
              <span>${t.bookViewing}</span>
            </button>
            <button onclick="openComparisonModal()" class="btn-horizon-glass w-full py-3 text-xs font-bold">
              <span>${t.compareBtn}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Financial Chart & Appreciation -->
      <div class="horizon-card p-8 md:p-10">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 class="text-2xl md:text-3xl font-display font-extrabold text-white">${t.financialAnalysis}</h3>
            <p class="text-xs text-slate-400 mt-1">${t.financialDesc}</p>
          </div>
          <div class="flex items-center space-x-3">
            <div class="bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-300">
              5Y Growth: ${prop.appreciationHistory.growth5y}
            </div>
            <div class="bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-amber-300">
              CAGR: ${prop.appreciationHistory.projectedCagr}
            </div>
          </div>
        </div>

        <div class="w-full h-80">
          <canvas id="property-appreciation-chart"></canvas>
        </div>
      </div>

      <!-- Interactive Map -->
      <div class="horizon-card p-8 md:p-10">
        <div class="mb-6">
          <h3 class="text-2xl md:text-3xl font-display font-extrabold text-white">${t.mapTitle}</h3>
          <p class="text-xs text-slate-400 mt-1">${prop.location.highlights[state.lang]}</p>
        </div>
        
        <div id="property-map" class="w-full h-80 md:h-96 rounded-3xl border border-white/10 z-10"></div>
      </div>

    </div>
  `;

  setTimeout(() => {
    initPropertyMap(prop);
    initPropertyChart(prop);
  }, 100);
}

// Gallery Navigation
function setGalleryImage(index) {
  if (!state.activeProperty) return;
  state.activeGalleryIndex = index;
  const main = document.getElementById('modal-gallery-main');
  const counter = document.getElementById('gallery-counter');
  if (main) main.src = state.activeProperty.gallery[index];
  if (counter) counter.innerText = index + 1;

  state.activeProperty.gallery.forEach((_, i) => {
    const th = document.getElementById(`thumb-${i}`);
    if (th) {
      th.className = `flex-shrink-0 w-24 h-16 rounded-2xl overflow-hidden border-2 transition-all ${i === index ? 'border-white scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`;
    }
  });
}

function nextGalleryImage() {
  if (!state.activeProperty) return;
  let next = state.activeGalleryIndex + 1;
  if (next >= state.activeProperty.gallery.length) next = 0;
  setGalleryImage(next);
}

function prevGalleryImage() {
  if (!state.activeProperty) return;
  let prev = state.activeGalleryIndex - 1;
  if (prev < 0) prev = state.activeProperty.gallery.length - 1;
  setGalleryImage(prev);
}

// Interactive Map with Leaflet
function initPropertyMap(prop) {
  if (state.activeMap) {
    state.activeMap.remove();
    state.activeMap = null;
  }

  const mapContainer = document.getElementById('property-map');
  if (!mapContainer) return;

  const coords = prop.location.coords;
  const map = L.map('property-map', {
    center: coords,
    zoom: 15,
    zoomControl: true,
    attributionControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  const goldIcon = L.divIcon({
    className: 'custom-gold-marker',
    html: `
      <div style="background: #ffffff; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px rgba(255,255,255,0.8); border: 2px solid #07090e;">
        <svg style="width: 18px; height: 18px; color: #07090e;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34]
  });

  L.marker(coords, { icon: goldIcon })
    .addTo(map)
    .bindPopup(`
      <div style="padding: 6px;">
        <div style="font-weight: 800; font-size: 14px; color: #ffffff; font-family: 'Syne', sans-serif;">${prop.name}</div>
        <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">${prop.location.name}</div>
        <div style="font-weight: 700; font-size: 13px; color: #f59e0b; margin-top: 4px;">${formatPrice(prop.priceAed)}</div>
      </div>
    `)
    .openPopup();

  state.activeMap = map;
}

// Appreciation Chart with Chart.js
function initPropertyChart(prop) {
  if (state.activeChart) {
    state.activeChart.destroy();
    state.activeChart = null;
  }

  const canvas = document.getElementById('property-appreciation-chart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

  const convertedValues = prop.appreciationHistory.valuesAed.map(v => {
    const rawAed = v * 1000000;
    if (state.currency === 'EUR') return (rawAed * PROPOSALS_DATA.rates.AED_TO_EUR) / 1000000;
    if (state.currency === 'USD') return (rawAed * PROPOSALS_DATA.rates.AED_TO_USD) / 1000000;
    return v;
  });

  const currSymbol = state.currency === 'EUR' ? '€' : (state.currency === 'USD' ? '$' : 'AED ');

  state.activeChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: prop.appreciationHistory.labels,
      datasets: [{
        label: `Valor Estimado (${currSymbol} Millones)`,
        data: convertedValues,
        borderColor: '#ffffff',
        backgroundColor: gradient,
        borderWidth: 3,
        pointBackgroundColor: '#d4af37',
        pointBorderColor: '#07090e',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#07090e',
          titleColor: '#d4af37',
          bodyColor: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return ` ${context.parsed.y.toFixed(2)}M ${currSymbol}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: {
            color: '#94a3b8',
            font: { size: 11 },
            callback: function(val) {
              return `${val.toFixed(1)}M`;
            }
          }
        }
      }
    }
  });
}

// Comparison Matrix Modal
function openComparisonModal() {
  const modal = document.getElementById('comparison-modal');
  modal.classList.remove('hidden');
  renderComparisonTable();
}

function closeComparisonModal() {
  const modal = document.getElementById('comparison-modal');
  modal.classList.add('hidden');
}

function renderComparisonTable() {
  const t = TRANSLATIONS[state.lang];
  const container = document.getElementById('comparison-table-container');

  container.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs md:text-sm">
        <thead>
          <tr class="border-b border-white/10">
            <th class="p-4 text-slate-400 font-semibold uppercase tracking-wider text-xs">Métrica</th>
            ${PROPOSALS_DATA.properties.map(p => `
              <th class="p-4 text-white font-bold text-lg font-display min-w-[220px]">
                <div class="text-amber-300 text-xs font-sans uppercase mb-1">${p.badge}</div>
                ${p.name}
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compPrice}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 font-bold text-white font-display text-xl">
                ${formatPrice(p.priceAed)}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compTargetPrice}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 font-semibold text-emerald-400">
                ${formatPrice(p.targetPriceAed)}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compArea}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-slate-200 font-semibold">
                ${formatArea(p.sqft)}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compPricePerUnit}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-slate-300">
                ${formatPricePerUnit(p.priceAed, p.sqft)}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.beds} / ${t.baths}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-slate-200">
                ${p.beds} BHK / ${p.baths} Baños
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compFloorLevel}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-slate-200 font-semibold">
                ${p.floor}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compFurnishing}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-slate-300 text-xs">
                ${p.furnishing[state.lang]}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compGrowth5y}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-emerald-400 font-bold">
                ${p.appreciationHistory.growth5y}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compSuitability}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 text-amber-300 font-semibold">
                ★ ${p.familySuitability.score}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="p-4 text-slate-400 font-medium">Acción</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4">
                <button onclick="closeComparisonModal(); openPropertyModal('${p.id}')" class="btn-horizon-white !px-4 !py-1.5 text-xs font-bold">
                  Ver Ficha
                </button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Contact Modal & Inquiries
function openContactModal(context = 'general') {
  const modal = document.getElementById('contact-modal');
  modal.classList.remove('hidden');
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  modal.classList.add('hidden');
}

function sendPropertyInquiry(propId) {
  const prop = PROPOSALS_DATA.properties.find(p => p.id === propId);
  const msg = state.lang === 'es' 
    ? `Hola David, soy Yulian. He revisado la propuesta de ${prop ? prop.name : 'propiedades'} en la web y me gustaría coordinar una visita y revisar detalles de compra.`
    : `Hello David, this is Yulian. I reviewed the proposal for ${prop ? prop.name : 'Dubai properties'} on the website and would like to schedule a private viewing.`;
  
  const whatsappUrl = `https://wa.me/971500000000?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
}

function sendGeneralInquiry() {
  const msg = state.lang === 'es'
    ? `Hola David, soy Yulian. Quisiera consultar sobre las propuestas residenciales, comerciales y chalets en Dubai.`
    : `Hello David, this is Yulian. I would like to discuss the residential, commercial and townhouse proposals in Dubai.`;
  
  const whatsappUrl = `https://wa.me/971500000000?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  updateUI();
});
