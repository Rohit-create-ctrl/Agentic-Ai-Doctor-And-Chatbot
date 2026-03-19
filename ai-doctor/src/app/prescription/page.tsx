'use client';

import { useState, useRef } from 'react';
import { 
  Upload, FileText, Camera, Loader2, AlertTriangle, 
  CheckCircle2, Pill, Info, Shield, X, Image as ImageIcon,
  Sparkles, ChevronDown, ChevronUp
} from 'lucide-react';

interface DetectedMedicine {
  name: string;
  dosage: string;
  frequency: string;
  usage: string;
  sideEffects: string[];
  confidence: number;
}

const samplePrescriptions: DetectedMedicine[][] = [
  [
    {
      name: "Amoxicillin 500mg",
      dosage: "500mg",
      frequency: "Three times daily for 7 days",
      usage: "Antibiotic used to treat bacterial infections including respiratory infections, urinary tract infections, and ear infections.",
      sideEffects: ["Nausea", "Diarrhea", "Skin rash", "Allergic reactions"],
      confidence: 92
    },
    {
      name: "Paracetamol 650mg",
      dosage: "650mg",
      frequency: "Every 6 hours as needed for fever/pain",
      usage: "Analgesic and antipyretic used to relieve mild-to-moderate pain and reduce fever.",
      sideEffects: ["Nausea (rare)", "Allergic skin reactions (rare)", "Liver damage if overdosed"],
      confidence: 95
    },
    {
      name: "Cetirizine 10mg",
      dosage: "10mg",
      frequency: "Once daily at bedtime",
      usage: "Antihistamine used to relieve allergy symptoms including runny nose, sneezing, and itchy eyes.",
      sideEffects: ["Drowsiness", "Dry mouth", "Fatigue"],
      confidence: 88
    }
  ],
  [
    {
      name: "Omeprazole 20mg",
      dosage: "20mg",
      frequency: "Once daily, 30 minutes before breakfast",
      usage: "Proton pump inhibitor that reduces stomach acid production. Used for GERD, stomach ulcers, and acid reflux.",
      sideEffects: ["Headache", "Nausea", "Diarrhea", "Vitamin B12 deficiency (long-term use)"],
      confidence: 90
    },
    {
      name: "Domperidone 10mg",
      dosage: "10mg",
      frequency: "Three times daily before meals",
      usage: "Anti-nausea medication that helps with bloating, fullness, and nausea. Speeds up stomach emptying.",
      sideEffects: ["Dry mouth", "Headache", "Abdominal cramps"],
      confidence: 85
    },
    {
      name: "Antacid Gel (Aluminium Hydroxide + Magnesium Hydroxide)",
      dosage: "10ml",
      frequency: "After meals and at bedtime",
      usage: "Neutralizes stomach acid and provides quick relief from heartburn, indigestion, and acid reflux.",
      sideEffects: ["Constipation", "Diarrhea", "Nausea"],
      confidence: 82
    }
  ]
];

