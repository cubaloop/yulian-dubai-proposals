import React, { useState, useMemo } from 'react';
import { SPANISH_RESTAURANTS_DUBAI, SpanishRestaurantBenchmark } from '../data/spanishRestaurantsDubai';

export const SpanishRestaurantsBenchmarkTable: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Casual / Taberna', 'Premium / Fine Dining', 'Lifestyle / Beach Club'];

  const filteredData = useMemo(() => {
    return SPANISH_RESTAURANTS_DUBAI.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.concept.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-slate-900 text-slate-100 rounded-2xl shadow-xl border border-slate-800 space-y-6">
      {/* Header & Strategic Context */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-amber-400 tracking-tight">
            Benchmark de Restaurantes Españoles en Dubái
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Análisis de mercado y competidores clave para la planificación del nuevo concepto.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
            6 Principales Actores Mapeados
          </span>
        </div>
      </div>

      {/* Insight Summary Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/50">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Rango Ticket Promedio</div>
          <div className="text-lg font-bold text-white mt-1">120 – 500+ AED / persona</div>
          <div className="text-xs text-slate-400 mt-1">Casual (120-200) vs. Luxury/Beach (300-500+)</div>
        </div>
        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/50">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Ubicación Estratégica</div>
          <div className="text-lg font-bold text-white mt-1">100% en Hoteles / Zonas Libres</div>
          <div className="text-xs text-slate-400 mt-1">Clave para licencia de alcohol y productos de cerdo</div>
        </div>
        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/50">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Oportunidad Detectada</div>
          <div className="text-lg font-bold text-amber-300 mt-1">Conceptos Regionales Únicos</div>
          <div className="text-xs text-slate-400 mt-1">Asadores a la leña, sidrerías o barras de pintxos</div>
        </div>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Buscar por nombre, zona o concepto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-64 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
        />
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-800/80 text-slate-200 uppercase tracking-wider text-[11px] border-b border-slate-700">
            <tr>
              <th className="py-3 px-4">Restaurante</th>
              <th className="py-3 px-4">Ubicación</th>
              <th className="py-3 px-4">Concepto & Categoría</th>
              <th className="py-3 px-4 text-center">Ticket Est.</th>
              <th className="py-3 px-4 text-center">Licencia Alcohol</th>
              <th className="py-3 px-4 min-w-[240px]">Factores Diferenciadores</th>
              <th className="py-3 px-4 text-center">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-4 px-4 font-semibold text-white whitespace-nowrap">
                  {item.name}
                </td>
                <td className="py-4 px-4 text-slate-300">
                  {item.location}
                </td>
                <td className="py-4 px-4">
                  <div className="font-medium text-slate-200">{item.concept}</div>
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                    {item.category}
                  </span>
                </td>
                <td className="py-4 px-4 text-center font-bold text-amber-400 whitespace-nowrap">
                  {item.avgTicketAed.label}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="px-2 py-1 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {item.alcoholLicense ? 'Sí (Hotel/Freezone)' : 'No'}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-400">
                    {item.differentiators.map((diff, index) => (
                      <li key={index}>{diff}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-4 text-center whitespace-nowrap">
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] transition-all"
                  >
                    Ver Web &rarr;
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpanishRestaurantsBenchmarkTable;
