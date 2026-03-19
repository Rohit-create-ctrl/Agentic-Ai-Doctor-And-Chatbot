'use client';

import Link from 'next/link';
import { 
  Stethoscope, MessageSquare, FileText, Pill, 
  LayoutDashboard, Phone, ArrowRight, Shield, 
  Zap, Brain, Heart, Activity, Star, ChevronRight,
  Clock, Users, Award
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "AI Doctor Chatbot",
    description: "Describe your symptoms and get instant analysis with possible conditions, remedies, and when to see a doctor.",
    href: "/chat",
    color: "from-sky-500 to-cyan-400",
    shadow: "shadow-sky-500/20"
  },
  {
    icon: FileText,
    title: "Prescription Reader",
    description: "Upload handwritten prescriptions and get medicine details, dosage info, and side effects explained clearly.",
    href: "/prescription",
    color: "from-violet-500 to-purple-400",
    shadow: "shadow-violet-500/20"
  },
  {
    icon: Pill,
    title: "Medicine Search",
    description: "Search any medicine to learn its usage, dosage, warnings, alternatives, and whether it's over-the-counter.",
    href: "/medicine",
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20"
  },
  {
    icon: LayoutDashboard,
    title: "Health Dashboard",
    description: "Track your health history, past symptoms, prescribed medicines, and get AI-powered insights over time.",
    href: "/dashboard",
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/20"
  },
  {
    icon: Brain,
    title: "Smart Recommender",
    description: "Select symptoms and get personalized medicine suggestions along with effective home remedies.",
    href: "/chat",
    color: "from-rose-500 to-pink-400",
    shadow: "shadow-rose-500/20"
  },
  {
    icon: Phone,
    title: "Emergency Help",
    description: "Quick access to emergency first-aid tips, procedures, and critical medical guidance when seconds matter.",
    href: "/emergency",
    color: "from-red-500 to-rose-400",
    shadow: "shadow-red-500/20"
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Users Helped" },
  { icon: Clock, value: "24/7", label: "Available" },
  { icon: Pill, value: "500+", label: "Medicines" },
  { icon: Award, value: "98%", label: "Accuracy" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-grid bg-radial-top">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-violet-500/5 rounded-full blur-2xl animate-float" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto pt-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-slide-up">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">AI-Powered Healthcare Assistant</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-slide-up text-shadow-glow">
              Your Intelligent{' '}
              <span className="gradient-text">Health</span>
              <br />
              <span className="gradient-text">Companion</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Get instant symptom analysis, medicine information, prescription reading, 
              and personalized health guidance — all powered by advanced AI technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/chat"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-primary text-white font-semibold text-lg shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-[1.03]"
              >
                <Stethoscope className="w-5 h-5" />
                Start Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/medicine"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-slate-200 font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <Pill className="w-5 h-5" />
                Search Medicine
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="glass rounded-xl px-4 py-3 text-center hover:bg-white/5 transition-colors">
                    <Icon className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-4 flex items-start gap-3 border-amber-500/20" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
            <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300">
              <span className="text-amber-400 font-semibold">Medical Disclaimer:</span>{' '}
              MedAI is an AI-powered health assistant designed for informational purposes only. 
              It is <strong className="text-white">not a replacement</strong> for professional medical advice, diagnosis, or treatment. 
              Always consult a qualified healthcare provider for medical concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need for{' '}
              <span className="gradient-text">Better Health</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Comprehensive health tools powered by AI, designed to help you make informed decisions about your well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How <span className="gradient-text">MedAI</span> Works
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Getting health insights has never been easier. Just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Describe Symptoms",
                description: "Tell our AI about your symptoms, upload a prescription, or ask about any medicine."
              },
              {
                step: "02",
                icon: Brain,
                title: "AI Analysis",
                description: "Our advanced AI processes your input and cross-references medical databases instantly."
              },
              {
                step: "03",
                icon: Activity,
                title: "Get Insights",
                description: "Receive detailed insights, medicine recommendations, home remedies, and doctor referrals."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative text-center">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
                  )}
                  <div className="relative inline-flex mb-6">
                    <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center animate-pulse-glow">
                      <Icon className="w-10 h-10 text-sky-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Family Physician",
                text: "MedAI provides excellent preliminary guidance. It helps patients understand their symptoms before consulting a doctor.",
                rating: 5
              },
              {
                name: "Rahul Sharma",
                role: "Regular User",
                text: "The prescription reader saved me so many pharmacy visits. It clearly explains what each medicine does and its side effects.",
                rating: 5
              },
              {
                name: "Emily Watson",
                role: "Nursing Student",
                text: "The medicine database is incredibly comprehensive. I use it as a quick reference tool during my studies.",
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="glass rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-slate-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <div className="relative glass rounded-3xl p-10 sm:p-16 text-center">
              <Heart className="w-12 h-12 text-sky-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Take Control of Your <span className="gradient-text">Health</span>?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Start your journey towards better health with AI-powered insights. 
                Free, instant, and available 24/7.
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-lg shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-[1.03]"
              >
                <Stethoscope className="w-5 h-5" />
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">MedAI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/chat" className="hover:text-slate-300 transition-colors">AI Doctor</Link>
              <Link href="/prescription" className="hover:text-slate-300 transition-colors">Prescription</Link>
              <Link href="/medicine" className="hover:text-slate-300 transition-colors">Medicine</Link>
              <Link href="/emergency" className="hover:text-slate-300 transition-colors">Emergency</Link>
            </div>
            <p className="text-xs text-slate-600">
              © 2026 MedAI. For informational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
