'use client';

import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Activity, Pill, Calendar, 
  Trash2, AlertTriangle, TrendingUp, Heart,
  Clock, FileText, Plus, X, Shield, Download,
  ChevronRight
} from 'lucide-react';
import { HealthRecord } from '@/lib/types';
import Link from 'next/link';

export default function DashboardPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [conditions, setConditions] = useState<string[]>([]);
  const [newAllergy, setNewAllergy] = useState('');
  const [newCondition, setNewCondition] = useState('');
  const [showAddAllergy, setShowAddAllergy] = useState(false);
  const [showAddCondition, setShowAddCondition] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('healthRecords') || '[]');
      setRecords(saved);
      const savedAllergies = JSON.parse(localStorage.getItem('allergies') || '[]');
      setAllergies(savedAllergies);
      const savedConditions = JSON.parse(localStorage.getItem('conditions') || '[]');
      setConditions(savedConditions);
    } catch {}
  }, []);

  const deleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
    setRecords(updated);
    localStorage.setItem('healthRecords', JSON.stringify(updated));
  };

  const addAllergy = () => {
    if (newAllergy.trim()) {
      const updated = [...allergies, newAllergy.trim()];
      setAllergies(updated);
      localStorage.setItem('allergies', JSON.stringify(updated));
      setNewAllergy('');
      setShowAddAllergy(false);
    }
  };

  const removeAllergy = (idx: number) => {
    const updated = allergies.filter((_, i) => i !== idx);
    setAllergies(updated);
    localStorage.setItem('allergies', JSON.stringify(updated));
  };

  const addCondition = () => {
    if (newCondition.trim()) {
      const updated = [...conditions, newCondition.trim()];
      setConditions(updated);
      localStorage.setItem('conditions', JSON.stringify(updated));
      setNewCondition('');
      setShowAddCondition(false);
    }
  };

  const removeCondition = (idx: number) => {
    const updated = conditions.filter((_, i) => i !== idx);
    setConditions(updated);
    localStorage.setItem('conditions', JSON.stringify(updated));
  };

  const clearAllRecords = () => {
    setRecords([]);
    localStorage.setItem('healthRecords', JSON.stringify([]));
  };

  // Stats
  const uniqueSymptoms = new Set(records.flatMap(r => r.symptoms));
  const uniqueMedicines = new Set(records.flatMap(r => r.medicines));
  const thisMonth = records.filter(r => {
    const d = new Date(r.date);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });

  return (
    <div className="min-h-screen bg-grid bg-radial-top pt-20 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-3">
              <LayoutDashboard className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-slate-300 font-medium">Health Dashboard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Your Health <span className="gradient-text">Overview</span>
            </h1>
          </div>
          <div className="flex gap-2">
            <Link
              href="/chat"
              className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white text-sm font-medium shadow-lg shadow-sky-500/20"
            >
              <Plus className="w-4 h-4" />
              New Consultation
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, label: "Total Records", value: records.length, color: "from-sky-500 to-cyan-400", shadow: "shadow-sky-500/20" },
            { icon: Activity, label: "Symptoms Tracked", value: uniqueSymptoms.size, color: "from-violet-500 to-purple-400", shadow: "shadow-violet-500/20" },
            { icon: Pill, label: "Medicines Used", value: uniqueMedicines.size, color: "from-emerald-500 to-teal-400", shadow: "shadow-emerald-500/20" },
            { icon: TrendingUp, label: "This Month", value: thisMonth.length, color: "from-amber-500 to-orange-400", shadow: "shadow-amber-500/20" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass rounded-2xl p-5 hover:bg-white/[0.03] transition-colors">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg ${stat.shadow}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Health Records List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-400" />
                Health History
              </h2>
              {records.length > 0 && (
                <button
                  onClick={clearAllRecords}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear All
                </button>
              )}
            </div>

            {records.length === 0 ? (
              <div className="glass rounded-2xl p-12 text-center">
                <Activity className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-400 mb-2">No health records yet</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Start a consultation with our AI Doctor to begin tracking your health.
                </p>
                <Link
                  href="/chat"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white text-sm font-medium shadow-lg shadow-sky-500/20"
                >
                  Start Consultation
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {records.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((record) => (
                  <div key={record.id} className="glass rounded-2xl p-5 hover:bg-white/[0.03] transition-colors group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-sky-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{record.diagnosis}</h3>
                          <p className="text-xs text-slate-500">
                            {new Date(record.date).toLocaleDateString('en-US', { 
                              year: 'numeric', month: 'short', day: 'numeric',
                              hour: '2-digit', minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteRecord(record.id)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Symptoms */}
                    <div className="mb-2">
                      <p className="text-xs text-slate-600 mb-1">Symptoms</p>
                      <div className="flex flex-wrap gap-1.5">
                        {record.symptoms.map((s, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 text-xs">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Medicines */}
                    {record.medicines.length > 0 && (
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Medicines</p>
                        <div className="flex flex-wrap gap-1.5">
                          {record.medicines.map((m, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {record.notes && (
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{record.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Allergies */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Allergies
                </h3>
                <button
                  onClick={() => setShowAddAllergy(!showAddAllergy)}
                  className="p-1 rounded-md text-slate-500 hover:text-sky-400 hover:bg-white/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {showAddAllergy && (
                <div className="flex gap-2 mb-3">
                  <input
                    value={newAllergy}
                    onChange={(e) => setNewAllergy(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addAllergy()}
                    placeholder="e.g., Penicillin"
                    className="flex-1 px-3 py-1.5 rounded-lg glass bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/40"
                  />
                  <button onClick={addAllergy} className="px-3 py-1.5 rounded-lg gradient-primary text-white text-xs font-medium">
                    Add
                  </button>
                </div>
              )}

              {allergies.length === 0 ? (
                <p className="text-xs text-slate-600">No allergies recorded</p>
              ) : (
                <div className="space-y-1.5">
                  {allergies.map((allergy, idx) => (
                    <div key={idx} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-red-500/5 group">
                      <span className="text-xs text-red-300">{allergy}</span>
                      <button
                        onClick={() => removeAllergy(idx)}
                        className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Medical Conditions */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  Medical Conditions
                </h3>
                <button
                  onClick={() => setShowAddCondition(!showAddCondition)}
                  className="p-1 rounded-md text-slate-500 hover:text-sky-400 hover:bg-white/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {showAddCondition && (
                <div className="flex gap-2 mb-3">
                  <input
                    value={newCondition}
                    onChange={(e) => setNewCondition(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCondition()}
                    placeholder="e.g., Diabetes Type 2"
                    className="flex-1 px-3 py-1.5 rounded-lg glass bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/40"
                  />
                  <button onClick={addCondition} className="px-3 py-1.5 rounded-lg gradient-primary text-white text-xs font-medium">
                    Add
                  </button>
                </div>
              )}

              {conditions.length === 0 ? (
                <p className="text-xs text-slate-600">No conditions recorded</p>
              ) : (
                <div className="space-y-1.5">
                  {conditions.map((condition, idx) => (
                    <div key={idx} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-pink-500/5 group">
                      <span className="text-xs text-pink-300">{condition}</span>
                      <button
                        onClick={() => removeCondition(idx)}
                        className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Download className="w-4 h-4 text-sky-400" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link href="/chat" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                  <Activity className="w-4 h-4" />
                  New symptom check
                  <ChevronRight className="w-3 h-3 ml-auto" />
                </Link>
                <Link href="/prescription" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                  <FileText className="w-4 h-4" />
                  Upload prescription
                  <ChevronRight className="w-3 h-3 ml-auto" />
                </Link>
                <Link href="/medicine" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                  <Pill className="w-4 h-4" />
                  Search medicine
                  <ChevronRight className="w-3 h-3 ml-auto" />
                </Link>
                <Link href="/emergency" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-sm text-red-400 hover:text-red-300 transition-colors">
                  <Shield className="w-4 h-4" />
                  Emergency help
                  <ChevronRight className="w-3 h-3 ml-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
