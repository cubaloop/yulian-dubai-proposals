// Application State & Controller for Yulian's Proposal
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
    heroTag: "PORTAFOLIO EXCLUSIVO • DUBAI 2026",
    heroTitle: "Propuestas Personalizadas para",
    heroSubtitle: "Selección curada de residencias de lujo, oportunidades comerciales y chalets residenciales según tus requerimientos exactos.",
    
    tabLiving: "Apartamento para Vivir",
    tabLivingSub: "2-3 BHK • Downtown / Business Bay",
    tabCommercial: "Espacio Comercial (Restaurante)",
    tabCommercialSub: "12k-15k sqft • Áreas Abiertas",
    tabTownhouse: "Chalet para Rentar",
    tabTownhouseSub: "4 BHK • Damac Hills (Personal)",
    
    currencyLabel: "Moneda",
    unitLabel: "Medidas",
    compareBtn: "Comparar Opciones",
    contactAdvisor: "Contactar Asesor",
    
    // Cards
    viewFullDetails: "Ver Información Completa",
    floor: "Piso",
    beds: "Habitaciones",
    baths: "Baños",
    priceNegotiable: "Negociable a",
    targetROI: "Revalorización 5 Años",
    targetAnnual: "Proyección Anual",
    
    // Section Headers
    livingSectionTitle: "Opciones Residenciales Seleccionadas",
    livingSectionDesc: "Propiedades de alta gama con vistas icónicas, acabados premium y máxima idoneidad para vivir cómodamente con tu madre.",
    
    // Status Banners
    statusWorking: "Actualmente Trabajando en Encontrarte las mejores Opciones",
    statusWorkingSub: "Analizando disponibilidades exclusivas off-market y ubicaciones estratégicas con terrazas aprobadas.",
    reqTitle: "Requerimientos Establecidos",
    locationsTarget: "Zonas en Búsqueda",
    budgetRange: "Presupuesto",
    dimensionsRange: "Superficie",
    technicalFeatures: "Especificaciones Técnicas Clave",
    requestCall: "Avisarme al Encontrar Opciones",
    
    // Modal
    gallery: "Galería de Fotos",
    propertySpecs: "Ficha Técnica",
    financialAnalysis: "Plusvalía Histórica y Proyección a Futuro",
    financialDesc: "Crecimiento de capital en los últimos 5 años (2021-2026) y proyección a 2030 basada en el plan maestro de Dubai.",
    suitabilityTitle: "Por Qué es Ideal para Vivir con tu Madre",
    upcomingProjectsTitle: "Proyectos Anunciados en la Zona (Impulsores de Valor)",
    mapTitle: "Ubicación en el Mapa y Conectividad",
    bookViewing: "Agendar Visita Privada",
    askWhatsapp: "Consultar por WhatsApp",
    backToList: "Volver a las Opciones",
    
    // Comparison
    compTitle: "Comparativa Inteligente de Opciones",
    compSubtitle: "Análisis lado a lado para tomar la mejor decisión de inversión y estilo de vida.",
    compPrice: "Precio Actual",
    compTargetPrice: "Precio Negociado",
    compArea: "Superficie",
    compPricePerUnit: "Precio por Unidad",
    compFloorLevel: "Nivel de Piso",
    compFurnishing: "Equipamiento",
    compGrowth5y: "Crecimiento 5 Años",
    compProjected2030: "Valor Proyectado 2030",
    compSuitability: "Confort Familiar",
    
    // Contact Modal
    contactTitle: "Contacto Directo con tu Asesor Inmobiliario",
    contactSubtitle: "Asesoría privada para Yulian • Dubai Real Estate Advisory",
    whatsappQuick: "Escribir por WhatsApp",
    callDirect: "Llamada Directa",
    schedulePrivateTour: "Solicitar Visita Presencial / Video Tour",
    
    // Footer
    footerBuiltFor: "Herramienta personalizada exclusivamente para",
    footerCuratedBy: "Curada por tu Asesor Inmobiliario de Confianza en Dubai",
    footerRights: "Todos los derechos reservados. Información verificada en el mercado de Dubai 2026."
  },
  en: {
    heroTag: "EXCLUSIVE PORTFOLIO • DUBAI 2026",
    heroTitle: "Bespoke Proposals for",
    heroSubtitle: "Curated luxury residences, prime restaurant commercial spaces, and residential townhouses tailored to your exact criteria.",
    
    tabLiving: "Living Apartment",
    tabLivingSub: "2-3 BHK • Downtown / Business Bay",
    tabCommercial: "Commercial (Restaurant)",
    tabCommercialSub: "12k-15k sqft • Open Spaces",
    tabTownhouse: "Townhouse for Rent",
    tabTownhouseSub: "4 BHK • Damac Hills (Staff)",
    
    currencyLabel: "Currency",
    unitLabel: "Units",
    compareBtn: "Compare Options",
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
    livingSectionTitle: "Curated Residential Proposals",
    livingSectionDesc: "High-end residences with iconic views, premium finishes, and maximum living comfort for you and your mother.",
    
    // Status Banners
    statusWorking: "Currently Sourcing the Best Options",
    statusWorkingSub: "Sourcing exclusive off-market listings and prime licensed restaurant units with outdoor terraces.",
    reqTitle: "Target Requirements",
    locationsTarget: "Target Locations",
    budgetRange: "Budget",
    dimensionsRange: "Dimensions",
    technicalFeatures: "Key Technical Specifications",
    requestCall: "Notify Me on Match",
    
    // Modal
    gallery: "Photo Gallery",
    propertySpecs: "Property Specifications",
    financialAnalysis: "Historical Capital Growth & Projections",
    financialDesc: "5-Year historical asset appreciation (2021-2026) and 2030 forecast anchored to Dubai Urban Master Plan.",
    suitabilityTitle: "Why This Is Perfect for Living with Your Mother",
    upcomingProjectsTitle: "Announced Area Mega-Projects (Value Drivers)",
    mapTitle: "Location & Strategic Connectivity",
    bookViewing: "Schedule Private Viewing",
    askWhatsapp: "Inquire via WhatsApp",
    backToList: "Back to Proposals",
    
    // Comparison
    compTitle: "Property Comparison Matrix",
    compSubtitle: "Side-by-side analysis for confident decision-making.",
    compPrice: "Current Price",
    compTargetPrice: "Negotiated Target",
    compArea: "Total Area",
    compPricePerUnit: "Price per Unit",
    compFloorLevel: "Floor Level",
    compFurnishing: "Furnishing Status",
    compGrowth5y: "5-Year Capital Growth",
    compProjected2030: "2030 Forecast",
    compSuitability: "Family Comfort",
    
    // Contact Modal
    contactTitle: "Direct Advisory Contact",
    contactSubtitle: "Private Consultation for Yulian • Dubai Real Estate Advisory",
    whatsappQuick: "Chat via WhatsApp",
    callDirect: "Direct Phone Call",
    schedulePrivateTour: "Request Private Tour / Video Walkthrough",
    
    // Footer
    footerBuiltFor: "Bespoke portal tailored exclusively for",
    footerCuratedBy: "Curated by your Trusted Dubai Real Estate Advisor",
    footerRights: "All rights reserved. Market verified Dubai 2026."
  }
};

