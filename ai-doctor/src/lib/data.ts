import { Medicine, Symptom, Diagnosis } from './types';

export const medicineDatabase: Medicine[] = [
  {
    name: "Paracetamol",
    genericName: "Acetaminophen",
    category: "Analgesic / Antipyretic",
    usage: "Used to relieve mild to moderate pain such as headaches, muscle aches, toothaches, and to reduce fever.",
    dosage: "Adults: 500mg-1000mg every 4-6 hours. Maximum 4g per day. Children: Based on weight, consult physician.",
    sideEffects: ["Nausea", "Allergic skin reactions", "Liver damage (overdose)", "Low blood cell count (rare)"],
    warnings: ["Do not exceed recommended dose", "Avoid alcohol", "Consult doctor if symptoms persist for more than 3 days", "Not recommended for liver disease patients"],
    alternatives: ["Ibuprofen", "Aspirin", "Naproxen"],
    otc: true
  },
  {
    name: "Ibuprofen",
    genericName: "Ibuprofen",
    category: "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    usage: "Reduces fever and treats pain or inflammation caused by headaches, dental pain, menstrual cramps, muscle aches, or arthritis.",
    dosage: "Adults: 200-400mg every 4-6 hours as needed. Maximum 1200mg per day (OTC). Take with food.",
    sideEffects: ["Stomach pain", "Nausea", "Dizziness", "Heartburn", "Mild rash"],
    warnings: ["Take with food to avoid stomach upset", "Not for people with stomach ulcers", "Avoid in third trimester of pregnancy", "May increase cardiovascular risk"],
    alternatives: ["Paracetamol", "Aspirin", "Naproxen", "Diclofenac"],
    otc: true
  },
  {
    name: "Cetirizine",
    genericName: "Cetirizine Hydrochloride",
    category: "Antihistamine",
    usage: "Treats allergic symptoms including runny nose, sneezing, itchy/watery eyes, and hives.",
    dosage: "Adults: 10mg once daily. Children 6-12: 5mg twice daily or 10mg once daily.",
    sideEffects: ["Drowsiness", "Dry mouth", "Fatigue", "Headache"],
    warnings: ["May cause drowsiness - avoid driving", "Avoid alcohol", "Use cautiously in kidney disease patients"],
    alternatives: ["Loratadine", "Fexofenadine", "Levocetirizine"],
    otc: true
  },
  {
    name: "Omeprazole",
    genericName: "Omeprazole",
    category: "Proton Pump Inhibitor",
    usage: "Treats gastroesophageal reflux disease (GERD), stomach ulcers, and excess stomach acid conditions.",
    dosage: "Adults: 20mg once daily before breakfast for 4-8 weeks. May increase to 40mg if needed.",
    sideEffects: ["Headache", "Abdominal pain", "Nausea", "Diarrhea", "Vitamin B12 deficiency (long-term)"],
    warnings: ["Not for immediate heartburn relief", "Long-term use may cause bone fractures", "Consult doctor if symptoms persist beyond 14 days"],
    alternatives: ["Pantoprazole", "Lansoprazole", "Ranitidine", "Famotidine"],
    otc: true
  },
  {
    name: "Amoxicillin",
    genericName: "Amoxicillin Trihydrate",
    category: "Antibiotic (Penicillin-type)",
    usage: "Treats various bacterial infections including ear infections, throat infections, urinary tract infections, and pneumonia.",
    dosage: "Adults: 250-500mg every 8 hours or 500-875mg every 12 hours. Complete full course as prescribed.",
    sideEffects: ["Diarrhea", "Nausea", "Skin rash", "Vomiting", "Allergic reactions"],
    warnings: ["Complete the full course", "Inform doctor of penicillin allergy", "May reduce effectiveness of oral contraceptives", "Prescription required"],
    alternatives: ["Azithromycin", "Cephalexin", "Ciprofloxacin"],
    otc: true
  },
  {
    name: "Loperamide",
    genericName: "Loperamide Hydrochloride",
    category: "Antidiarrheal",
    usage: "Controls symptoms of diarrhea, including traveler's diarrhea.",
    dosage: "Adults: Initial dose 4mg, then 2mg after each loose stool. Maximum 16mg per day.",
    sideEffects: ["Constipation", "Dizziness", "Nausea", "Abdominal cramps"],
    warnings: ["Do not use if stool is bloody", "Not for bacterial diarrhea with high fever", "Discontinue if no improvement in 48 hours"],
    alternatives: ["Bismuth Subsalicylate", "Diphenoxylate"],
    otc: true
  },
  {
    name: "Dextromethorphan",
    genericName: "Dextromethorphan Hydrobromide",
    category: "Cough Suppressant",
    usage: "Temporarily relieves cough due to minor throat and bronchial irritation from cold or inhaled irritants.",
    dosage: "Adults: 10-20mg every 4 hours or 30mg every 6-8 hours. Maximum 120mg per day.",
    sideEffects: ["Drowsiness", "Dizziness", "Nausea", "Stomach discomfort"],
    warnings: ["Do not use for chronic cough", "Avoid with MAO inhibitors", "May interact with antidepressants"],
    alternatives: ["Guaifenesin", "Honey and lemon", "Benzonatate"],
    otc: true
  },
  {
    name: "Diphenhydramine",
    genericName: "Diphenhydramine Hydrochloride",
    category: "Antihistamine / Sleep Aid",
    usage: "Treats allergy symptoms, motion sickness, and used as a short-term sleep aid.",
    dosage: "Adults: 25-50mg every 4-6 hours for allergy. 50mg at bedtime for sleep. Maximum 300mg per day.",
    sideEffects: ["Marked drowsiness", "Dry mouth", "Blurred vision", "Urinary retention", "Constipation"],
    warnings: ["Causes significant drowsiness", "Avoid operating machinery", "Use cautiously in elderly", "Avoid alcohol"],
    alternatives: ["Cetirizine", "Loratadine", "Melatonin (for sleep)"],
    otc: true
  },
  {
    name: "Ranitidine",
    genericName: "Ranitidine Hydrochloride",
    category: "H2 Blocker",
    usage: "Reduces stomach acid. Used for heartburn, acid indigestion, and sour stomach.",
    dosage: "Adults: 150mg twice daily or 300mg at bedtime for ulcer treatment. 75-150mg for heartburn.",
    sideEffects: ["Headache", "Constipation", "Diarrhea", "Dizziness"],
    warnings: ["Consult doctor if symptoms persist beyond 2 weeks", "May mask symptoms of stomach cancer", "Note: some brands recalled due to NDMA contamination"],
    alternatives: ["Famotidine", "Omeprazole", "Pantoprazole"],
    otc: true
  },
  {
    name: "Metformin",
    genericName: "Metformin Hydrochloride",
    category: "Antidiabetic",
    usage: "Used to control blood sugar levels in type 2 diabetes mellitus. Often first-line treatment.",
    dosage: "Initial: 500mg twice daily with meals. May increase gradually. Maximum 2550mg per day.",
    sideEffects: ["Nausea", "Diarrhea", "Stomach upset", "Metallic taste", "Vitamin B12 deficiency"],
    warnings: ["Prescription only", "Monitor kidney function", "Hold before contrast dye procedures", "Risk of lactic acidosis (rare)"],
    alternatives: ["Glimepiride", "Sitagliptin", "Gliclazide"],
    otc: true
  },
  {
    name: "Azithromycin",
    genericName: "Azithromycin Dihydrate",
    category: "Macrolide Antibiotic",
    usage: "Treats bacterial infections including respiratory infections, skin infections, ear infections, and sexually transmitted infections.",
    dosage: "Adults: Typically 500mg on day 1, then 250mg on days 2-5. Take on empty stomach.",
    sideEffects: ["Nausea", "Diarrhea", "Abdominal pain", "Vomiting", "Headache"],
    warnings: ["Prescription only", "Complete full course", "May cause heart rhythm changes", "Inform doctor of liver/kidney problems"],
    alternatives: ["Amoxicillin", "Clarithromycin", "Doxycycline"],
    otc: true
  },
  {
    name: "Antacid (Tums/Rennie)",
    genericName: "Calcium Carbonate",
    category: "Antacid",
    usage: "Provides quick relief from heartburn, indigestion, and upset stomach by neutralizing stomach acid.",
    dosage: "Adults: 1-2 tablets as needed. Maximum 7-10 tablets per day depending on strength.",
    sideEffects: ["Constipation", "Gas", "Belching", "Increased calcium levels (excessive use)"],
    warnings: ["Not for long-term use", "May interfere with other medication absorption", "Excessive use may cause kidney problems"],
    alternatives: ["Omeprazole", "Ranitidine", "Famotidine", "Aluminum Hydroxide"],
    otc: true
  },
  {
    name: "ORS (Oral Rehydration Salts)",
    genericName: "Sodium Chloride, Potassium Chloride, Sodium Citrate, Glucose",
    category: "Rehydration",
    usage: "Prevents and treats dehydration caused by diarrhea or vomiting. Replaces lost fluids and electrolytes.",
    dosage: "Dissolve one sachet in 1 liter of clean drinking water. Sip frequently. Follow packet instructions.",
    sideEffects: ["Vomiting (if consumed too quickly)", "Hypernatremia (if made too concentrated)"],
    warnings: ["Use clean water only", "Discard after 24 hours", "Seek medical help if dehydration is severe"],
    alternatives: ["Pedialyte", "Coconut water", "Homemade salt-sugar solution"],
    otc: true
  },
  {
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    category: "NSAID / Antiplatelet",
    usage: "Relieves mild to moderate pain, reduces fever, and acts as anti-inflammatory. Low-dose used for heart attack and stroke prevention.",
    dosage: "Pain relief: 325-650mg every 4-6 hours. Heart protection: 75-100mg daily. Maximum 4g/day for pain.",
    sideEffects: ["Stomach irritation", "Heartburn", "Nausea", "Easy bruising", "Tinnitus (high doses)"],
    warnings: ["Not for children under 16 (Reye's syndrome risk)", "Avoid before surgery", "Not for people with bleeding disorders", "Take with food"],
    alternatives: ["Paracetamol", "Ibuprofen", "Naproxen"],
    otc: true
  },
  {
    name: "Montelukast",
    genericName: "Montelukast Sodium",
    category: "Leukotriene Receptor Antagonist",
    usage: "Prevents and manages asthma symptoms and allergic rhinitis. Helps with exercise-induced breathing problems.",
    dosage: "Adults: 10mg once daily in the evening. Children 6-14: 5mg chewable tablet daily.",
    sideEffects: ["Headache", "Abdominal pain", "Thirst", "Mood changes", "Sleep disturbances"],
    warnings: ["Prescription only", "Not for acute asthma attacks", "Report mood/behavior changes to doctor", "Continue even when symptom-free"],
    alternatives: ["Zafirlukast", "Cromoglycate", "Inhaled corticosteroids"],
    otc: true
  }
,
  {
    name: "Atorvastatin",
    genericName: "Atorvastatin Calcium",
    category: "Statin",
    usage: "Lowers cholesterol levels and reduces risk of heart disease.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Levothyroxine",
    genericName: "Levothyroxine Sodium",
    category: "Thyroid Hormone",
    usage: "Treats hypothyroidism (underactive thyroid).",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Lisinopril",
    genericName: "Lisinopril",
    category: "ACE Inhibitor",
    usage: "Treats high blood pressure and heart failure.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Amlodipine",
    genericName: "Amlodipine Besylate",
    category: "Calcium Channel Blocker",
    usage: "Treats high blood pressure and chest pain (angina).",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Metoprolol",
    genericName: "Metoprolol Tartrate",
    category: "Beta Blocker",
    usage: "Treats high blood pressure, chest pain, and heart failure.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Albuterol",
    genericName: "Albuterol Sulfate",
    category: "Bronchodilator",
    usage: "Treats or prevents bronchospasm in people with asthma.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Losartan",
    genericName: "Losartan Potassium",
    category: "Angiotensin II Receptor Blocker",
    usage: "Treats high blood pressure and helps protect kidneys from damage from diabetes.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Gabapentin",
    genericName: "Gabapentin",
    category: "Anticonvulsant / Nerve Pain",
    usage: "Treats nerve pain and seizures.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Hydrochlorothiazide",
    genericName: "Hydrochlorothiazide",
    category: "Diuretic",
    usage: "Treats high blood pressure and fluid retention (edema).",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Sertraline",
    genericName: "Sertraline Hydrochloride",
    category: "SSRI Antidepressant",
    usage: "Treats depression, panic attacks, obsessive compulsive disorder, and PTSD.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Simvastatin",
    genericName: "Simvastatin",
    category: "Statin",
    usage: "Lowers cholesterol and triglycerides in the blood.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Escitalopram",
    genericName: "Escitalopram Oxalate",
    category: "SSRI Antidepressant",
    usage: "Treats depression and generalized anxiety disorder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Rosuvastatin",
    genericName: "Rosuvastatin Calcium",
    category: "Statin",
    usage: "Lowers cholesterol and triglycerides.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Bupropion",
    genericName: "Bupropion Hydrochloride",
    category: "Antidepressant / Smoking Cessation",
    usage: "Treats depression and helps people quit smoking.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Furosemide",
    genericName: "Furosemide",
    category: "Diuretic",
    usage: "Treats fluid retention (edema) and high blood pressure.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Pantoprazole",
    genericName: "Pantoprazole Sodium",
    category: "Proton Pump Inhibitor",
    usage: "Treats GERD and damage to the esophagus from stomach acid.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Trazodone",
    genericName: "Trazodone Hydrochloride",
    category: "Antidepressant / Sleep Aid",
    usage: "Treats depression and insomnia.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Dextroamphetamine",
    genericName: "Dextroamphetamine Saccharate",
    category: "CNS Stimulant",
    usage: "Treats ADHD and narcolepsy.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Fluticasone",
    genericName: "Fluticasone Propionate",
    category: "Corticosteroid",
    usage: "Treats nasal congestion, sneezing, runny nose, and itchy or watery eyes.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Tamsulosin",
    genericName: "Tamsulosin Hydrochloride",
    category: "Alpha Blocker",
    usage: "Improves urination in men with an enlarged prostate.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Fluoxetine",
    genericName: "Fluoxetine Hydrochloride",
    category: "SSRI Antidepressant",
    usage: "Treats depression, bulimia, OCD, and panic disorder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Carvedilol",
    genericName: "Carvedilol",
    category: "Beta Blocker",
    usage: "Treats heart failure and high blood pressure.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Duloxetine",
    genericName: "Duloxetine",
    category: "SNRI Antidepressant",
    usage: "Treats depression, anxiety, and nerve pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Meloxicam",
    genericName: "Meloxicam",
    category: "NSAID",
    usage: "Treats pain or inflammation caused by osteoarthritis or rheumatoid arthritis.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Clopidogrel",
    genericName: "Clopidogrel Bisulfate",
    category: "Antiplatelet",
    usage: "Prevents blood clots in people with a recent heart attack or stroke.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Prednisone",
    genericName: "Prednisone",
    category: "Corticosteroid",
    usage: "Treats inflammatory conditions such as arthritis, blood disorders, and immune system disorders.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Citalopram",
    genericName: "Citalopram Hydrobromide",
    category: "SSRI Antidepressant",
    usage: "Treats depression.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Insulin Glargine",
    genericName: "Insulin Glargine",
    category: "Long-acting Insulin",
    usage: "Improves blood sugar control in adults and children with diabetes mellitus.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Potassium Chloride",
    genericName: "Potassium Chloride",
    category: "Mineral Supplement",
    usage: "Prevents or treats low blood levels of potassium (hypokalemia).",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Pravastatin",
    genericName: "Pravastatin Sodium",
    category: "Statin",
    usage: "Lowers cholesterol and triglycerides.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Tramadol",
    genericName: "Tramadol Hydrochloride",
    category: "Opioid Analgesic",
    usage: "Treats moderate to severe pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Alprazolam",
    genericName: "Alprazolam",
    category: "Benzodiazepine",
    usage: "Treats anxiety and panic disorders.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Cyclobenzaprine",
    genericName: "Cyclobenzaprine Hydrochloride",
    category: "Muscle Relaxant",
    usage: "Relieves muscle spasms and pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Diclofenac",
    genericName: "Diclofenac Sodium",
    category: "NSAID",
    usage: "Treats pain, migraines, and arthritis.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Loratadine",
    genericName: "Loratadine",
    category: "Antihistamine",
    usage: "Treats allergy symptoms and hives.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Clonazepam",
    genericName: "Clonazepam",
    category: "Benzodiazepine",
    usage: "Treats seizures and panic disorder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Zolpidem",
    genericName: "Zolpidem Tartrate",
    category: "Sedative",
    usage: "Treats insomnia.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Glipizide",
    genericName: "Glipizide",
    category: "Sulfonylurea",
    usage: "Helps control blood sugar levels in type 2 diabetes.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Venlafaxine",
    genericName: "Venlafaxine Hydrochloride",
    category: "SNRI Antidepressant",
    usage: "Treats depression and anxiety.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Warfarin",
    genericName: "Warfarin Sodium",
    category: "Anticoagulant",
    usage: "Prevents formation of blood clots.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Lansoprazole",
    genericName: "Lansoprazole",
    category: "Proton Pump Inhibitor",
    usage: "Treats stomach ulcers, GERD, and high acidity.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Lorazepam",
    genericName: "Lorazepam",
    category: "Benzodiazepine",
    usage: "Treats anxiety disorders.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Allopurinol",
    genericName: "Allopurinol",
    category: "Xanthine Oxidase Inhibitor",
    usage: "Treats gout and kidney stones.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Paroxetine",
    genericName: "Paroxetine Hydrochloride",
    category: "SSRI Antidepressant",
    usage: "Treats depression, OCD, anxiety disorders, and PTSD.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Methylphenidate",
    genericName: "Methylphenidate Hydrochloride",
    category: "CNS Stimulant",
    usage: "Treats ADHD and narcolepsy.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Estradiol",
    genericName: "Estradiol",
    category: "Estrogen",
    usage: "Treats menopause symptoms and prevents osteoporosis.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Aripiprazole",
    genericName: "Aripiprazole",
    category: "Antipsychotic",
    usage: "Treats schizophrenia, bipolar disorder, and depression.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Quetiapine",
    genericName: "Quetiapine Fumarate",
    category: "Antipsychotic",
    usage: "Treats schizophrenia, bipolar disorder, and depression.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Clonidine",
    genericName: "Clonidine Hydrochloride",
    category: "Alpha-2 Agonist",
    usage: "Treats high blood pressure and ADHD.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Ondansetron",
    genericName: "Ondansetron Hydrochloride",
    category: "Antiemetic",
    usage: "Prevents nausea and vomiting.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Sitagliptin",
    genericName: "Sitagliptin Phosphate",
    category: "DPP-4 Inhibitor",
    usage: "Treats type 2 diabetes.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Budesonide",
    genericName: "Budesonide",
    category: "Corticosteroid",
    usage: "Treats asthma, COPD, and Crohn's disease.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Spironolactone",
    genericName: "Spironolactone",
    category: "Potassium-sparing Diuretic",
    usage: "Treats high blood pressure and heart failure.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Lamotrigine",
    genericName: "Lamotrigine",
    category: "Anticonvulsant",
    usage: "Treats seizures and bipolar disorder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Levetiracetam",
    genericName: "Levetiracetam",
    category: "Anticonvulsant",
    usage: "Treats seizures.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Mirtazapine",
    genericName: "Mirtazapine",
    category: "Antidepressant",
    usage: "Treats depression.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Diltiazem",
    genericName: "Diltiazem Hydrochloride",
    category: "Calcium Channel Blocker",
    usage: "Treats high blood pressure and chest pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Fluconazole",
    genericName: "Fluconazole",
    category: "Antifungal",
    usage: "Treats fungal infections.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Ciprofloxacin",
    genericName: "Ciprofloxacin Hydrochloride",
    category: "Fluoroquinolone Antibiotic",
    usage: "Treats various bacterial infections.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Valproic Acid",
    genericName: "Valproic Acid",
    category: "Anticonvulsant",
    usage: "Treats seizures, bipolar disorder, and prevents migraines.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Lithium",
    genericName: "Lithium Carbonate",
    category: "Mood Stabilizer",
    usage: "Treats bipolar disorder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Amiodarone",
    genericName: "Amiodarone Hydrochloride",
    category: "Antiarrhythmic",
    usage: "Treats severe irregular heartbeats.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Digoxin",
    genericName: "Digoxin",
    category: "Antiarrhythmic",
    usage: "Treats heart failure and atrial fibrillation.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Doxycycline",
    genericName: "Doxycycline Hyclate",
    category: "Tetracycline Antibiotic",
    usage: "Treats various bacterial infections and acne.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Naproxen",
    genericName: "Naproxen Sodium",
    category: "NSAID",
    usage: "Treats pain and inflammation.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Famotidine",
    genericName: "Famotidine",
    category: "H2 Blocker",
    usage: "Treats stomach ulcers and GERD.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Oxybutynin",
    genericName: "Oxybutynin Chloride",
    category: "Antispasmodic",
    usage: "Treats overactive bladder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Sildenafil",
    genericName: "Sildenafil Citrate",
    category: "PDE5 Inhibitor",
    usage: "Treats erectile dysfunction and pulmonary arterial hypertension.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Tadalafil",
    genericName: "Tadalafil",
    category: "PDE5 Inhibitor",
    usage: "Treats erectile dysfunction and enlarged prostate.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Cephalexin",
    genericName: "Cephalexin",
    category: "Cephalosporin Antibiotic",
    usage: "Treats bacterial infections.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Phenytoin",
    genericName: "Phenytoin Sodium",
    category: "Anticonvulsant",
    usage: "Treats seizures.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Carbamazepine",
    genericName: "Carbamazepine",
    category: "Anticonvulsant",
    usage: "Treats seizures and nerve pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Topiramate",
    genericName: "Topiramate",
    category: "Anticonvulsant",
    usage: "Treats seizures and prevents migraines.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Pregabalin",
    genericName: "Pregabalin",
    category: "Anticonvulsant / Nerve Pain",
    usage: "Treats nerve pain, seizures, and fibromyalgia.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Acetaminophen",
    genericName: "Acetaminophen",
    category: "Analgesic",
    usage: "Treats pain and fever.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Bactrim",
    genericName: "Sulfamethoxazole/Trimethoprim",
    category: "Antibiotic",
    usage: "Treats bacterial infections like UTIs.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Zyrtec",
    genericName: "Cetirizine",
    category: "Antihistamine",
    usage: "Treats allergies.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Allegra",
    genericName: "Fexofenadine",
    category: "Antihistamine",
    usage: "Treats allergies.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Xanax",
    genericName: "Alprazolam",
    category: "Benzodiazepine",
    usage: "Treats anxiety.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Adderall",
    genericName: "Amphetamine/Dextroamphetamine",
    category: "Stimulant",
    usage: "Treats ADHD.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Ritalin",
    genericName: "Methylphenidate",
    category: "Stimulant",
    usage: "Treats ADHD.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Vicodin",
    genericName: "Hydrocodone/Acetaminophen",
    category: "Opioid",
    usage: "Treats moderate to severe pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Percocet",
    genericName: "Oxycodone/Acetaminophen",
    category: "Opioid",
    usage: "Treats moderate to severe pain.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Valium",
    genericName: "Diazepam",
    category: "Benzodiazepine",
    usage: "Treats anxiety, muscle spasms, and seizures.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Klonopin",
    genericName: "Clonazepam",
    category: "Benzodiazepine",
    usage: "Treats seizures and panic disorder.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  },
  {
    name: "Ativan",
    genericName: "Lorazepam",
    category: "Benzodiazepine",
    usage: "Treats anxiety.",
    dosage: "Standard adult dosage as directed by healthcare provider.",
    sideEffects: ["Headache", "Nausea", "Dizziness", "Fatigue"],
    warnings: ["Consult your healthcare provider before use", "Report any severe reactions", "Keep out of reach of children"],
    alternatives: ["Consult doctor for alternatives"],
    otc: true
  }
];

export const symptomsList: Symptom[] = [
  { id: 'fever', name: 'Fever', icon: '🌡️', severity: 'moderate' },
  { id: 'headache', name: 'Headache', icon: '🤕', severity: 'mild' },
  { id: 'cough', name: 'Cough', icon: '😷', severity: 'mild' },
  { id: 'cold', name: 'Cold / Runny Nose', icon: '🤧', severity: 'mild' },
  { id: 'sore-throat', name: 'Sore Throat', icon: '😣', severity: 'mild' },
  { id: 'body-pain', name: 'Body Pain', icon: '💪', severity: 'moderate' },
  { id: 'stomach-pain', name: 'Stomach Pain', icon: '🤢', severity: 'moderate' },
  { id: 'nausea', name: 'Nausea / Vomiting', icon: '🤮', severity: 'moderate' },
  { id: 'diarrhea', name: 'Diarrhea', icon: '💧', severity: 'moderate' },
  { id: 'fatigue', name: 'Fatigue', icon: '😴', severity: 'mild' },
  { id: 'dizziness', name: 'Dizziness', icon: '😵', severity: 'moderate' },
  { id: 'chest-pain', name: 'Chest Pain', icon: '❤️‍🩹', severity: 'severe' },
  { id: 'breathing-difficulty', name: 'Difficulty Breathing', icon: '🫁', severity: 'severe' },
  { id: 'allergy', name: 'Allergic Reaction', icon: '🤒', severity: 'moderate' },
  { id: 'skin-rash', name: 'Skin Rash / Itching', icon: '🔴', severity: 'mild' },
  { id: 'joint-pain', name: 'Joint Pain', icon: '🦴', severity: 'moderate' },
  { id: 'eye-irritation', name: 'Eye Irritation', icon: '👁️', severity: 'mild' },
  { id: 'ear-pain', name: 'Ear Pain', icon: '👂', severity: 'moderate' },
  { id: 'insomnia', name: 'Insomnia', icon: '🌙', severity: 'mild' },
  { id: 'anxiety', name: 'Anxiety', icon: '😰', severity: 'moderate' },
];

export function analyzeSymptomsAI(symptoms: string[]): Diagnosis {
  const symptomSet = new Set(symptoms.map(s => s.toLowerCase()));

  // Emergency conditions
  if (symptomSet.has('chest-pain') && symptomSet.has('breathing-difficulty')) {
    return {
      illness: "Potential Cardiac Emergency",
      confidence: 85,
      description: "Chest pain combined with breathing difficulty could indicate a serious cardiac or pulmonary condition. This requires immediate medical attention.",
      advice: [
        "Call emergency services (911/112) immediately",
        "Do not drive yourself to the hospital",
        "Chew an aspirin if not allergic (325mg)",
        "Sit upright and try to stay calm",
        "Loosen tight clothing"
      ],
      medicines: ["Aspirin (emergency only)"],
      homeRemedies: [],
      seeDoctor: true,
      urgency: 'emergency'
    };
  }

  // Flu-like symptoms
  if (symptomSet.has('fever') && symptomSet.has('cough') && (symptomSet.has('body-pain') || symptomSet.has('fatigue'))) {
    return {
      illness: "Influenza (Flu)",
      confidence: 78,
      description: "Your symptoms suggest a possible influenza infection. Flu is caused by influenza viruses and typically resolves in 1-2 weeks with proper rest.",
      advice: [
        "Rest and get plenty of sleep",
        "Stay hydrated — drink water, broths, and electrolyte drinks",
        "Monitor temperature regularly",
        "Isolate to prevent spreading",
        "See a doctor if fever exceeds 103°F (39.4°C) or lasts more than 3 days"
      ],
      medicines: ["Paracetamol", "Ibuprofen", "Dextromethorphan"],
      homeRemedies: [
        "Warm chicken soup or vegetable broth",
        "Honey and ginger tea",
        "Steam inhalation with eucalyptus",
        "Warm salt water gargle",
        "Vitamin C rich fruits"
      ],
      seeDoctor: false,
      urgency: 'medium'
    };
  }

  // Common cold
  if (symptomSet.has('cold') && (symptomSet.has('cough') || symptomSet.has('sore-throat'))) {
    return {
      illness: "Common Cold",
      confidence: 82,
      description: "Your symptoms are consistent with a common cold, caused by viral infections. It typically resolves within 7-10 days.",
      advice: [
        "Rest adequately",
        "Drink warm fluids frequently",
        "Use saline nasal spray for congestion",
        "Avoid cold/chilled beverages",
        "See a doctor if symptoms worsen after 10 days"
      ],
      medicines: ["Cetirizine", "Dextromethorphan", "Paracetamol"],
      homeRemedies: [
        "Warm turmeric milk (golden milk)",
        "Honey with warm water and lemon",
        "Ginger and tulsi (basil) tea",
        "Steam inhalation",
        "Gargling with warm salt water",
        "Adequate rest and hydration"
      ],
      seeDoctor: false,
      urgency: 'low'
    };
  }

  // Gastric issues
  if (symptomSet.has('stomach-pain') && (symptomSet.has('nausea') || symptomSet.has('diarrhea'))) {
    return {
      illness: "Gastroenteritis / Stomach Upset",
      confidence: 75,
      description: "Your symptoms may indicate gastroenteritis (stomach flu) or food-related stomach upset. Usually resolves in 1-3 days.",
      advice: [
        "Stay hydrated with ORS or clear fluids",
        "Eat bland foods (BRAT diet: Bananas, Rice, Applesauce, Toast)",
        "Avoid dairy, spicy, and fatty foods",
        "Rest your stomach — eat small, frequent meals",
        "See a doctor if symptoms persist beyond 3 days or if there is blood in stool"
      ],
      medicines: ["ORS (Oral Rehydration Salts)", "Loperamide", "Omeprazole"],
      homeRemedies: [
        "Ginger ale or ginger tea",
        "Peppermint tea",
        "Plain rice water",
        "Bananas for potassium",
        "Fennel seed water",
        "Probiotics (yogurt with live cultures)"
      ],
      seeDoctor: false,
      urgency: 'medium'
    };
  }

  // Migraine / Severe headache
  if (symptomSet.has('headache') && (symptomSet.has('nausea') || symptomSet.has('dizziness'))) {
    return {
      illness: "Migraine / Tension Headache",
      confidence: 70,
      description: "Your symptoms suggest a possible migraine or severe tension headache. Migraines can cause intense throbbing pain, often with nausea and sensitivity to light.",
      advice: [
        "Rest in a dark, quiet room",
        "Apply a cold compress to your forehead",
        "Stay hydrated",
        "Avoid screen time and bright lights",
        "See a doctor if headaches are frequent or unusually severe"
      ],
      medicines: ["Paracetamol", "Ibuprofen", "Aspirin"],
      homeRemedies: [
        "Peppermint oil on temples",
        "Ginger tea",
        "Lavender aromatherapy",
        "Adequate sleep",
        "Cold compress on forehead",
        "Deep breathing exercises"
      ],
      seeDoctor: false,
      urgency: 'medium'
    };
  }

  // Allergic reaction
  if (symptomSet.has('allergy') || (symptomSet.has('skin-rash') && symptomSet.has('cold'))) {
    return {
      illness: "Allergic Reaction",
      confidence: 72,
      description: "Your symptoms suggest an allergic reaction. Allergies occur when the immune system reacts to a foreign substance.",
      advice: [
        "Identify and avoid the allergen if possible",
        "Take an antihistamine",
        "Use cold compress for skin irritation",
        "Seek immediate help if throat swelling or difficulty breathing occurs",
        "See an allergist for recurring issues"
      ],
      medicines: ["Cetirizine", "Diphenhydramine", "Montelukast"],
      homeRemedies: [
        "Cold compress on rash",
        "Oatmeal bath for skin irritation",
        "Local honey for seasonal allergies",
        "Nasal saline irrigation",
        "Keep windows closed during high pollen",
        "Aloe vera gel for skin irritation"
      ],
      seeDoctor: false,
      urgency: 'medium'
    };
  }

  // Simple fever
  if (symptomSet.has('fever')) {
    return {
      illness: "Viral Fever",
      confidence: 68,
      description: "Isolated fever often indicates a viral infection. The body raises its temperature to fight off pathogens. Most viral fevers resolve within 3-5 days.",
      advice: [
        "Take a fever reducer like Paracetamol",
        "Stay well hydrated",
        "Rest as much as possible",
        "Use lukewarm compress if temperature is high",
        "Monitor temperature every 4-6 hours",
        "See a doctor if fever exceeds 103°F or lasts more than 3 days"
      ],
      medicines: ["Paracetamol", "Ibuprofen"],
      homeRemedies: [
        "Lukewarm sponge bath",
        "Drink plenty of water and juices",
        "Light, easily digestible food",
        "Rest in comfortable clothing",
        "Tulsi (basil) and ginger tea"
      ],
      seeDoctor: false,
      urgency: 'medium'
    };
  }

  // Simple headache
  if (symptomSet.has('headache')) {
    return {
      illness: "Tension Headache",
      confidence: 74,
      description: "Tension headaches are the most common type, causing a dull, aching sensation around the head. Often related to stress, poor posture, or dehydration.",
      advice: [
        "Take a pain reliever",
        "Drink water — dehydration is a common cause",
        "Take breaks from screen time",
        "Practice good posture",
        "Try gentle neck stretches"
      ],
      medicines: ["Paracetamol", "Ibuprofen", "Aspirin"],
      homeRemedies: [
        "Stay hydrated",
        "Peppermint oil on temples",
        "Hot/cold compress on neck",
        "Short walk in fresh air",
        "Gentle scalp massage",
        "Reduce caffeine intake"
      ],
      seeDoctor: false,
      urgency: 'low'
    };
  }

  // Simple cough
  if (symptomSet.has('cough')) {
    return {
      illness: "Acute Cough / Bronchial Irritation",
      confidence: 65,
      description: "A cough is usually the body's way of clearing irritants from the airways. It can be caused by viral infections, allergies, or environmental factors.",
      advice: [
        "Stay hydrated",
        "Use a humidifier",
        "Avoid irritants like smoke",
        "Try cough suppressants for dry cough",
        "See a doctor if cough persists beyond 3 weeks or produces blood"
      ],
      medicines: ["Dextromethorphan", "Cetirizine"],
      homeRemedies: [
        "Honey (1-2 teaspoons)",
        "Warm water with honey and lemon",
        "Ginger tea",
        "Steam inhalation",
        "Turmeric milk",
        "Throat lozenges"
      ],
      seeDoctor: false,
      urgency: 'low'
    };
  }

  // Default
  return {
    illness: "General Discomfort",
    confidence: 50,
    description: "Based on the symptoms you've described, there could be multiple causes. For a more accurate assessment, please provide more details or consult a healthcare professional.",
    advice: [
      "Monitor your symptoms",
      "Stay hydrated and rest",
      "Take OTC pain relievers if needed",
      "Maintain a healthy diet",
      "Consult a doctor if symptoms persist or worsen"
    ],
    medicines: ["Paracetamol"],
    homeRemedies: [
      "Adequate rest and sleep",
      "Stay hydrated",
      "Balanced nutrition",
      "Light exercise if feeling up to it",
      "Stress management"
    ],
    seeDoctor: true,
    urgency: 'low'
  };
}

export function getMedicineInfo(query: string): Medicine | null {
  const q = query.toLowerCase();
  return medicineDatabase.find(m =>
    m.name.toLowerCase().includes(q) ||
    m.genericName.toLowerCase().includes(q)
  ) || null;
}

export function searchMedicines(query: string): Medicine[] {
  const q = query.toLowerCase();
  return medicineDatabase.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.genericName.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q) ||
    m.usage.toLowerCase().includes(q)
  );
}

