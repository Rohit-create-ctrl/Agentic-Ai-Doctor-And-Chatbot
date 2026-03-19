'use client';

import { useState, useMemo } from 'react';
import { 
  Search, Pill, AlertTriangle, Info, Shield, 
  CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Filter, Sparkles
} from 'lucide-react';
import { medicineDatabase, searchMedicines } from '@/lib/data';
import { Medicine } from '@/lib/types';

const categories = [
  'All',
  'Analgesic',
  'NSAID',
  'Antihistamine',
  'Antibiotic',
  'Antacid',
  'Proton Pump Inhibitor',
  'Cough Suppressant',
  'Antidiarrheal',
  'Rehydration'
];

export default function MedicinePage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedMed, setExpandedMed] = useState<string | null>(null);
  const [showOtcOnly, setShowOtcOnly] = useState(false);

  const filteredMedicines = useMemo(() => {
    let results: Medicine[];
    
    if (query.trim()) {
      results = searchMedicines(query);
    } else {
      results = [...medicineDatabase];
    }

    if (selectedCategory !== 'All') {
      results = results.filter(m => 
        m.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (showOtcOnly) {
      results = results.filter(m => m.otc);
    }

    return results;
  }, [query, selectedCategory, showOtcOnly]);

  return (
    <div className="min-h-screen bg-grid bg-radial-top pt-20 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4">
            <Pill className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300 font-medium">Medicine Database</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Medicine <span className="gradient-text">Information</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Search our comprehensive database for detailed information about medicines, 
            including usage, dosage, side effects, and alternatives.
          </p>
        </div>

        {/* Search Bar */}
        <div className="glass rounded-2xl p-4 mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search medicines... (e.g., "Paracetamol", "fever", "antibiotic")'
              className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/40 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'glass text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto">
              <button
                onClick={() => setShowOtcOnly(!showOtcOnly)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  showOtcOnly
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'glass text-slate-400 hover:text-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3 h-3" />
                OTC Only
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-sm text-slate-500">
            Showing <span className="text-sky-400 font-semibold">{filteredMedicines.length}</span> medicine{filteredMedicines.length !== 1 ? 's' : ''}
          </p>
          {query && (
            <p className="text-xs text-slate-600">
              Results for &ldquo;<span className="text-slate-400">{query}</span>&rdquo;
            </p>
          )}
        </div>

        {/* Medicine Cards */}
        <div className="space-y-3">
          {filteredMedicines.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center">
              <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-400 mb-2">No medicines found</h3>
              <p className="text-sm text-slate-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredMedicines.map((med) => {
              const isExpanded = expandedMed === med.name;
              return (
                <div key={med.name} className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.03]">
                  <button
                    onClick={() => setExpandedMed(isExpanded ? null : med.name)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        med.otc 
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-400 shadow-emerald-500/20' 
                          : 'bg-gradient-to-br from-violet-500 to-purple-400 shadow-violet-500/20'
                      }`}>
                        <Pill className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{med.name}</h3>
                        <p className="text-xs text-slate-500">{med.genericName} • {med.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-md text-xs font-medium ${
                        med.otc 
                          ? 'bg-emerald-500/10 text-emerald-400' 
                          : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        {med.otc ? '✅ OTC' : '⚠️ Prescription'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {/* Usage */}
                        <div className="glass-light rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Info className="w-4 h-4 text-sky-400" />
                            <h4 className="text-sm font-semibold text-white">Usage</h4>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">{med.usage}</p>
                        </div>

                        {/* Dosage */}
                        <div className="glass-light rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Pill className="w-4 h-4 text-violet-400" />
                            <h4 className="text-sm font-semibold text-white">Dosage</h4>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">{med.dosage}</p>
                        </div>

                        {/* Side Effects */}
                        <div className="glass-light rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-amber-400" />
                            <h4 className="text-sm font-semibold text-white">Side Effects</h4>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {med.sideEffects.map((effect, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-xs">
                                {effect}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Warnings */}
                        <div className="glass-light rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-red-400" />
                            <h4 className="text-sm font-semibold text-white">Warnings</h4>
                          </div>
                          <ul className="space-y-1">
                            {med.warnings.map((warning, i) => (
                              <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                                <span className="text-red-400 mt-0.5">•</span>
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Alternatives */}
                      <div className="glass-light rounded-xl p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-sky-400" />
                          <h4 className="text-sm font-semibold text-white">Alternatives</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {med.alternatives.map((alt, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setQuery(alt);
                                setExpandedMed(null);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="px-3 py-1 rounded-full glass text-xs text-sky-400 hover:bg-sky-500/10 transition-colors cursor-pointer"
                            >
                              {alt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-4 mt-8 flex items-start gap-3" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
          <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            <span className="text-amber-400 font-semibold">Disclaimer:</span>{' '}
            Medicine information is for educational purposes only. Always consult your doctor or 
            pharmacist before starting, stopping, or changing any medication.
          </p>
        </div>
      </div>
    </div>
  );
}
