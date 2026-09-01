// Data for Yulian's Luxury Real Estate Proposals in Dubai
const PROPOSALS_DATA = {
  client: {
    name: "Yulian",
    livingPreference: "2-3 BHK en Downtown, Business Bay o Dubai Marina (Vivir con Madre)",
    budgetLiving: "2.0M - 3.4M AED",
    commercialPreference: "Espacio para Restaurante (12,000 - 15,000 sqft)",
    budgetCommercial: "3.0M - 3.8M AED",
    townhousePreference: "Townhouse 4 BHK para Empleados en Damac Hills o similar"
  },
  rates: {
    AED_TO_EUR: 0.25,
    AED_TO_USD: 0.272,
    SQFT_TO_SQM: 0.092903
  },
  properties: [
    {
      id: "forte-tower-1",
      name: "Forte - Tower 1",
      subTitle: "Emaar Downtown Dubai • Opera District",
      badge: "Brand New & Upgraded",
      featured: true,
      priceAed: 3400000,
      targetPriceAed: 3400000,
      sqft: 1007,
      sqm: 93.55,
      beds: 2,
      baths: 2,
      floor: "Mid-High Floor",
      furnishing: {
        es: "Totalmente Amueblado y Mejorado (Upgraded)",
        en: "Fully Furnished & Brand New Upgraded"
      },
      developer: "Emaar Properties",
      location: {
        name: "Downtown Dubai - Opera District",
        coords: [25.1965, 55.2720],
        highlights: {
          es: "Vistas directas y despejadas al skyline de Sheikh Zayed Road. Ubicado a 2 min a pie de Dubai Opera y a pasos de Dubai Mall.",
          en: "Unobstructed Sheikh Zayed Road skyline vistas. Situated 2 min walk from Dubai Opera and steps to Dubai Mall."
        }
      },
      heroImage: "assets/images/forte/forte_01.jpg",
      gallery: [
        "assets/images/forte/forte_01.jpg",
        "assets/images/forte/forte_02.jpg",
        "assets/images/forte/forte_04.jpg",
        "assets/images/forte/forte_03.jpg"
      ],
      description: {
        es: "Espectacular unidad de 2 habitaciones en Forte Tower 1 de Emaar. Propiedad a estrenar, completamente amueblada y con mejoras de diseño interior de lujo ('Upgraded'). Destaca su isla de cocina en mármol blanco veteado, luminarias de diseño, elegante salón con vistas despejadas al skyline de Sheikh Zayed Road y acabados de categoría superior.",
        en: "Spectacular brand-new 2-bedroom residence in Emaar's Forte Tower 1. Completely vacant, fully furnished, and interior-upgraded to the highest standards. Features a stunning waterfall marble kitchen island, bespoke lighting, spacious living area with Sheikh Zayed Road skyline views, and premium finishes throughout."
      },
      familySuitability: {
        score: "9.9/10",
        reasons: {
          es: [
            "Entrega vacante y 100% amueblada con acabados mejorados de diseño: Mudanza inmediata sin obras ni compras pendientes.",
            "Acceso directo a bulevares peatonales planos y seguros en el Opera District, perfecto para pasear con tu madre con total comodidad.",
            "Torre residencial Emaar de primer nivel con conserjería 24/7, piscinas de lujo y máxima insonorización y tranquilidad."
          ],
          en: [
            "Vacant & 100% turnkey furnished with upgraded designer finishes: Instant move-in with zero renovation hassle.",
            "Direct pedestrian access to safe, flat Opera District boulevards, ideal for relaxing walks with your mother.",
            "Top-tier Emaar tower featuring 24/7 concierge, luxury pools, and premier acoustic privacy."
          ]
        }
      },
      appreciationHistory: {
        labels: ["2021", "2022", "2023", "2024", "2025", "2026 (Actual)", "2028 (Est.)", "2030 (Est.)"],
        valuesAed: [2.05, 2.35, 2.70, 3.05, 3.25, 3.40, 4.10, 4.85],
        growth5y: "+65.8%",
        projectedCagr: "9.3% Anual"
      },
      pros: {
        es: [
          "A estrenar y con reformas/upgrades de diseño de alta gama",
          "100% Amueblado listo para entrar a vivir de inmediato",
          "Vistas abiertas al skyline de Sheikh Zayed Road",
          "Ubicación privilegiada Emaar en pleno Opera District"
        ],
        en: [
          "Brand new with premium custom interior design upgrades",
          "100% Fully furnished and ready for immediate occupation",
          "Open skyline views over Sheikh Zayed Road",
          "Prime Emaar location in the heart of the Opera District"
        ]
      },
      upcomingProjects: {
        es: [
          { name: "Expansión Dubai Mall Boulevard ($400M+)", date: "2026-2027", impact: "+8-12% Valor de Zona" },
          { name: "Línea Azul de Metro (Estación Directa Downtown)", date: "2028-2029", impact: "+15% Plusvalía y Demanda" },
          { name: "Paseo Cultural Opera District fase 2", date: "2027", impact: "+10% Plusvalía Peatonal" }
        ],
        en: [
          { name: "Dubai Mall Boulevard Expansion ($400M+)", date: "2026-2027", impact: "+8-12% Area Value" },
          { name: "Dubai Metro Blue Line Direct Connection", date: "2028-2029", impact: "+15% Rental Demand" },
          { name: "Opera District Cultural Boardwalk Phase 2", date: "2027", impact: "+10% Pedestrian Premium" }
        ]
      }
    },
    {
      id: "act-one-act-two",
      name: "Act One | Act Two Tower",
      subTitle: "Emaar Downtown Dubai • Opera District",
      badge: "Downtown Prime",
      featured: false,
      priceAed: 3270000,
      targetPriceAed: 3250000,
      sqft: 1214,
      sqm: 112.78,
      beds: 2,
      baths: 3,
      floor: "29th Floor",
      furnishing: {
        es: "Sin Amueblar (Lienzo en Blanco)",
        en: "Unfurnished (Custom Design)"
      },
      developer: "Emaar Properties",
      location: {
        name: "Downtown Dubai - Opera District",
        coords: [25.1950, 55.2745],
        highlights: {
          es: "A 3 min a pie de Dubai Opera, 6 min de Dubai Mall y Burj Khalifa. Zona residencial tranquila y peatonal exclusiva.",
          en: "3 min walk to Dubai Opera, 6 min to Dubai Mall & Burj Khalifa. Serene pedestrian-friendly luxury district."
        }
      },
      heroImage: "assets/images/act_one/act_one_exterior_1788199789902.jpg",
      gallery: [
        "assets/images/act_one/act_one_exterior_1788199789902.jpg",
        "assets/images/act_one/act_one_interior_1788199830241.jpg",
        "assets/images/act_one/act_one_bed_1788199872366.jpg"
      ],
      description: {
        es: "Apartamento exclusivo de 2 habitaciones en el piso 29 de la prestigiosa torre Act Two de Emaar. Ubicado en el corazón del Opera District en Downtown Dubai, ofrece impresionantes vistas panorámicas al Burj Khalifa y al skyline. Diseñado con acabados contemporáneos de primer nivel, techos altos y distribución óptima que garantiza máxima privacidad y confort para vivir con tu madre.",
        en: "Exclusive 2-bedroom residence on the 29th floor of Emaar's coveted Act Two tower. Situated in the heart of Downtown's Opera District, featuring panoramic vistas of the Burj Khalifa and skyline. Unfurnished layout allowing bespoke custom interior design tailored for comfortable family living."
      },
      familySuitability: {
        score: "9.8/10",
        reasons: {
          es: [
            "Acceso directo a bulevares peatonales seguros y planos, ideal para paseos con tu madre sin cruces de tráfico pesado.",
            "Cercanía inmediata a centros médicos de élite (Mediclinic Dubai Mall a 5 min).",
            "Edificio de alta gama con conserjería 24/7, ascensores de alta velocidad y ambiente residencial sereno.",
          ],
          en: [
            "Direct access to safe, flat pedestrian boulevards ideal for peaceful walks with your mother.",
            "Immediate proximity to premier healthcare (Mediclinic Dubai Mall 5 min away).",
            "Ultra-luxury building with 24/7 concierge, whisper-quiet high-speed elevators, and quiet residential ambiance."
          ]
        }
      },
      appreciationHistory: {
        labels: ["2021", "2022", "2023", "2024", "2025", "2026 (Actual)", "2028 (Est.)", "2030 (Est.)"],
        valuesAed: [1.94, 2.20, 2.55, 2.89, 3.10, 3.27, 3.95, 4.65],
        growth5y: "+68.5%",
        projectedCagr: "9.1% Anual"
      },
      pros: {
        es: [
          "Calidad de construcción y plusvalía garantizada por Emaar",
          "Vistas directas y despejadas al Burj Khalifa",
          "Piso alto (29) con excelente ventilación y luz natural",
          "Precio negociable a 3.25M AED dentro de tu presupuesto"
        ],
        en: [
          "Signature Emaar construction quality and capital preservation",
          "Direct panoramic Burj Khalifa and Opera views",
          "High 29th floor with supreme natural lighting and ventilation",
          "Negotiable to 3.25M AED well within budget"
        ]
      },
      upcomingProjects: {
        es: [
          { name: "Expansión Dubai Mall Boulevard ($400M+)", date: "2026-2027", impact: "+8-12% Valor de Zona" },
          { name: "Línea Azul de Metro (Conexión Directa Downtown)", date: "2028-2029", impact: "+15% Demanda de Alquiler" },
          { name: "Paseo Cultural Opera District fase 2", date: "2027", impact: "+10% Plusvalía Peatonal" }
        ],
        en: [
          { name: "Dubai Mall Boulevard Expansion ($400M+)", date: "2026-2027", impact: "+8-12% Area Value" },
          { name: "Dubai Metro Blue Line Direct Connection", date: "2028-2029", impact: "+15% Rental Demand" },
          { name: "Opera District Cultural Boardwalk Phase 2", date: "2027", impact: "+10% Pedestrian Premium" }
        ]
      }
    },
    {
      id: "reva-residences",
      name: "Reva Residences",
      subTitle: "DAMAC Business Bay • Canal & Burj View",
      badge: "Burj Khalifa View",
      featured: false,
      priceAed: 3700000,
      targetPriceAed: 3700000,
      sqft: 914.39,
      sqm: 84.95,
      beds: 2,
      baths: 2,
      floor: "21st Floor",
      furnishing: {
        es: "Completamente Amueblado (Listo para Entrar)",
        en: "Fully Furnished (Turnkey Ready)"
      },
      developer: "DAMAC Properties",
      location: {
        name: "Business Bay - Canal Promenade",
        coords: [25.1865, 55.2798],
        highlights: {
          es: "Frente al canal de Business Bay, con vistas directas al Burj Khalifa y a las áreas de piscinas resort del complejo.",
          en: "Frontline Business Bay canal location, featuring direct Burj Khalifa views and luxury resort-style pool decks."
        }
      },
      heroImage: "assets/images/reva/reva_page_01.jpg",
      gallery: [
        "assets/images/reva/reva_page_01.jpg",
        "assets/images/reva/reva_page_02.jpg",
        "assets/images/reva/reva_page_03.jpg",
        "assets/images/reva/reva_page_05.jpg",
        "assets/images/reva/reva_page_07.jpg",
        "assets/images/reva/reva_page_08.jpg",
        "assets/images/reva/reva_page_12.jpg",
        "assets/images/reva/reva_page_14.jpg",
        "assets/images/reva/reva_page_15.jpg",
        "assets/images/reva/reva_page_16.jpg",
        "assets/images/reva/reva_page_17.jpg",
        "assets/images/reva/reva_page_22.jpg",
        "assets/images/reva/reva_page_23.jpg",
        "assets/images/reva/reva_page_26.jpg"
      ],
      description: {
        es: "Espectacular apartamento de 2 habitaciones en el piso 21 de Reva Residences en Business Bay. Totalmente equipado y amueblado con estilo moderno. Destaca su amplia terraza con césped sintético y vista frontal despejada al Burj Khalifa, cocina americana de concepto abierto con barra desayunadora, 2 baños modernos y acceso a espectaculares piscinas estilo resort.",
        en: "Turnkey 2-bedroom residence on the 21st floor of Reva Residences, Business Bay. Completely furnished with chic modern decor. Highlights include an expansive balcony with artificial turf facing Burj Khalifa, open-plan kitchen with breakfast bar, two sleek bathrooms, and resort swimming pool deck."
      },
      familySuitability: {
        score: "9.4/10",
        reasons: {
          es: [
            "Entrega 100% amueblada y equipada: Mudanza inmediata sin estrés de reformas ni compras de muebles.",
            "Terraza espaciosa y protegida para disfrutar de atardeceres y aire fresco en familia.",
            "Acceso llano a la bahía y canal de Business Bay con cafeterías y farmacias en la planta baja."
          ],
          en: [
            "100% Turnkey and furnished: Immediate move-in without the hassle of renovation or furniture shopping.",
            "Spacious private terrace with panoramic skyline views to relax with family.",
            "Direct ground-level access to Business Bay canal walk, cafes, and supermarkets."
          ]
        }
      },
      appreciationHistory: {
        labels: ["2021", "2022", "2023", "2024", "2025", "2026 (Actual)", "2028 (Est.)", "2030 (Est.)"],
        valuesAed: [2.12, 2.45, 2.85, 3.25, 3.52, 3.70, 4.38, 5.10],
        growth5y: "+74.5%",
        projectedCagr: "8.3% Anual"
      },
      pros: {
        es: [
          "100% Amueblado con electrodomésticos y acabados de primera",
          "Terraza con vista frontal icónica al Burj Khalifa",
          "Excelente rentabilidad histórica y liquidez inmediata",
          "Piscinas de lujo y gimnasio de última generación"
        ],
        en: [
          "100% Fully furnished with premium appliances and designer finishes",
          "Terrace with direct iconic Burj Khalifa backdrop",
          "Exceptional historical capital appreciation and liquidity",
          "Luxury swimming pools and state-of-the-art wellness club"
        ]
      },
      upcomingProjects: {
        es: [
          { name: "Paseo Marítimo Marasi Bay Yacht Club", date: "2026-2027", impact: "+12% Valor Inmobiliario" },
          { name: "Extensión del Corredor Verde Business Bay", date: "2027", impact: "+8% Calidad de Vida" },
          { name: "Puente Peatonal Climatizado Canal Link", date: "2028", impact: "+10% Conectividad Metro" }
        ],
        en: [
          { name: "Marasi Bay Yacht Club & Marina Promenade", date: "2026-2027", impact: "+12% Property Value" },
          { name: "Business Bay Green Corridor Extension", date: "2027", impact: "+8% Livability Score" },
          { name: "Climate-Controlled Canal Footbridge", date: "2028", impact: "+10% Metro Connectivity" }
        ]
      }
    },
    {
      id: "aykon-city-tower-b",
      name: "Aykon City Tower B",
      subTitle: "DAMAC Maison • Sheikh Zayed Rd & Canal",
      badge: "Best Value / 53rd Floor",
      featured: false,
      priceAed: 1800000,
      targetPriceAed: 1800000,
      sqft: 1121,
      sqm: 104.14,
      beds: 2,
      baths: 2.5,
      floor: "53rd Floor",
      furnishing: {
        es: "Amueblado de Lujo DAMAC Maison",
        en: "Luxury DAMAC Maison Furnished"
      },
      developer: "DAMAC Properties",
      location: {
        name: "Business Bay / Sheikh Zayed Road",
        coords: [25.1832, 55.2580],
        highlights: {
          es: "Ubicación estratégica sobre Sheikh Zayed Road y el Canal de Dubai, frente a Safa Park y a 5 min de Downtown.",
          en: "Strategic gateway on Sheikh Zayed Road overlooking Dubai Water Canal and Safa Park, 5 mins from Downtown."
        }
      },
      heroImage: "assets/images/aykon/aykon_page_03.jpg",
      gallery: [
        "assets/images/aykon/aykon_page_03.jpg",
        "assets/images/aykon/aykon_page_01.jpg",
        "assets/images/aykon/aykon_page_02.jpg",
        "assets/images/aykon/aykon_page_04.jpg",
        "assets/images/aykon/aykon_page_05.jpg",
        "assets/images/aykon/aykon_page_06.jpg",
        "assets/images/aykon/aykon_page_07.jpg",
        "assets/images/aykon/aykon_page_08.jpg",
        "assets/images/aykon/aykon_page_09.jpg",
        "assets/images/aykon/aykon_page_11.jpg",
        "assets/images/aykon/aykon_page_12.jpg",
        "assets/images/aykon/aykon_page_14.jpg",
        "assets/images/aykon/aykon_page_15.jpg",
        "assets/images/aykon/aykon_page_16.jpg",
        "assets/images/aykon/aykon_page_17.jpg",
        "assets/images/aykon/aykon_page_18.jpg",
        "assets/images/aykon/aykon_page_19.jpg",
        "assets/images/aykon/aykon_page_20.jpg"
      ],
      description: {
        es: "Oportunidad extraordinaria en el piso 53 de Aykon City Tower B. Apartamento de 2 habitaciones totalmente amueblado bajo los estándares de hotel de 5 estrellas de DAMAC Maison. Ofrece vistas panorámicas infinitas al Canal de Dubai y al Golfo Pérsico, master suite con baño de mármol y bañera, segunda habitación twin, cocina moderna con acabados en granito y servicio de valet.",
        en: "Exceptional investment and living opportunity on the 53rd floor of Aykon City Tower B. A 2-bedroom residence fully furnished under DAMAC Maison 5-star hotel specifications. Enjoy infinite horizon views of the Dubai Canal and Arabian Gulf, master suite with marble soaking bath, and full hotel services."
      },
      familySuitability: {
        score: "9.6/10",
        reasons: {
          es: [
            "Servicios de conserjería y estilo de vida hotelero 5 estrellas: Limpieza y mantenimiento asistido disponible para mayor tranquilidad de tu madre.",
            "Vistas relajantes hacia el agua del canal y el horizonte del mar desde una altura privilegiada.",
            "Precio sumamente competitivo (1.8M AED) dejando un amplio margen de liquidez para tu negocio gastronómico."
          ],
          en: [
            "5-Star hotel-grade concierge and maintenance services for complete peace of mind for your mother.",
            "Soothing panoramic water and horizon views from a prestigious 53rd floor elevation.",
            "Unbeatable price point (1.8M AED) freeing up substantial capital for your restaurant venture."
          ]
        }
      },
      appreciationHistory: {
        labels: ["2021", "2022", "2023", "2024", "2025", "2026 (Actual)", "2028 (Est.)", "2030 (Est.)"],
        valuesAed: [1.14, 1.28, 1.45, 1.62, 1.72, 1.80, 2.25, 2.75],
        growth5y: "+57.9%",
        projectedCagr: "11.2% Anual"
      },
      pros: {
        es: [
          "La mejor relación precio/m² del mercado de lujo (1,605 AED/sqft)",
          "Piso 53 con vistas infinitas al Canal y al mar",
          "Estándar hotelero DAMAC Maison con piscinas y spa",
          "Deja +1.4M AED de liquidez dentro de tu presupuesto inicial"
        ],
        en: [
          "Best luxury price-per-sqft in central Dubai (1,605 AED/sqft)",
          "Sky-high 53rd floor with unobstructed Canal & Gulf vistas",
          "DAMAC Maison hotel amenities including spa & infinity pools",
          "Preserves +1.4M AED capital within your living budget"
        ]
      },
      upcomingProjects: {
        es: [
          { name: "Safa Two by de GRISOGONO & Puente Flotante", date: "2026-2027", impact: "+15% Prestigio del Sector" },
          { name: "Aykon Plaza Centro Gastronómico & Wellness", date: "2027", impact: "+10% Valor Agregado" },
          { name: "Estación de Ferry y Taxis Acuáticos Canal", date: "2027", impact: "+8% Transporte y Confort" }
        ],
        en: [
          { name: "Safa Two by de GRISOGONO Suspended Bridge", date: "2026-2027", impact: "+15% District Prestige" },
          { name: "Aykon Plaza Dining & Wellness Hub", date: "2027", impact: "+10% Amenity Value" },
          { name: "Dubai Canal Marine Ferry & Water Taxi Terminal", date: "2027", impact: "+8% Water Mobility" }
        ]
      }
    }
  ],
  commercialSearch: {
    title: {
      es: "Espacio Comercial para Restaurante",
      en: "Commercial Restaurant Space"
    },
    status: {
      es: "Actualmente Trabajando en Encontrarte las mejores Opciones",
      en: "Currently Sourcing the Best Options"
    },
    specs: {
      type: { es: "Local Comercial / Restaurante con Terrazas", en: "Commercial Restaurant with Outdoor Spaces" },
      locations: ["Dubai Marina", "Business Bay", "Palm Jumeirah", "Downtown Dubai"],
      sizeRange: "12,000 - 15,000 sqft (1,115 - 1,393 m²)",
      budget: "3.0M - 3.8M AED",
      requirements: {
        es: [
          "Espacios abiertos y terraza exterior para comensales",
          "Acometida de gas, alta potencia eléctrica y trampa de grasa aprobada por Dubai Municipality",
          "Alto tráfico peatonal y visibilidad de marca de primer nivel",
          "Facilidad de aparcamiento y servicio de valet para clientes"
        ],
        en: [
          "Open-air dining layout with outdoor terrace capacity",
          "Approved kitchen extraction, high electrical load & grease trap infrastructure",
          "Prime footfall traffic and brand visibility in luxury hot-spots",
          "Valet parking provision and guest access logistics"
        ]
      }
    }
  },
  restaurantGuide: {
    title: {
      es: "Información Estratégica para tu Restaurante en Dubai",
      en: "Strategic Restaurant Guide & Supply Chain in Dubai"
    },
    subtitle: {
      es: "Logística, Almacén (Warehouse), Licencias de Distribución y Cadena de Abastecimiento",
      en: "Logistics, Warehousing Strategy, Distribution Licensing & Verified Supply Chain"
    },
    warehouseStrategy: {
      title: {
        es: "1. Estrategia de Almacenamiento: ¿Tener Warehouse Propio o No?",
        en: "1. Warehousing Strategy: Private Warehouse vs. Local Supplier"
      },
      comparison: {
        withWarehouse: {
          title: { es: "Con Warehouse (Almacén Propio)", en: "With Dedicated Warehouse" },
          points: {
            es: [
              "Permite importar grandes volúmenes directamente desde origen (España / Europa) vía marítima/aérea.",
              "Requiere inversión de capital elevada (arrendamiento de nave industrial climatizada + cámaras de frío).",
              "<strong>Requisito Legal Crítico:</strong> Para poder importar y almacenar a gran escala necesitas una <strong>Licencia de Distribuidor / Importador de Alimentos</strong> ante Dubai Municipality. Sin esta licencia NO es legal operar distribución."
            ],
            en: [
              "Enables bulk container imports directly from Spain/Europe via sea/air freight.",
              "Requires significant upfront capital (cold storage lease, fit-out, logistics staff).",
              "<strong>Critical Legal Requirement:</strong> Bulk importation requires an official <strong>Food Distribution & General Trading License</strong> approved by Dubai Municipality."
            ]
          }
        },
        withoutWarehouse: {
          title: { es: "Sin Warehouse (Operación con Proveedor Local Recomendada)", en: "Without Warehouse (Recommended Lean Start)" },
          points: {
            es: [
              "<strong>Recomendación Estratégica:</strong> Para la fase de lanzamiento, se aconseja <strong>empezar operando directamente con proveedores e importadores ya establecidos</strong>.",
              "Cero riesgo de sobre-stock, mermas o costos fijos de almacenamiento en frío.",
              "Suministro bajo demanda justo a tiempo (Just-In-Time) directo a las cocinas de tu restaurante.",
              "Mayor agilidad y enfoque 100% en la apertura, carta y experiencia del comensal."
            ],
            en: [
              "<strong>Strategic Recommendation:</strong> For the opening phase, start by <strong>sourcing directly from established licensed importers/distributors</strong>.",
              "Zero inventory spoilage risk, cold-storage overhead, or licensing liabilities.",
              "Just-In-Time deliveries directly to your restaurant kitchen according to daily demand.",
              "Allows full managerial focus on brand launch, kitchen operations, and guest experience."
            ]
          }
        }
      }
    },
    operationalAdvice: {
      title: {
        es: "2. Consejo Operativo: Selección de Productos & Negociación por Volumen",
        en: "2. Operational Workflow: Product Sourcing & Volume Pricing"
      },
      steps: {
        es: [
          {
            step: "Paso 01",
            title: "Auditoría de Catálogo",
            desc: "Accede al catálogo digital de la empresa importadora y preselecciona los productos e ingredientes clave que definirán la propuesta gastronómica de tu menú."
          },
          {
            step: "Paso 02",
            title: "Cotización por Volumen",
            desc: "Consulta directamente con el contacto de la importadora para cotizar los productos seleccionados y obtener las mejores escalas de precio por volumen y frecuencia."
          },
          {
            step: "Paso 03",
            title: "Elección del Mejor Distribuidor",
            desc: "La importadora te derivará con el distribuidor oficial idóneo según la ubicación de tu local (Downtown/Marina/Business Bay) para garantizar entregas óptimas."
          }
        ],
        en: [
          {
            step: "Step 01",
            title: "Catalog Audit",
            desc: "Review the digital product catalog of the importing hub and curate signature items defining your restaurant menu."
          },
          {
            step: "Step 02",
            title: "Volume Quotation",
            desc: "Inquire with the import representative to obtain tier-one pricing based on estimated weekly/monthly consumption volumes."
          },
          {
            step: "Step 03",
            title: "Distributor Pairing",
            desc: "The importer pairs your restaurant with their best-fit local logistics distributor for streamlined delivery routing."
          }
        ]
      }
    },
    supplierContact: {
      title: {
        es: "3. Contacto Estratégico: Empresa Importadora & Proveedor Clave",
        en: "3. Strategic Supply Partner: Key Importer & Wholesaler"
      },
      companyName: "Spain Gulf Food",
      companyDesc: {
        es: "Empresa importadora líder que abastece directamente a los principales distribuidores y restaurantes de alta cocina en Dubai y Emiratos Árabes.",
        en: "Premier food import hub supplying top-tier hospitality distributors and gourmet dining destinations across Dubai and the UAE."
      },
      agentName: "Noora",
      agentRole: { es: "Agente de Cuentas & Alianzas Estratégicas", en: "Key Account & Strategic Partnerships Agent" },
      phoneRaw: "+971585871408",
      phoneFormatted: "+971 58 587 1408",
      websiteUrl: "https://www.spaingulfood.com/",
      websiteDisplay: "www.spaingulfood.com"
    }
  },
  spanishRestaurantsDubai: [
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
  ],
  townhouseSearch: {
    title: {
      es: "Chalet para Rentar (Personal y Empleados)",
      en: "Townhouse for Rent (Staff Accommodation)"
    },
    status: {
      es: "Actualmente Trabajando en Encontrarte las mejores Opciones",
      en: "Currently Sourcing the Best Options"
    },
    specs: {
      type: { es: "Townhouse / Chalet 4 Habitaciones (4BHK)", en: "4-Bedroom Townhouse (4BHK)" },
      locations: ["DAMAC Hills", "DAMAC Hills 2", "Town Square", "Dubai Hills Estate"],
      budget: "Precio de Mercado / Market Rental Price",
      requirements: {
        es: [
          "4 habitaciones amplias con baño y armarios empotrados",
          "Ubicación en comunidad cerrada con seguridad 24/7 y áreas verdes",
          "Fácil conexión a vías principales para transporte de empleados hacia el restaurante",
          "Supermercados y servicios de primera necesidad dentro de la comunidad"
        ],
        en: [
          "4 Spacious bedrooms with built-in wardrobes and bathrooms",
          "Gated master community with 24/7 security and lush parks",
          "Fast arterial road connectivity for staff shuttle to restaurant",
          "Internal community supermarkets, retail and sports courts"
        ]
      }
    }
  }
};