export const emergencyTips = [
  {
    title: "Heart Attack",
    icon: "❤️",
    symptoms: ["Chest pain or pressure", "Pain in arm, jaw, or back", "Shortness of breath", "Cold sweat"],
    actions: ["Call emergency services immediately", "Chew aspirin (325mg) if not allergic", "Lie down with head elevated", "Loosen tight clothing", "Be ready to perform CPR"]
  },
  {
    title: "Stroke",
    icon: "🧠",
    symptoms: ["Sudden numbness in face/arm/leg", "Confusion or trouble speaking", "Trouble seeing", "Severe headache", "Loss of balance"],
    actions: ["Remember FAST: Face, Arms, Speech, Time", "Call emergency services immediately", "Note the time symptoms started", "Do not give food or drink", "Keep the person comfortable"]
  },
  {
    title: "Severe Allergic Reaction",
    icon: "⚠️",
    symptoms: ["Swelling of face/throat", "Difficulty breathing", "Rapid heartbeat", "Dizziness", "Hives or rash"],
    actions: ["Use epinephrine auto-injector if available", "Call emergency services", "Lay person flat with legs raised", "Loosen tight clothing", "If vomiting, turn on side"]
  },
  {
    title: "Choking",
    icon: "🫁",
    symptoms: ["Cannot speak or breathe", "Clutching throat", "Turning blue", "Weak cough"],
    actions: ["Perform Heimlich maneuver", "5 back blows then 5 abdominal thrusts", "Call emergency if object not dislodged", "For infants: 5 back blows + 5 chest thrusts", "Begin CPR if person becomes unconscious"]
  },
  {
    title: "Burns",
    icon: "🔥",
    symptoms: ["Red, blistered, or charred skin", "Pain and swelling", "White or blackened skin (severe)"],
    actions: ["Cool burn under running water for 20 minutes", "Do NOT use ice or butter", "Cover with clean, non-stick dressing", "Take pain reliever if needed", "Seek medical help for large or deep burns"]
  },
  {
    title: "Seizure",
    icon: "⚡",
    symptoms: ["Uncontrollable shaking", "Loss of consciousness", "Stiffening of body", "Confusion after episode"],
    actions: ["Clear area of dangerous objects", "Do NOT restrain the person", "Do NOT put anything in mouth", "Turn on side after shaking stops", "Call emergency if seizure lasts > 5 minutes"]
  }
];