// Currency & Unit Converters
function formatPrice(aedAmount) {
  let finalVal = aedAmount;
  let symbol = "AED ";
  let suffix = "";

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
    // AED
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

// Language Switcher
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

// Render Functions
function updateUI() {
  const t = TRANSLATIONS[state.lang];

  // Header and controls
  document.getElementById('lang-es-btn').className = state.lang === 'es' ? 'px-3 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'px-3 py-1 text-xs font-medium text-slate-400 hover:text-white';
  document.getElementById('lang-en-btn').className = state.lang === 'en' ? 'px-3 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'px-3 py-1 text-xs font-medium text-slate-400 hover:text-white';

  // Currency buttons
  ['EUR', 'AED', 'USD'].forEach(c => {
    const el = document.getElementById(`curr-${c.toLowerCase()}-btn`);
    if (el) {
      el.className = state.currency === c ? 'px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 shadow-sm' : 'px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white';
    }
  });

  // Unit buttons
  ['sqm', 'sqft'].forEach(u => {
    const el = document.getElementById(`unit-${u}-btn`);
    if (el) {
      el.className = state.unit === u ? 'px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 shadow-sm' : 'px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white';
    }
  });

  // Static translated texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Navigation Tabs
  const tabLiving = document.getElementById('nav-tab-living');
  const tabCommercial = document.getElementById('nav-tab-commercial');
  const tabTownhouse = document.getElementById('nav-tab-townhouse');

  const activeTabClass = "border-amber-400 text-amber-300 bg-amber-500/10 shadow-lg shadow-amber-500/5";
  const inactiveTabClass = "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40";

  tabLiving.className = `flex-1 py-3 px-4 text-center rounded-2xl border transition-all duration-300 ${state.activeTab === 'living' ? activeTabClass : inactiveTabClass}`;
  tabCommercial.className = `flex-1 py-3 px-4 text-center rounded-2xl border transition-all duration-300 ${state.activeTab === 'commercial' ? activeTabClass : inactiveTabClass}`;
  tabTownhouse.className = `flex-1 py-3 px-4 text-center rounded-2xl border transition-all duration-300 ${state.activeTab === 'townhouse' ? activeTabClass : inactiveTabClass}`;

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

  // If modal is open, re-render modal content with new currency/units/language
  if (state.activeProperty) {
    renderPropertyModalContent(state.activeProperty);
  }
}

// Render Property Cards (Living)
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
    card.className = "card-luxury rounded-3xl overflow-hidden flex flex-col group relative";
    card.innerHTML = `
      <!-- Hero Media Container -->
      <div class="relative h-72 w-full overflow-hidden bg-slate-900 cursor-pointer" onclick="openPropertyModal('${prop.id}')">
        <img src="${prop.heroImage}" alt="${prop.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <!-- Top Badges -->
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span class="badge-gold px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            ${prop.badge}
          </span>
          <span class="badge-outline px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-slate-950/60 text-slate-300">
            ${prop.floor}
          </span>
        </div>

        <!-- 5Y Appreciation Pill -->
        <div class="absolute bottom-4 left-4 flex items-center space-x-2">
          <div class="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold backdrop-blur-md flex items-center">
            <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            ${prop.appreciationHistory.growth5y} (5A)
          </div>
        </div>

        <!-- Gallery Count Pill -->
        <div class="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-slate-950/70 border border-white/10 text-slate-300 text-xs font-medium backdrop-blur-md flex items-center">
          <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          ${prop.gallery.length} fotos
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <!-- Title & Subtitle -->
          <div class="flex justify-between items-start mb-2">
            <div>
              <h3 class="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors font-serif-luxury text-2xl tracking-wide cursor-pointer" onclick="openPropertyModal('${prop.id}')">
                ${prop.name}
              </h3>
              <p class="text-xs text-slate-400 flex items-center mt-1">
                <svg class="w-3.5 h-3.5 text-amber-400 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                ${prop.subTitle}
              </p>
            </div>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-3 gap-2 py-3 my-3 border-y border-white/5 text-center">
            <div class="bg-slate-900/50 p-2 rounded-xl border border-white/5">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block">${t.beds}</span>
              <span class="text-sm font-bold text-slate-200">${prop.beds} BHK</span>
            </div>
            <div class="bg-slate-900/50 p-2 rounded-xl border border-white/5">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block">${t.baths}</span>
              <span class="text-sm font-bold text-slate-200">${prop.baths}</span>
            </div>
            <div class="bg-slate-900/50 p-2 rounded-xl border border-white/5">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block">${t.unitLabel}</span>
              <span class="text-sm font-bold text-amber-300">${formattedArea}</span>
            </div>
          </div>

          <!-- Highlight Pro -->
          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
            ${prop.description[state.lang]}
          </p>
        </div>

        <!-- Footer / Price and CTA -->
        <div class="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <div>
            <div class="text-xs text-slate-400">
              ${targetPrice ? `<span class="text-emerald-400 font-semibold">${t.priceNegotiable} ${targetPrice}</span>` : pricePerUnit}
            </div>
            <div class="text-2xl font-black text-slate-100 font-serif-luxury tracking-tight text-gold-gradient">
              ${formattedPrice}
            </div>
          </div>

          <button onclick="openPropertyModal('${prop.id}')" class="btn-gold px-4 py-2.5 text-xs font-bold flex items-center">
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
    <div class="max-w-4xl mx-auto">
      <!-- Status Notice Card -->
      <div class="card-luxury rounded-3xl p-8 border-amber-500/30 relative overflow-hidden mb-8">
        <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="flex items-center space-x-3 text-amber-400 mb-3">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-widest">${comm.status[state.lang]}</span>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold font-serif-luxury text-slate-100 mb-4">
          ${comm.title[state.lang]}
        </h2>
        <p class="text-slate-300 text-sm leading-relaxed mb-6 max-w-2xl">
          ${t.statusWorkingSub}
        </p>

        <!-- Requirements Summary Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <div class="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.dimensionsRange}</span>
            <span class="text-lg font-bold text-slate-100">${comm.specs.sizeRange}</span>
          </div>
          <div class="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.budgetRange}</span>
            <span class="text-lg font-bold text-slate-100">${comm.specs.budget}</span>
          </div>
          <div class="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.locationsTarget}</span>
            <span class="text-sm font-medium text-slate-200">${comm.specs.locations.join(", ")}</span>
          </div>
        </div>
      </div>

      <!-- Specific Requirements Checklist -->
      <div class="card-luxury rounded-3xl p-8 mb-8">
        <h3 class="text-xl font-bold text-slate-100 font-serif-luxury mb-4 flex items-center">
          <svg class="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          ${t.technicalFeatures}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${comm.specs.requirements[state.lang].map(req => `
            <div class="flex items-start space-x-3 bg-slate-900/40 p-3.5 rounded-2xl border border-white/5">
              <span class="text-amber-400 text-lg">✓</span>
              <span class="text-sm text-slate-300 leading-snug">${req}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Box -->
      <div class="text-center py-6">
        <button onclick="openContactModal('commercial')" class="btn-gold px-8 py-3.5 text-sm font-bold shadow-xl inline-flex items-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span>${t.requestCall}</span>
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
    <div class="max-w-4xl mx-auto">
      <!-- Status Notice Card -->
      <div class="card-luxury rounded-3xl p-8 border-amber-500/30 relative overflow-hidden mb-8">
        <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="flex items-center space-x-3 text-amber-400 mb-3">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-widest">${th.status[state.lang]}</span>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold font-serif-luxury text-slate-100 mb-4">
          ${th.title[state.lang]}
        </h2>
        <p class="text-slate-300 text-sm leading-relaxed mb-6 max-w-2xl">
          ${t.statusWorkingSub}
        </p>

        <!-- Requirements Summary Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <div class="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.beds}</span>
            <span class="text-lg font-bold text-slate-100">${th.specs.type[state.lang]}</span>
          </div>
          <div class="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.budgetRange}</span>
            <span class="text-lg font-bold text-slate-100">${th.specs.budget}</span>
          </div>
          <div class="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">${t.locationsTarget}</span>
            <span class="text-sm font-medium text-slate-200">${th.specs.locations.join(", ")}</span>
          </div>
        </div>
      </div>

      <!-- Specific Requirements Checklist -->
      <div class="card-luxury rounded-3xl p-8 mb-8">
        <h3 class="text-xl font-bold text-slate-100 font-serif-luxury mb-4 flex items-center">
          <svg class="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          ${t.technicalFeatures}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${th.specs.requirements[state.lang].map(req => `
            <div class="flex items-start space-x-3 bg-slate-900/40 p-3.5 rounded-2xl border border-white/5">
              <span class="text-amber-400 text-lg">✓</span>
              <span class="text-sm text-slate-300 leading-snug">${req}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Box -->
      <div class="text-center py-6">
        <button onclick="openContactModal('townhouse')" class="btn-gold px-8 py-3.5 text-sm font-bold shadow-xl inline-flex items-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span>${t.requestCall}</span>
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
    <div class="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <button onclick="closePropertyModal()" class="flex items-center space-x-2 text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        <span>${t.backToList}</span>
      </button>

      <div class="flex items-center space-x-3">
        <button onclick="openComparisonModal()" class="btn-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center">
          <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          <span>${t.compareBtn}</span>
        </button>

        <button onclick="sendPropertyInquiry('${prop.id}')" class="btn-gold px-4 py-1.5 text-xs font-bold flex items-center">
          <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span>WhatsApp</span>
        </button>
      </div>
    </div>

    <!-- Modal Interior Content -->
    <div class="p-6 md:p-10 space-y-10 max-w-6xl mx-auto">
      
      <!-- Title & Price Block -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div class="flex items-center space-x-3 mb-2">
            <span class="badge-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">${prop.badge}</span>
            <span class="badge-outline px-3 py-1 rounded-full text-xs font-medium text-slate-300">${prop.developer}</span>
            <span class="badge-outline px-3 py-1 rounded-full text-xs font-medium text-slate-300">${prop.floor}</span>
          </div>
          <h1 class="text-3xl md:text-5xl font-black font-serif-luxury text-slate-100 tracking-tight">
            ${prop.name}
          </h1>
          <p class="text-sm md:text-base text-slate-400 mt-1 flex items-center">
            <svg class="w-4 h-4 text-amber-400 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
            ${prop.location.name}
          </p>
        </div>

        <div class="text-left md:text-right bg-slate-900/60 p-4 rounded-2xl border border-white/10">
          <div class="text-xs text-slate-400">
            ${targetPrice ? `<span class="text-emerald-400 font-bold">${t.priceNegotiable} ${targetPrice}</span> • ` : ''}${pricePerUnit}
          </div>
          <div class="text-3xl md:text-4xl font-black text-gold-gradient font-serif-luxury">
            ${formattedPrice}
          </div>
        </div>
      </div>

      <!-- Main Photo Gallery Slider -->
      <div>
        <div class="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
          <img id="modal-gallery-main" src="${prop.gallery[state.activeGalleryIndex]}" alt="${prop.name}" class="w-full h-full object-cover transition-opacity duration-300" />
          
          <button onclick="prevGalleryImage()" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onclick="nextGalleryImage()" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div class="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 border border-white/20 text-xs font-semibold text-slate-200">
            <span id="gallery-counter">1</span> / ${prop.gallery.length}
          </div>
        </div>

        <!-- Thumbnail Strip -->
        <div class="flex space-x-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
          ${prop.gallery.map((img, idx) => `
            <button onclick="setGalleryImage(${idx})" class="flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}" id="thumb-${idx}">
              <img src="${img}" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Quick Specs Matrix -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="card-luxury p-4 rounded-2xl">
          <span class="text-xs text-slate-400 block">${t.beds}</span>
          <span class="text-xl font-bold text-slate-100">${prop.beds} BHK</span>
        </div>
        <div class="card-luxury p-4 rounded-2xl">
          <span class="text-xs text-slate-400 block">${t.baths}</span>
          <span class="text-xl font-bold text-slate-100">${prop.baths}</span>
        </div>
        <div class="card-luxury p-4 rounded-2xl">
          <span class="text-xs text-slate-400 block">${t.unitLabel}</span>
          <span class="text-xl font-bold text-amber-300">${formattedArea}</span>
        </div>
        <div class="card-luxury p-4 rounded-2xl">
          <span class="text-xs text-slate-400 block">${t.compFurnishing}</span>
          <span class="text-sm font-semibold text-slate-200 truncate block">${prop.furnishing[state.lang]}</span>
        </div>
      </div>

      <!-- Description & Why Ideal for Living with Mother -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-6">
          <div class="card-luxury p-6 rounded-3xl">
            <h3 class="text-2xl font-bold font-serif-luxury text-slate-100 mb-3">${t.propertySpecs}</h3>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              ${prop.description[state.lang]}
            </p>
            
            <div class="mt-6 pt-6 border-t border-white/5">
              <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Puntos Clave Destacados</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${prop.pros[state.lang].map(p => `
                  <div class="flex items-center space-x-2 text-xs text-slate-200">
                    <span class="text-emerald-400">✓</span>
                    <span>${p}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Suitability for Mother -->
          <div class="card-luxury p-6 rounded-3xl border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold font-serif-luxury text-slate-100 flex items-center">
                <svg class="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                ${t.suitabilityTitle}
              </h3>
              <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                Calificación: ${prop.familySuitability.score}
              </span>
            </div>
            
            <div class="space-y-3">
              ${prop.familySuitability.reasons[state.lang].map(r => `
                <div class="flex items-start space-x-3 bg-slate-900/60 p-3.5 rounded-2xl border border-white/5">
                  <span class="text-amber-400 text-base">★</span>
                  <span class="text-xs md:text-sm text-slate-300 leading-relaxed">${r}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Upcoming Projects in the Area -->
        <div class="space-y-6">
          <div class="card-luxury p-6 rounded-3xl">
            <h3 class="text-xl font-bold font-serif-luxury text-slate-100 mb-2">${t.upcomingProjectsTitle}</h3>
            <p class="text-xs text-slate-400 mb-4">Mega-proyectos de infraestructura que incrementarán la demanda y plusvalía:</p>
            
            <div class="space-y-3">
              ${prop.upcomingProjects[state.lang].map(proj => `
                <div class="bg-slate-900/80 p-3.5 rounded-2xl border border-white/5">
                  <div class="flex justify-between items-start mb-1">
                    <span class="text-xs font-bold text-slate-200">${proj.name}</span>
                    <span class="text-[10px] text-amber-400 font-semibold px-2 py-0.5 bg-amber-500/10 rounded">${proj.date}</span>
                  </div>
                  <span class="text-xs font-semibold text-emerald-400 flex items-center">
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    Impacto: ${proj.impact}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quick Action Card -->
          <div class="card-luxury p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-center border-amber-500/30">
            <h4 class="text-base font-bold text-slate-100 mb-2">¿Te interesa visitar esta opción?</h4>
            <p class="text-xs text-slate-400 mb-4">Coordinamos visita presencial o video tour guiado exclusivo para ti.</p>
            
            <button onclick="sendPropertyInquiry('${prop.id}')" class="btn-gold w-full py-3 text-xs font-bold mb-2 flex items-center justify-center">
              <span>${t.bookViewing}</span>
            </button>
            <button onclick="openComparisonModal()" class="btn-secondary w-full py-2.5 text-xs font-semibold rounded-full">
              <span>${t.compareBtn}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Financial Chart & Appreciation -->
      <div class="card-luxury p-6 md:p-8 rounded-3xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-2xl font-bold font-serif-luxury text-slate-100">${t.financialAnalysis}</h3>
            <p class="text-xs text-slate-400 mt-1">${t.financialDesc}</p>
          </div>
          <div class="flex items-center space-x-3">
            <div class="bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-300">
              5Y Growth: ${prop.appreciationHistory.growth5y}
            </div>
            <div class="bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300">
              CAGR: ${prop.appreciationHistory.projectedCagr}
            </div>
          </div>
        </div>

        <div class="w-full h-72 md:h-80">
          <canvas id="property-appreciation-chart"></canvas>
        </div>
      </div>

      <!-- Interactive Map -->
      <div class="card-luxury p-6 md:p-8 rounded-3xl">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h3 class="text-2xl font-bold font-serif-luxury text-slate-100">${t.mapTitle}</h3>
            <p class="text-xs text-slate-400 mt-0.5">${prop.location.highlights[state.lang]}</p>
          </div>
        </div>
        
        <div id="property-map" class="w-full h-80 md:h-96 rounded-2xl border border-white/10 z-10"></div>
      </div>

    </div>
  `;

  // Init Gallery Listeners & Map & Chart
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
      th.className = `flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all ${i === index ? 'border-amber-400 scale-105 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`;
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

  // Dark styled tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  // Custom Gold Marker
  const goldIcon = L.divIcon({
    className: 'custom-gold-marker',
    html: `
      <div style="background: linear-gradient(135deg, #d4af37, #aa820a); width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(212,175,55,0.7); border: 2px solid white;">
        <svg style="width: 18px; height: 18px; color: #000;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34]
  });

  L.marker(coords, { icon: goldIcon })
    .addTo(map)
    .bindPopup(`
      <div style="padding: 6px;">
        <div style="font-weight: 800; font-size: 14px; color: #d4af37;">${prop.name}</div>
        <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">${prop.location.name}</div>
        <div style="font-weight: 700; font-size: 13px; color: #f8fafc; margin-top: 4px;">${formatPrice(prop.priceAed)}</div>
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
  gradient.addColorStop(0, 'rgba(212, 175, 55, 0.4)');
  gradient.addColorStop(1, 'rgba(212, 175, 55, 0.0)');

  // Convert AED values according to active currency
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
        borderColor: '#d4af37',
        backgroundColor: gradient,
        borderWidth: 3,
        pointBackgroundColor: '#f3e5ab',
        pointBorderColor: '#090d14',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#d4af37',
          bodyColor: '#f1f5f9',
          borderColor: 'rgba(212, 175, 55, 0.3)',
          borderWidth: 1,
          padding: 10,
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
            <th class="p-4 text-slate-400 font-semibold uppercase tracking-wider text-xs">Parámetro</th>
            ${PROPOSALS_DATA.properties.map(p => `
              <th class="p-4 text-slate-100 font-bold text-base font-serif-luxury min-w-[220px]">
                <div class="text-amber-300 text-xs font-sans tracking-normal uppercase">${p.badge}</div>
                ${p.name}
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-slate-400 font-medium">${t.compPrice}</td>
            ${PROPOSALS_DATA.properties.map(p => `
              <td class="p-4 font-bold text-amber-300 font-serif-luxury text-lg">
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
                <button onclick="closeComparisonModal(); openPropertyModal('${p.id}')" class="btn-gold px-3 py-1.5 text-xs font-bold rounded-full">
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

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  updateUI();
});