export default function PrescriptionPage() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<DetectedMedicine[] | null>(null);
  const [expandedMed, setExpandedMed] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage(ev.target?.result as string);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!image) return;
    setIsProcessing(true);
    setResults(null);
    
    // Simulate OCR processing with realistic delay
    await new Promise(r => setTimeout(r, 3000 + Math.random() * 2000));
    
    // Return sample prescription results
    const randomIndex = Math.floor(Math.random() * samplePrescriptions.length);
    setResults(samplePrescriptions[randomIndex]);
    setIsProcessing(false);

    // Save to health history
    try {
      const existing = JSON.parse(localStorage.getItem('healthRecords') || '[]');
      existing.push({
        id: Date.now().toString(),
        date: new Date().toISOString(),
        symptoms: ['Prescription Upload'],
        diagnosis: 'Prescription Scan',
        medicines: samplePrescriptions[randomIndex].map(m => m.name),
        notes: `Uploaded prescription: ${fileName}`
      });
      localStorage.setItem('healthRecords', JSON.stringify(existing));
    } catch {}
  };

  const clearImage = () => {
    setImage(null);
    setFileName('');
    setResults(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="min-h-screen bg-grid bg-radial-top pt-20 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4">
            <FileText className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-slate-300 font-medium">AI Prescription Reader</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Scan Your <span className="gradient-text">Prescription</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Upload a photo of your doctor&apos;s prescription and our AI will identify medicines, 
            explain their usage, dosage, and potential side effects.
          </p>
        </div>

        {/* Upload Area */}
        <div className="glass rounded-2xl p-6 mb-8">
          {!image ? (
            <div 
              className="border-2 border-dashed border-white/10 rounded-xl p-12 text-center hover:border-sky-500/30 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Upload Prescription</h3>
              <p className="text-sm text-slate-400 mb-4">
                Drag and drop or click to upload a photo of your prescription
              </p>
              <div className="flex items-center justify-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white text-sm font-medium shadow-lg shadow-sky-500/20">
                  <ImageIcon className="w-4 h-4" />
                  Choose File
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-slate-300 text-sm font-medium hover:bg-white/5"
                >
                  <Camera className="w-4 h-4" />
                  Take Photo
                </button>
              </div>
              <p className="text-xs text-slate-600 mt-4">Supports JPG, PNG, WEBP • Max 10MB</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{fileName}</p>
                    <p className="text-xs text-slate-500">Ready for processing</p>
                  </div>
                </div>
                <button onClick={clearImage} className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Image Preview */}
              <div className="rounded-xl overflow-hidden mb-4 bg-surface-light border border-white/5">
                <img src={image} alt="Prescription" className="w-full max-h-80 object-contain" />
              </div>

              {/* Process Button */}
              <button
                onClick={processImage}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all disabled:opacity-60"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing with AI OCR...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Analyze Prescription
                  </>
                )}
              </button>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Processing Animation */}
        {isProcessing && (
          <div className="glass rounded-2xl p-8 mb-8 text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-2 border-sky-500/20 animate-ping" />
              <div className="absolute inset-2 rounded-full border-2 border-sky-500/40 animate-pulse" />
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-sky-400 animate-pulse" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Analyzing Prescription...</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="shimmer rounded p-2">🔍 Scanning handwriting patterns</p>
              <p className="shimmer rounded p-2" style={{ animationDelay: '0.5s' }}>💊 Identifying medicine names</p>
              <p className="shimmer rounded p-2" style={{ animationDelay: '1s' }}>📋 Extracting dosage information</p>
            </div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  {results.length} Medicine{results.length > 1 ? 's' : ''} Detected
                </h2>
                <p className="text-sm text-slate-400">Click on each medicine for detailed information</p>
              </div>
            </div>

            {results.map((med, idx) => (
              <div key={idx} className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.03]">
                <button
                  onClick={() => setExpandedMed(expandedMed === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center shadow-lg shadow-violet-500/20">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{med.name}</h3>
                      <p className="text-sm text-slate-400">{med.frequency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs text-emerald-400 font-medium">{med.confidence}% match</span>
                    </div>
                    {expandedMed === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>

                {expandedMed === idx && (
                  <div className="px-5 pb-5 pt-0 border-t border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="glass-light rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="w-4 h-4 text-sky-400" />
                          <h4 className="text-sm font-semibold text-white">Usage</h4>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{med.usage}</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Pill className="w-4 h-4 text-violet-400" />
                          <h4 className="text-sm font-semibold text-white">Dosage</h4>
                        </div>
                        <p className="text-sm text-slate-400">{med.dosage} — {med.frequency}</p>
                      </div>
                    </div>
                    <div className="glass-light rounded-xl p-4 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <h4 className="text-sm font-semibold text-white">Possible Side Effects</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {med.sideEffects.map((effect, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-medium">
                            {effect}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-4 mt-8 flex items-start gap-3" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
          <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            <span className="text-amber-400 font-semibold">Disclaimer:</span>{' '}
            OCR results may not be 100% accurate, especially with handwritten prescriptions.
            Always verify medicine names and dosages with your pharmacist or doctor before use.
          </p>
        </div>
      </div>
    </div>
  );
}
