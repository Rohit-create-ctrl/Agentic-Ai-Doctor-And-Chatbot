'use client';

import { useState } from 'react';
import { 
  Phone, AlertTriangle, Heart, Brain, Wind,
  Shield, ChevronDown, ChevronUp, MapPin,
  Flame, Zap, CircleAlert, Siren, ExternalLink,
  Pill, Stethoscope
} from 'lucide-react';
import { emergencyTips } from '@/lib/data';

const emergencyNumbers = [
  { country: "India", number: "112", label: "Emergency" },
  { country: "India", number: "102", label: "Ambulance" },
  { country: "India", number: "108", label: "Emergency Medical" },
  { country: "USA", number: "911", label: "Emergency" },
  { country: "UK", number: "999", label: "Emergency" },
  { country: "EU", number: "112", label: "Emergency" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '❤️': Heart,
  '🧠': Brain,
  '⚠️': AlertTriangle,
  '🫁': Wind,
  '🔥': Flame,
  '⚡': Zap,
};

const colorMap: Record<string, { bg: string; shadow: string; border: string }> = {
  'Heart Attack': { bg: 'from-red-500 to-rose-400', shadow: 'shadow-red-500/20', border: 'border-red-500/20' },
  'Stroke': { bg: 'from-violet-500 to-purple-400', shadow: 'shadow-violet-500/20', border: 'border-violet-500/20' },
  'Severe Allergic Reaction': { bg: 'from-amber-500 to-orange-400', shadow: 'shadow-amber-500/20', border: 'border-amber-500/20' },
  'Choking': { bg: 'from-sky-500 to-cyan-400', shadow: 'shadow-sky-500/20', border: 'border-sky-500/20' },
  'Burns': { bg: 'from-orange-500 to-red-400', shadow: 'shadow-orange-500/20', border: 'border-orange-500/20' },
  'Seizure': { bg: 'from-emerald-500 to-teal-400', shadow: 'shadow-emerald-500/20', border: 'border-emerald-500/20' },
};

export default function EmergencyPage() {
  const [expandedTip, setExpandedTip] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-grid pt-20 px-4 sm:px-6 lg:px-8 pb-12">
      {/* Red gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
            <Siren className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm text-red-300 font-medium">Emergency Medical Help</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Emergency <span className="text-red-400">First Aid</span> Guide
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Quick reference for emergency situations. Remember to always call emergency 
            services first in life-threatening situations.
          </p>
        </div>

        {/* Emergency Call Banner */}
        <div className="glass rounded-2xl p-6 mb-8 relative overflow-hidden" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-400 flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse-glow">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Call Emergency Services</h2>
                <p className="text-sm text-slate-400">In a life-threatening emergency, always call first</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {emergencyNumbers.slice(0, 3).map((num) => (
                <a
                  key={num.number + num.label}
                  href={`tel:${num.number}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/15 text-red-300 text-sm font-semibold hover:bg-red-500/25 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {num.number}
                  <span className="text-xs text-red-400/70">({num.label})</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Numbers Grid */}
        <div className="glass rounded-2xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-400" />
            Emergency Numbers by Country
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {emergencyNumbers.map((num, idx) => (
              <a
                key={idx}
                href={`tel:${num.number}`}
                className="glass-light rounded-xl p-3 text-center hover:bg-white/5 transition-colors group"
              >
                <div className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">{num.number}</div>
                <div className="text-xs text-slate-500">{num.country}</div>
                <div className="text-[10px] text-slate-600">{num.label}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Emergency Tips */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <CircleAlert className="w-5 h-5 text-amber-400" />
            Emergency First Aid Procedures
          </h2>

          {emergencyTips.map((tip, idx) => {
            const isExpanded = expandedTip === idx;
            const colors = colorMap[tip.title] || { bg: 'from-slate-500 to-slate-400', shadow: 'shadow-slate-500/20', border: 'border-white/10' };
            const IconComponent = iconMap[tip.icon] || AlertTriangle;
            
            return (
              <div 
                key={idx} 
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.03] ${isExpanded ? colors.border : ''}`}
                style={isExpanded ? { borderColor: undefined } : {}}
              >
                <button
                  onClick={() => setExpandedTip(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg ${colors.shadow}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                      <p className="text-xs text-slate-500">{tip.symptoms.length} warning signs • {tip.actions.length} steps</p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {/* Symptoms/Signs */}
                      <div className="glass-light rounded-xl p-4">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                          Warning Signs
                        </h4>
                        <ul className="space-y-2">
                          {tip.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="text-amber-400 mt-0.5 shrink-0">⚠</span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="glass-light rounded-xl p-4">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-emerald-400" />
                          What To Do
                        </h4>
                        <ol className="space-y-2">
                          {tip.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="w-5 h-5 shrink-0 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-bold mt-0.5">
                                {i + 1}
                              </span>
                              {action}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Find Nearby */}
        <div className="glass rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-400" />
            Find Nearby Help
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Hospitals Near Me", query: "hospitals near me", icon: Heart, color: "text-red-400" },
              { label: "Pharmacies Near Me", query: "pharmacies near me", icon: Pill, color: "text-emerald-400" },
              { label: "Clinics Near Me", query: "clinics near me", icon: Stethoscope, color: "text-sky-400" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={`https://www.google.com/maps/search/${encodeURIComponent(item.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass-light hover:bg-white/5 transition-colors group"
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 ml-auto group-hover:text-sky-400 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-4 flex items-start gap-3" style={{ borderColor: 'rgba(239,68,68,0.2)' }}>
          <Shield className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            <span className="text-red-400 font-semibold">Important:</span>{' '}
            This emergency guide is for informational purposes only and is not a substitute for 
            professional emergency medical care. Always call emergency services in 
            life-threatening situations. Do not delay calling for help.
          </p>
        </div>
      </div>
    </div>
  );
}

