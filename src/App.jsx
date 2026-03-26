import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Zap, 
  Code, 
  Languages, 
  TrendingUp, 
  CheckCircle2, 
  Briefcase,
  Rocket,
  Users,
  Brain,
  Heart,
  Sparkles,
  X,
  ShieldCheck,
  FileText,
  Award,
  Calendar,
  Clock
} from 'lucide-react';

const App = () => {
  const [matchScore, setMatchScore] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [activePolicy, setActivePolicy] = useState(null); // 'privacy' or 'internship'

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const checklist = [
    { id: 'freshman', label: 'I am a fresher or early career professional' },
    { id: 'mysuru', label: 'I am based in or can commute to Mysuru' },
    { id: 'bilingual', label: 'I am fluent in both Kannada and English' },
    { id: 'aiml', label: 'I am eager to learn and apply AI/ML in real business' },
    { id: 'impact', label: 'I am passionate about Women Empowerment & Youth Power' },
    { id: 'hustle', label: 'I have a "hustle" mindset and love building things' }
  ];

  const toggleCheck = (id) => {
    const newChecked = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newChecked);
    const score = Object.values(newChecked).filter(Boolean).length;
    setMatchScore(score);
  };

  const FeatureCard = ({ icon: Icon, title, description, colorClass = "bg-indigo-50 text-indigo-600" }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  const PolicyModal = ({ type, onClose }) => {
    const content = type === 'privacy' ? {
      title: "Privacy Policy",
      icon: <ShieldCheck className="text-indigo-600" />,
      sections: [
        { h: "Information We Collect", p: "We collect personal information you voluntarily provide, including your name, contact details, resume, and professional background, specifically for recruitment purposes at Ootah Foods." },
        { h: "How We Use Your Data", p: "Your data is used solely to evaluate your candidacy for the Founding Intern role. We do not sell or share your personal information with third-party marketing agencies." },
        { h: "Data Retention", p: "Applications are stored securely for a period of 6 months. You may request the deletion of your data at any time by emailing admin@ootahfoods.com." },
        { h: "Security", p: "We implement industry-standard administrative and technical measures to protect your personal information from unauthorized access or disclosure." }
      ]
    } : {
      title: "Internship Policy",
      icon: <FileText className="text-rose-600" />,
      sections: [
        { h: "Nature of Engagement", p: "This is a founding-stage internship. Roles are dynamic and require a high degree of flexibility. Working hours are 6 hours per day, from Monday to Friday. This position is based in-person in Mysuru." },
        { h: "Duration & Commencement", p: "The internship will be for a fixed duration of 6 months, commencing from April 15, 2026." },
        { h: "Stipend & Benefits", p: "Interns will receive a reasonable monthly stipend commensurate with the role's responsibilities and the early-stage nature of the startup. Upon successful completion of the 6-month program, interns will be awarded an official Internship Certificate." },
        { h: "Leave Policy", p: "Interns are eligible for 2 days of leave per month, subject to prior approval and coordination with the founding team." },
        { h: "Confidentiality & IP", p: "As a founding intern, you will have access to proprietary business strategies. You agree to maintain strict confidentiality and acknowledge that all work products created during the internship remain the intellectual property of the startup." },
        { h: "Code of Conduct", p: "We maintain a zero-tolerance policy for discrimination or harassment. We are committed to a safe, inclusive environment that empowers women and youth." },
        { h: "Termination", p: "The internship is an 'at-will' arrangement. Either party may terminate the engagement with a 1-week notice period. We reserve the right to terminate immediately for any breach of conduct or confidentiality." }
      ]
    };

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl max-h-[85vh] overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-50 rounded-xl">{content.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900">{content.title}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-8 overflow-y-auto space-y-6">
            {content.sections.map((s, i) => (
              <div key={i}>
                <h4 className="font-bold text-slate-900 mb-2">{s.h}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{s.p}</p>
              </div>
            ))}
            <div className="pt-4 text-xs text-slate-400">Last updated: March 2026 • Ootah Foods Recruitment Team</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {activePolicy && <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />}

      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold tracking-tight text-xl">Make an Impact in <span className="text-indigo-600">Mysuru</span></span>
          </div>
          <span className="hidden md:inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
            Now Hiring
          </span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        {/* Hero Section */}
        <section className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
              <MapPin size={16} />
              Mysuru, Karnataka • In-person
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-bold border border-rose-100">
              <Clock size={16} />
              Apply by: April 05, 2026
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Hiring: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500">Founding Intern</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
            We are a mission-driven startup in Mysuru focused on <span className="text-rose-600 font-bold">Women Empowerment</span> and <span className="text-indigo-600 font-bold">Youth Power</span>. 
            Join us to build a future where tech and social impact meet.
          </p>
        </section>

        {/* Core Pillars */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <div className="h-1 w-20 bg-rose-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-rose-500">
                <Heart size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-rose-900 mb-2">Women Empowerment</h3>
                <p className="text-rose-800/80 leading-relaxed">We aim to create platforms and opportunities that uplift women in our local communities through tech and economic inclusion.</p>
              </div>
            </div>
            <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-indigo-500">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Enable Youth Power</h3>
                <p className="text-indigo-800/80 leading-relaxed">Enabling the next generation of leaders in Mysuru by providing real-world exposure to entrepreneurship and cutting-edge technology.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Will Do */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">What You Will Do</h2>
            <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Rocket}
              title="Build 0 to 1"
              description="Be the first to help build foundational systems for a socially impactful business."
            />
            <FeatureCard 
              icon={Brain}
              title="Tech for Good"
              description="Learn to apply AI and Machine Learning to solve real-world community problems."
              colorClass="bg-purple-50 text-purple-600"
            />
            <FeatureCard 
              icon={Code}
              title="Data Analytics"
              description="Research local markets and analyze data to find the most efficient ways to drive impact."
            />
            <FeatureCard 
              icon={Languages}
              title="Local Connect"
              description="Communicate our mission in Kannada & English to local stakeholders and partners."
              colorClass="bg-rose-50 text-rose-600"
            />
          </div>
        </section>

        {/* Why Us? */}
        <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 mb-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg"><TrendingUp size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Impact First</h4>
                    <p className="text-slate-400">Your work directly contributes to empowering women and enabling youth in Mysuru.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg"><Users size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Founding Seat</h4>
                    <p className="text-slate-400">Work directly with the founder. No bureaucracy, just pure building and learning.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center p-8 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm">
                  <span className="block text-4xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-400">Purpose</span>
                  <span className="text-slate-400 font-medium tracking-widest uppercase text-xs">Driven Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Checklist */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Is this your calling?</h2>
              <p className="text-slate-500">Check the boxes that apply to you</p>
            </div>
            
            <div className="space-y-4 mb-10">
              {checklist.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    checkedItems[item.id] 
                    ? 'border-indigo-600 bg-indigo-50 shadow-inner' 
                    : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                    checkedItems[item.id] ? 'bg-indigo-600' : 'bg-white border-2 border-slate-300'
                  }`}>
                    {checkedItems[item.id] && <CheckCircle2 size={16} className="text-white" />}
                  </div>
                  <span className={`font-medium ${checkedItems[item.id] ? 'text-indigo-900' : 'text-slate-600'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Match Score</span>
                <span className="text-sm font-bold text-indigo-600">{matchScore}/{checklist.length}</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-rose-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${(matchScore / checklist.length) * 100}%` }}
                ></div>
              </div>
              {matchScore >= 5 && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm font-medium rounded-lg text-center animate-pulse">
                   You are exactly who we are looking for!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Ready to empower women and enable youth in Mysuru? Applications are open until <span className="text-rose-600 font-bold">April 05, 2026</span>.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-tighter rounded-bl-xl">
                Deadline: April 05
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">WhatsApp Resume</span>
                <span className="text-2xl font-black text-indigo-600">+91 8056374666</span>
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Email Resume</span>
                <span className="text-xl font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">admin@ootahfoods.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm text-center md:text-left">
          <div>
            <p className="font-bold text-slate-600 mb-1">From Mysuru to World</p>
            <p>© 2026 Ootah Foods Services Pvt. Ltd.</p>
            <p className="mt-2 text-xs text-slate-300">Contact: admin@ootahfoods.com</p>
          </div>
          <div className="flex gap-8">
            <button onClick={() => setActivePolicy('privacy')} className="hover:text-indigo-600 transition-colors font-medium">Privacy Policy</button>
            <button onClick={() => setActivePolicy('internship')} className="hover:text-indigo-600 transition-colors font-medium">Internship Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;