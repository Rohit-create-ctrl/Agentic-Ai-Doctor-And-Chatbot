export interface Medicine {
  name: string;
  genericName: string;
  category: string;
  usage: string;
  dosage: string;
  sideEffects: string[];
  warnings: string[];
  alternatives: string[];
  otc: boolean;
}

export interface Symptom {
  id: string;
  name: string;
  icon: string;
  severity: 'mild' | 'moderate' | 'severe';
}

export interface Diagnosis {
  illness: string;
  confidence: number;
  description: string;
  advice: string[];
  medicines: string[];
  homeRemedies: string[];
  seeDoctor: boolean;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'diagnosis' | 'medicine-info' | 'prescription';
  data?: Diagnosis | Medicine | PrescriptionResult;
}

export interface PrescriptionResult {
  medicines: {
    name: string;
    dosage: string;
    frequency: string;
    usage: string;
    sideEffects: string[];
  }[];
  rawText: string;
  confidence: number;
}

export interface HealthRecord {
  id: string;
  date: string;
  symptoms: string[];
  diagnosis: string;
  medicines: string[];
  notes: string;
}

export interface UserHealth {
  records: HealthRecord[];
  allergies: string[];
  conditions: string[];
}
