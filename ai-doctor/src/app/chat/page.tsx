'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Send, Mic, MicOff, Stethoscope, Bot, User, 
  Shield, AlertTriangle, ChevronRight, Sparkles,
  Activity, Pill, Home, Clock
} from 'lucide-react';
import { symptomsList, analyzeSymptomsAI, generateChatResponse } from '@/lib/data';
import { ChatMessage, Diagnosis } from '@/lib/types';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! 👋 I'm **MedAI**, your AI health assistant. I can help you with:\n\n🩺 **Symptom Analysis** — Describe your symptoms\n💊 **Medicine Info** — Ask about any medicine\n🏠 **Home Remedies** — Natural treatment options\n\nYou can type your symptoms below or use the **Quick Symptom Selector** for a structured analysis.\n\n⚕️ *Remember: I'm not a replacement for professional medical advice.*",
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showSymptomPicker, setShowSymptomPicker] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string, type?: ChatMessage['type'], data?: ChatMessage['data']) => {
    const msg: ChatMessage = {
      id: Date.now().toString() + Math.random(),
      role,
      content,
      timestamp: new Date(),
      type: type || 'text',
      data
    };
    setMessages(prev => [...prev, msg]);
    return msg;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    addMessage('user', userMsg);
    
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 800 + Math.random() * 1200));
    
    const response = generateChatResponse(userMsg);
    addMessage('assistant', response);
    setIsTyping(false);
  };

  const handleSymptomAnalysis = async () => {
    if (selectedSymptoms.length === 0) return;
    
    const symptomNames = selectedSymptoms.map(id => 
      symptomsList.find(s => s.id === id)?.name || id
    );
    
    addMessage('user', `I'm experiencing: ${symptomNames.join(', ')}`);
    setShowSymptomPicker(false);
    
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000));
    
    const diagnosis = analyzeSymptomsAI(selectedSymptoms);
    
    const diagContent = formatDiagnosis(diagnosis);
    addMessage('assistant', diagContent, 'diagnosis', diagnosis);
    setIsTyping(false);
    setSelectedSymptoms([]);

    // Save to localStorage for health history
    saveToHistory(symptomNames, diagnosis);
  };

  const saveToHistory = (symptoms: string[], diagnosis: Diagnosis) => {
    try {
      const existing = JSON.parse(localStorage.getItem('healthRecords') || '[]');
      existing.push({
        id: Date.now().toString(),
        date: new Date().toISOString(),
        symptoms,
        diagnosis: diagnosis.illness,
        medicines: diagnosis.medicines,
        notes: diagnosis.description
      });
      localStorage.setItem('healthRecords', JSON.stringify(existing));
    } catch {}
  };

  const formatDiagnosis = (d: Diagnosis): string => {
    const urgencyColors: Record<string, string> = {
      low: '🟢',
      medium: '🟡',
      high: '🟠',
      emergency: '🔴'
    };
    
    let text = `## ${urgencyColors[d.urgency]} Possible Condition: ${d.illness}\n\n`;
    text += `**Confidence:** ${d.confidence}%\n\n`;
    text += `${d.description}\n\n`;
    text += `### 💡 Advice\n${d.advice.map(a => `- ${a}`).join('\n')}\n\n`;
    text += `### 💊 Recommended Medicines\n${d.medicines.map(m => `- ${m}`).join('\n')}\n\n`;
    if (d.homeRemedies.length) {
      text += `### 🏠 Home Remedies\n${d.homeRemedies.map(r => `- ${r}`).join('\n')}\n\n`;
    }
    if (d.seeDoctor) {
      text += `### ⚠️ Please See a Doctor\nBased on your symptoms, we strongly recommend consulting a healthcare professional.\n\n`;
    }
    text += `---\n*⚕️ This is AI-generated guidance and should not replace professional medical advice.*`;
    return text;
  };

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleVoice = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      addMessage('assistant', "Sorry, voice input is not supported in your browser. Please try Chrome or Edge.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    const SpeechRecognition = (window as unknown as Record<string, unknown>).SpeechRecognition || (window as unknown as Record<string, unknown>).webkitSpeechRecognition;
    const recognition = new (SpeechRecognition as new () => { lang: string; onresult: (e: { results: { transcript: string }[][] }) => void; onend: () => void; onerror: () => void; start: () => void; })();
    recognition.lang = 'en-US';
    recognition.onresult = (event: { results: { transcript: string }[][] }) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.start();
  };

  const renderMessage = (msg: ChatMessage) => {
    const isUser = msg.role === 'user';
    
    return (
      <div key={msg.id} className={`chat-bubble flex gap-3 ${isUser ? 'flex-row-reverse' : ''} mb-4`}>
        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
          isUser ? 'bg-sky-500/20' : 'gradient-primary shadow-lg shadow-sky-500/20'
        }`}>
          {isUser ? <User className="w-4 h-4 text-sky-400" /> : <Bot className="w-4 h-4 text-white" />}
        </div>
        <div className={`max-w-[80%] ${isUser ? 'text-right' : ''}`}>
          <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser 
              ? 'bg-sky-500/15 text-slate-200 rounded-tr-md' 
              : 'glass rounded-tl-md text-slate-300'
          }`}>
            <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ 
              __html: formatMarkdown(msg.content) 
            }} />
          </div>
          <div className={`text-[10px] text-slate-600 mt-1 ${isUser ? 'text-right' : ''}`}>
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    );
  };

  const formatMarkdown = (text: string): string => {
    return text
      .replace(/### (.*)/g, '<h4 class="text-white font-semibold mt-3 mb-1 text-sm">$1</h4>')
      .replace(/## (.*)/g, '<h3 class="text-white font-bold mt-2 mb-2 text-base">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-slate-400 italic">$1</em>')
      .replace(/^- (.*)/gm, '<div class="flex gap-2 ml-1 my-0.5"><span class="text-sky-400 mt-0.5">•</span><span>$1</span></div>')
      .replace(/---/g, '<hr class="border-white/10 my-3">')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="min-h-screen bg-grid pt-16 flex flex-col">
      {/* Header */}
      <div className="glass border-b border-white/5 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white">MedAI Doctor</h1>
              <p className="text-xs text-emerald-400">● Online — Ready to help</p>
            </div>
          </div>
          <button
            onClick={() => setShowSymptomPicker(!showSymptomPicker)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs font-medium text-sky-400 hover:bg-white/5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Symptom Checker
          </button>
        </div>
      </div>

      {/* Symptom Picker Panel */}
      {showSymptomPicker && (
        <div className="glass-light border-b border-white/5 px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-400" />
              Select Your Symptoms
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {symptomsList.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-inner'
                      : 'glass text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  } ${symptom.severity === 'severe' ? 'border-red-500/20' : ''}`}
                >
                  <span>{symptom.icon}</span>
                  {symptom.name}
                  {symptom.severity === 'severe' && <AlertTriangle className="w-3 h-3 text-red-400" />}
                </button>
              ))}
            </div>
            {selectedSymptoms.length > 0 && (
              <button
                onClick={handleSymptomAnalysis}
                className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white text-sm font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Analyze {selectedSymptoms.length} Symptom{selectedSymptoms.length > 1 ? 's' : ''}
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {messages.map(renderMessage)}

          {/* Typing indicator */}
          {isTyping && (
            <div className="chat-bubble flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="glass rounded-2xl rounded-tl-md px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="typing-dot w-2 h-2 rounded-full bg-sky-400" />
                  <div className="typing-dot w-2 h-2 rounded-full bg-sky-400" />
                  <div className="typing-dot w-2 h-2 rounded-full bg-sky-400" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-2">
        <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { icon: Activity, label: "Check my symptoms", action: () => setShowSymptomPicker(true) },
            { icon: Pill, label: "What is Paracetamol?", action: () => { setInput("What is Paracetamol used for?"); } },
            { icon: Home, label: "Home remedies for cold", action: () => { setInput("home remedies for cold and cough"); } },
            { icon: Clock, label: "When to see a doctor?", action: () => { setInput("When should I visit a real doctor?"); } },
          ].map((qa) => {
            const Icon = qa.icon;
            return (
              <button
                key={qa.label}
                onClick={qa.action}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-slate-400 hover:text-sky-400 hover:bg-white/5 transition-all"
              >
                <Icon className="w-3 h-3" />
                {qa.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Area */}
      <div className="glass border-t border-white/5 px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleVoice}
              className={`shrink-0 p-2.5 rounded-xl transition-all ${
                isListening 
                  ? 'bg-red-500/20 text-red-400 animate-pulse' 
                  : 'glass text-slate-400 hover:text-sky-400 hover:bg-white/5'
              }`}
              title={isListening ? "Stop listening" : "Voice input"}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isListening ? "Listening..." : "Describe your symptoms or ask about a medicine..."}
                className="w-full px-4 py-2.5 rounded-xl glass bg-transparent text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/40 transition-all"
              />
            </div>
            
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="shrink-0 p-2.5 rounded-xl gradient-primary text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {/* Disclaimer */}
          <div className="flex items-center gap-1.5 mt-2">
            <Shield className="w-3 h-3 text-slate-600" />
            <p className="text-[10px] text-slate-600">
              MedAI provides health information only. Always consult a doctor for medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