export function generateChatResponse(message: string): string {
  const lower = message.toLowerCase();

  // Medicine queries
  const medicineMatch = medicineDatabase.find(m =>
    lower.includes(m.name.toLowerCase()) ||
    lower.includes(m.genericName.toLowerCase())
  );

  if (medicineMatch) {
    return `## ${medicineMatch.name} (${medicineMatch.genericName})\n\n**Category:** ${medicineMatch.category}\n\n**Usage:** ${medicineMatch.usage}\n\n**Dosage:** ${medicineMatch.dosage}\n\n**Side Effects:** ${medicineMatch.sideEffects.join(', ')}\n\n**Warnings:** ${medicineMatch.warnings.join('. ')}\n\n**Alternatives:** ${medicineMatch.alternatives.join(', ')}\n\n${medicineMatch.otc ? '✅ Available over-the-counter' : '⚠️ Prescription required'}`;
  }

  // Symptom-related queries
  if (lower.includes('fever') || lower.includes('temperature')) {
    return "For fever, I'd recommend:\n\n🌡️ **Immediate Relief:**\n- Take **Paracetamol** (500-1000mg) or **Ibuprofen** (200-400mg)\n- Stay hydrated with water and electrolytes\n\n🏠 **Home Remedies:**\n- Lukewarm sponge bath\n- Light, easy-to-digest food\n- Tulsi and ginger tea\n\n⚠️ **See a doctor if:**\n- Fever exceeds 103°F (39.4°C)\n- Lasts more than 3 days\n- Accompanied by severe headache or rash";
  }

  if (lower.includes('headache') || lower.includes('head pain') || lower.includes('migraine')) {
    return "For headaches, here's my advice:\n\n💊 **Quick Relief:**\n- **Paracetamol** (500-1000mg) or **Ibuprofen** (200-400mg)\n- Drink plenty of water\n\n🏠 **Home Remedies:**\n- Apply peppermint oil on temples\n- Rest in a dark, quiet room\n- Cold/hot compress on forehead\n- Gentle neck and shoulder stretches\n\n⚠️ **See a doctor if:**\n- Headaches are frequent or severe\n- Accompanied by vision changes\n- Sudden, worst headache of your life";
  }

  if (lower.includes('cough') || lower.includes('cold') || lower.includes('sore throat')) {
    return "For cough and cold symptoms:\n\n💊 **Medicines:**\n- **Dextromethorphan** for dry cough\n- **Cetirizine** for runny nose/sneezing\n- **Paracetamol** for any accompanying pain/fever\n\n🏠 **Home Remedies:**\n- Warm honey and lemon water\n- Ginger and tulsi tea\n- Steam inhalation with eucalyptus\n- Salt water gargle for sore throat\n- Turmeric milk before bed\n\n⚠️ **See a doctor if:**\n- Cough lasts more than 3 weeks\n- You're coughing up blood\n- High fever with thick green mucus";
  }

  if (lower.includes('stomach') || lower.includes('digestion') || lower.includes('acidity') || lower.includes('gas')) {
    return "For stomach and digestive issues:\n\n💊 **Medicines:**\n- **Antacid (Tums)** for quick acid relief\n- **Omeprazole** for persistent acidity\n- **ORS** if dehydrated from vomiting/diarrhea\n\n🏠 **Home Remedies:**\n- Ginger or peppermint tea\n- Fennel seed water\n- BRAT diet (Bananas, Rice, Applesauce, Toast)\n- Cumin water or jeera water\n- Probiotics like yogurt\n\n⚠️ **See a doctor if:**\n- Persistent pain for more than 3 days\n- Blood in stool or vomit\n- Severe cramping or bloating";
  }

  // General health queries
  if (lower.includes('sleep') || lower.includes('insomnia')) {
    return "For better sleep:\n\n💤 **Tips:**\n- Maintain a consistent sleep schedule\n- Avoid screens 1 hour before bed\n- Keep your room dark and cool\n- Try relaxation techniques\n\n🏠 **Natural Remedies:**\n- Chamomile tea before bed\n- Warm milk with turmeric\n- Lavender aromatherapy\n- Magnesium-rich foods\n\n💊 **OTC Options:** Diphenhydramine (short-term only)\n\n⚠️ **See a doctor if** insomnia persists more than 4 weeks";
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hello! 👋 I'm your AI Health Assistant. I can help you with:\n\n🩺 **Symptom Analysis** — Describe your symptoms and I'll suggest possible causes\n💊 **Medicine Info** — Ask about any medicine's usage, dosage, or side effects\n🏠 **Home Remedies** — Natural remedies for common ailments\n⚡ **Emergency Tips** — First aid guidance\n\nHow can I help you today?";
  }

  if (lower.includes('thank')) {
    return "You're welcome! 😊 Remember, I'm here whenever you need health guidance. Stay healthy! \n\n⚕️ *Always consult a qualified healthcare professional for persistent or serious symptoms.*";
  }

  // Default response
  return "I understand your concern. Here are some general health tips:\n\n✅ **General Wellness:**\n- Stay hydrated (8 glasses of water daily)\n- Get 7-9 hours of quality sleep\n- Exercise regularly (30 min/day)\n- Eat a balanced diet rich in fruits and vegetables\n- Manage stress through meditation or deep breathing\n\nCould you be more specific about your symptoms? You can:\n- **Describe your symptoms** for a more targeted analysis\n- **Ask about a specific medicine** (e.g., 'Tell me about Paracetamol')\n- **Use the Symptom Checker** for a structured analysis\n\n⚕️ *Remember: Always consult a healthcare professional for persistent symptoms.*";
}
