import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Users,
  Briefcase,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle,
  AlertCircle,
  Award,
  Target,
  Zap,
  BookOpen,
  Send,
  RotateCcw,
  Printer,
  User,
  Mail,
  Phone,
  FileText,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  Circle,
} from 'lucide-react';
import {
  assessmentSections,
  likertOptions,
  calculateOverallResult,
  formatResultForEmail,
  totalQuestions,
  totalTimeMinutes,
} from '../data/assessmentData';
import type { CandidateInfo, TestResult, Question, Section } from '../data/assessmentData';

const sectionIcons: Record<string, React.ElementType> = {
  Users,
  Brain,
  Briefcase,
  Lightbulb,
  TrendingUp,
};

const gradeColors: Record<string, { bg: string; text: string; border: string }> = {
  'A+': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'A': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
  'B+': { bg: 'bg-navy-50', text: 'text-navy-700', border: 'border-navy-200' },
  'B': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'C': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'D': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  'F': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
};

function CircularProgress({ percentage, size = 120, strokeWidth = 8, label, color = '#d97706' }: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e8e0d0" strokeWidth={strokeWidth} />
          <motion.circle
            cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
            strokeLinecap="round" strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-2xl font-bold text-navy-800">{percentage}%</span>
        </div>
      </div>
      {label && <span className="text-xs font-medium text-navy-500 text-center max-w-[100px]">{label}</span>}
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = (current / total) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-navy-500 mb-1">
        <span>Progress</span>
        <span>{current} of {total} answered</span>
      </div>
      <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
        <motion.div className="h-full bg-amber rounded-full" initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }} />
      </div>
    </div>
  );
}

function SectionTimer({ minutes, onTimeUp }: { minutes: number; onTimeUp: () => void }) {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) { clearInterval(timer); onTimeUp(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, onTimeUp]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isLow = seconds < 60;

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isLow ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-cream-200 text-navy-700'}`}>
      <Clock size={18} className={isLow ? 'animate-pulse' : ''} />
      <span className="font-mono font-semibold text-sm">{mins}:{secs.toString().padStart(2, '0')}</span>
    </div>
  );
}

type AppState = 'registration' | 'instructions' | 'testing' | 'results';

export default function TestYourself() {
  const [appState, setAppState] = useState<AppState>('registration');
  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo>({
    fullName: '', email: '', phone: '', roleApplied: '', experience: '', education: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState<Record<string, Record<number, string | number>>>({});
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const currentSection: Section = assessmentSections[currentSectionIndex];
  const currentQuestion: Question | undefined = currentSection?.questions[currentQuestionIndex];
  const sectionAnswers = allAnswers[currentSection?.id] || {};
  const currentAnswer = currentQuestion ? sectionAnswers[currentQuestion.id] : undefined;

  const totalAnswered = Object.values(allAnswers).reduce((acc, s) => acc + Object.keys(s).length, 0);

  const handleCandidateChange = (field: keyof CandidateInfo, value: string) => {
    setCandidateInfo((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  const validateRegistration = () => {
    const errors: Record<string, string> = {};
    if (!candidateInfo.fullName.trim()) errors.fullName = 'Full name is required';
    if (!candidateInfo.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidateInfo.email)) errors.email = 'Valid email required';
    if (!candidateInfo.phone.trim()) errors.phone = 'Phone is required';
    if (!candidateInfo.roleApplied) errors.roleApplied = 'Select a role';
    if (!candidateInfo.experience) errors.experience = 'Select experience';
    if (!candidateInfo.education) errors.education = 'Select education';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAnswer = useCallback((value: string | number) => {
    if (!currentQuestion || !currentSection) return;
    setAllAnswers((prev) => ({
      ...prev,
      [currentSection.id]: { ...prev[currentSection.id], [currentQuestion.id]: value },
    }));
  }, [currentQuestion, currentSection]);

  const handleNext = () => {
    if (!currentSection) return;
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex((p) => p + 1);
    } else if (currentSectionIndex < assessmentSections.length - 1) {
      setCurrentSectionIndex((p) => p + 1);
      setCurrentQuestionIndex(0);
    } else {
      finishTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((p) => p - 1);
    } else if (currentSectionIndex > 0) {
      const prev = assessmentSections[currentSectionIndex - 1];
      setCurrentSectionIndex((p) => p - 1);
      setCurrentQuestionIndex(prev.questions.length - 1);
    }
  };

  const handleTimeUp = useCallback(() => {
    if (currentSectionIndex < assessmentSections.length - 1) {
      setCurrentSectionIndex((p) => p + 1);
      setCurrentQuestionIndex(0);
    } else {
      finishTest();
    }
  }, [currentSectionIndex]);

  const finishTest = () => {
    const result = calculateOverallResult(candidateInfo, allAnswers);
    setTestResult(result);
    setAppState('results');
  };

  const handleSendEmail = () => {
    if (!testResult) return;
    setEmailStatus('sending');
    try {
      const subject = `Candidate Assessment Result - ${testResult.candidateInfo.fullName}`;
      const body = formatResultForEmail(testResult);
      const mailtoLink = `mailto:hr@clannstaffing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      setEmailStatus('success');
    } catch {
      setEmailStatus('error');
    }
  };

  const handleRetake = () => {
    setAppState('registration');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAllAnswers({});
    setTestResult(null);
    setEmailStatus('idle');
    setCandidateInfo({ fullName: '', email: '', phone: '', roleApplied: '', experience: '', education: '' });
  };

  const isFirstQuestion = currentSectionIndex === 0 && currentQuestionIndex === 0;
  const isLastQuestion = currentSectionIndex === assessmentSections.length - 1 && currentQuestionIndex === (currentSection?.questions.length ?? 0) - 1;

  // REGISTRATION
  if (appState === 'registration') {
    return (
      <div className="min-h-screen bg-cream-100">
        <section className="relative bg-navy-800 py-16 md:py-20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber/20 rounded-full mb-4">
                <Brain size={16} className="text-amber" />
                <span className="text-amber text-sm font-medium">Comprehensive Assessment</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">Evaluate Your Potential</h1>
              <p className="text-navy-200 text-lg max-w-2xl mx-auto">A research-backed assessment evaluating personality, cognitive ability, situational judgment, and emotional intelligence.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-cream-200">
                <div className="text-center">
                  <p className="font-serif text-2xl md:text-3xl text-amber font-bold">{totalQuestions}</p>
                  <p className="text-xs text-navy-500 mt-1">Questions</p>
                </div>
                <div className="text-center border-x border-cream-200">
                  <p className="font-serif text-2xl md:text-3xl text-navy-800 font-bold">{totalTimeMinutes}</p>
                  <p className="text-xs text-navy-500 mt-1">Minutes</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl md:text-3xl text-navy-800 font-bold">5</p>
                  <p className="text-xs text-navy-500 mt-1">Sections</p>
                </div>
              </div>

              <h3 className="font-serif text-lg text-navy-800 mb-4">Assessment Sections</h3>
              <div className="space-y-3 mb-8">
                {assessmentSections.map((section, index) => {
                  const Icon = sectionIcons[section.icon] || Brain;
                  return (
                    <div key={section.id} className="flex items-start gap-3 p-3 bg-cream-50 rounded-lg">
                      <div className="p-2 bg-amber/10 rounded-lg shrink-0"><Icon size={18} className="text-amber" /></div>
                      <div>
                        <p className="font-medium text-navy-800 text-sm">{index + 1}. {section.title}</p>
                        <p className="text-xs text-navy-500 mt-0.5">{section.questions.length} questions &middot; {section.timeLimit} min</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h3 className="font-serif text-lg text-navy-800 mb-4">Candidate Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5"><User size={14} className="inline mr-1" /> Full Name *</label>
                    <input type="text" value={candidateInfo.fullName} onChange={(e) => handleCandidateChange('fullName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.fullName ? 'border-red-300' : 'border-cream-300'} focus:outline-none focus:ring-2 focus:ring-amber/30 text-navy-800`} placeholder="Enter your full name" />
                    {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5"><Mail size={14} className="inline mr-1" /> Email *</label>
                    <input type="email" value={candidateInfo.email} onChange={(e) => handleCandidateChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-300' : 'border-cream-300'} focus:outline-none focus:ring-2 focus:ring-amber/30 text-navy-800`} placeholder="your@email.com" />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5"><Phone size={14} className="inline mr-1" /> Phone *</label>
                    <input type="tel" value={candidateInfo.phone} onChange={(e) => handleCandidateChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-300' : 'border-cream-300'} focus:outline-none focus:ring-2 focus:ring-amber/30 text-navy-800`} placeholder="+91 98765 43210" />
                    {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5"><BriefcaseBusiness size={14} className="inline mr-1" /> Role Applied For *</label>
                    <select value={candidateInfo.roleApplied} onChange={(e) => handleCandidateChange('roleApplied', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.roleApplied ? 'border-red-300' : 'border-cream-300'} focus:outline-none focus:ring-2 focus:ring-amber/30 text-navy-800`}>
                      <option value="">Select a role</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="HR Executive">HR Executive</option>
                      <option value="Business Development">Business Development</option>
                      <option value="Marketing Manager">Marketing Manager</option>
                      <option value="Finance Analyst">Finance Analyst</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Sales Executive">Sales Executive</option>
                      <option value="Customer Support">Customer Support</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.roleApplied && <p className="text-red-500 text-xs mt-1">{formErrors.roleApplied}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5"><FileText size={14} className="inline mr-1" /> Experience *</label>
                    <select value={candidateInfo.experience} onChange={(e) => handleCandidateChange('experience', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.experience ? 'border-red-300' : 'border-cream-300'} focus:outline-none focus:ring-2 focus:ring-amber/30 text-navy-800`}>
                      <option value="">Select experience</option>
                      <option value="0-1 years">Fresher (0-1 years)</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8+ years">8+ years</option>
                    </select>
                    {formErrors.experience && <p className="text-red-500 text-xs mt-1">{formErrors.experience}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5"><GraduationCap size={14} className="inline mr-1" /> Education *</label>
                    <select value={candidateInfo.education} onChange={(e) => handleCandidateChange('education', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.education ? 'border-red-300' : 'border-cream-300'} focus:outline-none focus:ring-2 focus:ring-amber/30 text-navy-800`}>
                      <option value="">Select education</option>
                      <option value="High School">High School</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                      <option value="Master's Degree">Master&apos;s Degree</option>
                      <option value="MBA">MBA</option>
                      <option value="PhD">PhD</option>
                    </select>
                    {formErrors.education && <p className="text-red-500 text-xs mt-1">{formErrors.education}</p>}
                  </div>
                </div>
                <button onClick={() => { if (validateRegistration()) setAppState('instructions'); }}
                  className="w-full py-4 bg-amber text-white rounded-xl font-semibold text-base hover:bg-amber-dark transition-all flex items-center justify-center gap-2 mt-6">
                  Begin Assessment <ArrowRight size={20} />
                </button>
                <p className="text-xs text-navy-400 text-center mt-4">Your information is confidential and used solely for assessment purposes.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // INSTRUCTIONS
  if (appState === 'instructions') {
    return (
      <div className="min-h-screen bg-cream-100">
        <section className="bg-navy-800 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-3">Assessment Instructions</h1>
            <p className="text-navy-200">Please read carefully before starting</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
              {[
                { icon: Clock, title: 'Time Management', desc: 'Each section has its own time limit. The timer counts down automatically. Once time expires, you will move to the next section.' },
                { icon: AlertCircle, title: 'Navigation', desc: 'Use Next and Previous buttons to navigate. You can skip questions. Your answers are saved automatically.' },
                { icon: CheckCircle, title: 'Completion', desc: 'After all sections, you will receive a comprehensive scorecard. Your results can be sent to our HR team.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-amber/10 rounded-lg shrink-0"><item.icon size={20} className="text-amber" /></div>
                  <div>
                    <h3 className="font-serif text-lg text-navy-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-navy-50 rounded-xl p-5 border border-navy-100 mb-8">
                <p className="font-medium text-navy-800 text-sm mb-1">Candidate</p>
                <p className="text-sm text-navy-500">{candidateInfo.fullName} &middot; {candidateInfo.email} &middot; {candidateInfo.roleApplied}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setAppState('registration')} className="flex-1 py-3 border-2 border-navy-800 text-navy-800 rounded-xl font-semibold hover:bg-navy-800 hover:text-white transition-all">Go Back</button>
                <button onClick={() => setAppState('testing')} className="flex-1 py-3 bg-amber text-white rounded-xl font-semibold hover:bg-amber-dark transition-all flex items-center justify-center gap-2">Start Assessment <ArrowRight size={18} /></button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // TESTING
  if (appState === 'testing' && currentSection && currentQuestion) {
    const Icon = sectionIcons[currentSection.icon] || Brain;
    const progressInSection = currentQuestionIndex + 1;
    const totalInSection = currentSection.questions.length;

    return (
      <div className="min-h-screen bg-cream-100">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-cream-200 shadow-xs">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber/10 rounded-lg"><Icon size={18} className="text-amber" /></div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-navy-800">{currentSection.title}</p>
                  <p className="text-xs text-navy-400">Section {currentSectionIndex + 1} of {assessmentSections.length}</p>
                </div>
              </div>
              <SectionTimer minutes={currentSection.timeLimit} onTimeUp={handleTimeUp} />
            </div>
            <div className="flex gap-1 mt-3 overflow-x-auto pb-2">
              {assessmentSections.map((s, idx) => (
                <div key={s.id} className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap ${idx === currentSectionIndex ? 'bg-amber text-white' : idx < currentSectionIndex ? 'bg-emerald-50 text-emerald-700' : 'bg-cream-100 text-navy-400'}`}>
                  {idx < currentSectionIndex && <CheckCircle2 size={12} className="inline mr-1" />}
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
          <AnimatePresence mode="wait">
            <motion.div key={`${currentSectionIndex}-${currentQuestionIndex}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="mb-6"><ProgressBar current={totalAnswered} total={totalQuestions} /></div>
              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-amber bg-amber/10 px-3 py-1 rounded-full">{currentQuestion.category}</span>
                  <span className="text-xs text-navy-400">Q{progressInSection} of {totalInSection}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-navy-800 leading-relaxed mb-6">{currentQuestion.question}</h3>

                <div className="space-y-3">
                  {currentQuestion.type === 'likert' && likertOptions.map((opt) => (
                    <button key={opt.value} onClick={() => handleAnswer(opt.value)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${currentAnswer === opt.value ? 'border-amber bg-amber/5 shadow-sm' : 'border-cream-200 hover:border-amber/40 hover:bg-cream-50'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${currentAnswer === opt.value ? 'border-amber' : 'border-navy-300'}`}>
                          {currentAnswer === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-amber" />}
                        </div>
                        <span className={`text-sm ${currentAnswer === opt.value ? 'font-medium text-navy-800' : 'text-navy-600'}`}>{opt.label}</span>
                      </div>
                    </button>
                  ))}

                  {currentQuestion.type === 'multiple-choice' && 'options' in currentQuestion && currentQuestion.options.map((opt) => (
                    <button key={opt.value} onClick={() => handleAnswer(opt.value)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${currentAnswer === opt.value ? 'border-amber bg-amber/5 shadow-sm' : 'border-cream-200 hover:border-amber/40 hover:bg-cream-50'}`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${currentAnswer === opt.value ? 'border-amber' : 'border-navy-300'}`}>
                          {currentAnswer === opt.value && <div className="w-3 h-3 rounded-full bg-amber" />}
                        </div>
                        <div><span className="font-semibold text-navy-700 mr-2">{opt.value}.</span><span className={`text-sm ${currentAnswer === opt.value ? 'font-medium text-navy-800' : 'text-navy-600'}`}>{opt.label}</span></div>
                      </div>
                    </button>
                  ))}

                  {currentQuestion.type === 'scenario' && 'options' in currentQuestion && currentQuestion.options.map((opt) => (
                    <button key={opt.value} onClick={() => handleAnswer(opt.value)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${currentAnswer === opt.value ? 'border-amber bg-amber/5 shadow-sm' : 'border-cream-200 hover:border-amber/40 hover:bg-cream-50'}`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 ${currentAnswer === opt.value ? 'border-amber bg-amber text-white' : 'border-navy-300'}`}>
                          {currentAnswer === opt.value ? <CheckCircle size={14} /> : <span className="text-xs font-medium text-navy-500">{opt.value}</span>}
                        </div>
                        <span className={`text-sm leading-relaxed ${currentAnswer === opt.value ? 'font-medium text-navy-800' : 'text-navy-600'}`}>{opt.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-cream-200">
                  <button onClick={handlePrevious} disabled={isFirstQuestion}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm ${isFirstQuestion ? 'text-navy-300 cursor-not-allowed' : 'text-navy-700 hover:bg-cream-100 border border-cream-300'}`}>
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2.5 bg-amber text-white rounded-lg font-medium text-sm hover:bg-amber-dark transition-all">
                    {isLastQuestion ? 'Finish' : 'Next'} <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // RESULTS
  if (appState === 'results' && testResult) {
    const gs = gradeColors[testResult.grade] || gradeColors['C'];
    return (
      <div className="min-h-screen bg-cream-100 print:bg-white">
        <section className="relative bg-navy-800 py-12 md:py-16">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="shrink-0">
                <CircularProgress percentage={testResult.overallPercentage} size={140} color="#d97706" label="Overall Score" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber/20 rounded-full mb-3">
                  <Award size={14} className="text-white" />
                  <span className="text-amber text-sm font-medium">Assessment Complete</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">{testResult.candidateInfo.fullName}</h1>
                <p className="text-navy-200 mb-4">{testResult.candidateInfo.roleApplied} &middot; {testResult.candidateInfo.experience} experience</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold ${gs.bg} ${gs.text} border ${gs.border}`}>Grade: {testResult.grade}</span>
                  <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm">{new Date(testResult.completedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {/* Recommendation */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber/10 rounded-lg shrink-0"><Target size={22} className="text-amber" /></div>
                <div>
                  <h2 className="font-serif text-xl text-navy-800 mb-2">Hiring Recommendation</h2>
                  <p className="text-navy-600 leading-relaxed">{testResult.recommendation}</p>
                </div>
              </div>
            </motion.div>

            {/* Section Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {testResult.sectionResults.map((section) => (
                <motion.div key={section.sectionId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-serif text-lg text-navy-800 mb-4">{section.sectionTitle}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <CircularProgress percentage={section.percentage} size={80} strokeWidth={6}
                      color={section.percentage >= 70 ? '#059669' : section.percentage >= 50 ? '#d97706' : '#dc2626'} />
                    <div className="flex-1">
                      <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${section.percentage}%`, backgroundColor: section.percentage >= 70 ? '#059669' : section.percentage >= 50 ? '#d97706' : '#dc2626' }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-navy-500">{section.feedback}</p>
                </motion.div>
              ))}
            </div>

            {/* Personality */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
              <h2 className="font-serif text-xl text-navy-800 mb-4">OCEAN Personality Profile</h2>
              <p className="text-sm text-navy-500 mb-6"><strong className="text-navy-700">Dominant: {testResult.personalityProfile.dominantTrait}</strong> — {testResult.personalityProfile.profileSummary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Openness', value: testResult.personalityProfile.openness, desc: 'Creativity & Innovation' },
                  { label: 'Conscientiousness', value: testResult.personalityProfile.conscientiousness, desc: 'Organization & Reliability' },
                  { label: 'Extraversion', value: testResult.personalityProfile.extraversion, desc: 'Social Energy' },
                  { label: 'Agreeableness', value: testResult.personalityProfile.agreeableness, desc: 'Cooperation & Empathy' },
                  { label: 'Emotional Stability', value: testResult.personalityProfile.neuroticism, desc: 'Resilience' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <CircularProgress percentage={t.value} size={60} strokeWidth={5}
                      color={t.value >= 70 ? '#059669' : t.value >= 50 ? '#d97706' : '#dc2626'} />
                    <div><p className="font-medium text-navy-800 text-sm">{t.label}</p><p className="text-xs text-navy-400">{t.desc}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strengths & Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg"><Zap size={18} className="text-emerald-600" /></div>
                  <h3 className="font-serif text-lg text-navy-800">Key Strengths</h3>
                </div>
                <ul className="space-y-2">
                  {testResult.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-navy-600"><CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />{s}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg"><BookOpen size={18} className="text-amber" /></div>
                  <h3 className="font-serif text-lg text-navy-800">Development Areas</h3>
                </div>
                <ul className="space-y-2">
                  {testResult.developmentAreas.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-navy-600"><Circle size={14} className="text-amber mt-0.5 shrink-0" />{d}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleSendEmail} disabled={emailStatus === 'sending' || emailStatus === 'success'}
                className={`flex-1 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${emailStatus === 'success' ? 'bg-emerald-500 text-white' : 'bg-amber text-white hover:bg-amber-dark'}`}>
                {emailStatus === 'idle' && <><Send size={18} /> Send Results to HR</>}
                {emailStatus === 'sending' && <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>}
                {emailStatus === 'success' && <><CheckCircle size={18} /> Email Client Opened</>}
                {emailStatus === 'error' && <><AlertCircle size={18} /> Try Again</>}
              </button>
              <button onClick={() => window.print()} className="flex-1 py-4 bg-white border-2 border-navy-800 text-navy-800 rounded-xl font-semibold text-sm hover:bg-navy-800 hover:text-white transition-all flex items-center justify-center gap-2">
                <Printer size={18} /> Print Scorecard
              </button>
              <button onClick={handleRetake} className="flex-1 py-4 bg-white border-2 border-cream-300 text-navy-600 rounded-xl font-semibold text-sm hover:bg-cream-100 transition-all flex items-center justify-center gap-2">
                <RotateCcw size={18} /> Retake Test
              </button>
            </div>

            {emailStatus === 'success' && (
              <p className="text-center text-sm text-emerald-600 mt-4">Your email client has been opened. Please send the pre-filled email to complete the submission to hr@clannstaffing.com.</p>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center">
      <div className="text-center">
        <AlertCircle size={48} className="text-amber mx-auto mb-4" />
        <h2 className="font-serif text-2xl text-navy-800 mb-2">Something went wrong</h2>
        <button onClick={handleRetake} className="mt-4 px-6 py-3 bg-amber text-white rounded-lg font-semibold hover:bg-amber-dark transition-all">Start Over</button>
      </div>
    </div>
  );
}
