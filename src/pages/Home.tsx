import { Link } from 'react-router';
import { Search, Users, FileText, Award, Briefcase, TrendingUp, ChevronRight, Star, Clock, Globe, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: FileText, value: '50K+', label: 'Active Resumes' },
  { icon: Briefcase, value: '1,000+', label: 'Placements' },
  { icon: Award, value: '98%', label: 'Retention Rate' },
];

const services = [
  {
    title: 'Permanent Staffing',
    description: 'Find the right full-time talent that aligns with your company culture and long-term goals. We handle end-to-end recruitment for permanent positions.',
    icon: Users,
  },
  {
    title: 'Contract Staffing',
    description: 'Scale your workforce flexibly with our contract staffing solutions. Perfect for project-based needs, seasonal demands, and temporary roles.',
    icon: Clock,
  },
  {
    title: 'Executive Search',
    description: 'Partner with us to find C-suite and senior leadership talent. Our executive search process is discreet, thorough, and results-driven.',
    icon: Award,
  },
  {
    title: 'RPO Services',
    description: 'Recruitment Process Outsourcing to streamline your hiring, reduce costs, and ensure you find the right talent faster with our dedicated teams.',
    icon: TrendingUp,
  },
  {
    title: 'Payroll & Compliance',
    description: 'End-to-end payroll management and statutory compliance. We handle PF, ESIC, taxes, and labor law adherence so you can focus on growth.',
    icon: CheckCircle,
  },
  {
    title: 'Talent Consulting',
    description: 'Strategic workforce advisory to identify talent gaps, build hiring strategies, and optimize your human capital for maximum productivity.',
    icon: Briefcase,
  },
];

const industries = [
  { name: 'Information Technology', roles: 'Software, Cloud, AI/ML, Cybersecurity' },
  { name: 'BFSI', roles: 'Banking, Financial Services, Insurance' },
  { name: 'Healthcare & Pharma', roles: 'Hospitals, Life Sciences, Medical Devices' },
  { name: 'Automotive', roles: 'Auto Engineering, Aerospace, Design' },
  { name: 'Retail & E-Commerce', roles: 'Store Ops, Digital Marketing, Logistics' },
  { name: 'Manufacturing', roles: 'Plant Operations, Quality Assurance' },
];

const processSteps = [
  { step: '01', title: 'Requirement Analysis', description: 'Deep dive into your hiring needs, culture fit, and role specifications.' },
  { step: '02', title: 'Talent Sourcing', description: 'Multi-channel sourcing from our 50K+ database and active market search.' },
  { step: '03', title: 'Screening & Assessment', description: 'Rigorous interviews, skill tests, and background verification process.' },
  { step: '04', title: 'Onboarding Support', description: 'End-to-end coordination until your new hire is productive and settled.' },
];

const testimonials = [
  {
    quote: "Clann Staffing transformed our hiring process. Within 3 weeks, they filled 12 critical tech roles that our internal team had been struggling with for months.",
    author: 'Rahul Mehta',
    role: 'CTO, TechCorp India',
  },
  {
    quote: "The team's understanding of healthcare compliance and regulatory requirements made our nursing staff expansion seamless. Highly recommended.",
    author: 'Dr. Priya Sharma',
    role: 'HR Director, MediCare Plus',
  },
  {
    quote: "From C-suite executives to floor supervisors, Clann delivered quality candidates across all levels. Their RPO model saved us 40% in hiring costs.",
    author: 'Vikram Joshi',
    role: 'VP HR, AutoTech Industries',
  },
];

const clients = [
  'TechCorp India', 'FinServe Global', 'MediCare Plus', 'AutoTech Industries',
  'BuildConstruct', 'DataSystems', 'GreenEnergy', 'RetailMax', 'EduFirst', 'LogiTrans',
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="India's Leading Staffing Partner"
        subtitle="Connecting Talent with Opportunity"
        description="We bridge the gap between exceptional talent and forward-thinking organizations across India. With 50,000+ active resumes and 1,000+ successful placements, your success is our mission."
        backgroundImage="/hero-home.jpg"
        primaryButton={{ label: 'EXPLORE JOBS', href: '/jobs' }}
        secondaryButton={{ label: 'OUR SERVICES', href: '/services' }}
      />
      <WaveDivider />

      {/* Stats */}
      <section className="py-12 md:py-16 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-shadow">
                  <stat.icon className="mx-auto h-8 w-8 text-amber mb-3" />
                  <p className="text-3xl font-serif font-bold text-navy-800">{stat.value}</p>
                  <p className="text-sm text-navy-500 mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-navy-800 rounded-2xl p-6 md:p-10 shadow-elevated">
              <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-6">
                Find Your Dream Job
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job Title / Keywords"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <button className="w-full py-3 bg-amber text-white rounded-lg font-semibold hover:bg-amber-dark transition-colors flex items-center justify-center gap-2">
                  <Search size={18} />
                  Search Jobs
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                What We Offer
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                Our Services
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                Comprehensive staffing solutions tailored to meet your unique business requirements, from contingent workforce to executive leadership.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all group h-full">
                  <div className="p-3 bg-amber/10 rounded-lg w-fit mb-4 group-hover:bg-amber/20 transition-colors">
                    <service.icon className="h-6 w-6 text-amber" />
                  </div>
                  <h3 className="font-serif text-xl text-navy-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 mt-4 text-amber font-medium text-sm hover:gap-2 transition-all"
                  >
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-800 text-navy-800 rounded-pill font-semibold text-sm hover:bg-navy-800 hover:text-white transition-all"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                Sectors We Cover
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                Industries We Serve
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                Deep domain expertise across diverse industry verticals. We understand the unique talent needs of every sector we serve.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <Link
                  to="/industries"
                  className="block bg-cream-100 rounded-xl p-6 hover:bg-cream-200 transition-colors group"
                >
                  <h3 className="font-serif text-lg text-navy-800 group-hover:text-amber transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-navy-500 mt-1">{industry.roles}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white rounded-pill font-semibold text-sm hover:bg-navy-900 transition-all"
            >
              Explore All Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                How We Work
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                Our Recruitment Process
              </h2>
              <p className="mt-4 text-navy-200 max-w-2xl mx-auto">
                A streamlined, four-step process designed for efficiency and quality in every placement.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.15}>
                <div className="bg-navy-700/50 rounded-xl p-6 border border-navy-600 hover:border-amber/50 transition-colors">
                  <span className="text-4xl font-serif font-bold text-amber/30">{step.step}</span>
                  <h3 className="font-serif text-lg text-white mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                  Why Clann Staffing
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy-800 mb-6">
                  Empowering Careers,<br />Building Organizations
                </h2>
                <p className="text-navy-500 leading-relaxed mb-8">
                  Founded in 2026, Clann Staffing is India's premier staffing and recruitment agency. We specialize in connecting exceptional talent with forward-thinking organizations across multiple industries. With our pan-India presence and dedicated team of specialists, we deliver results that exceed expectations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber/10 rounded-lg">
                      <Star className="h-5 w-5 text-amber" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">98% Client Retention</p>
                      <p className="text-sm text-navy-500">Consistent quality keeps clients returning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber/10 rounded-lg">
                      <Clock className="h-5 w-5 text-amber" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">48 Hours Response</p>
                      <p className="text-sm text-navy-500">Rapid candidate delivery guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber/10 rounded-lg">
                      <Globe className="h-5 w-5 text-amber" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">Pan-India Presence</p>
                      <p className="text-sm text-navy-500">From metros to Tier-2 towns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-amber" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">Compliance Ready</p>
                      <p className="text-sm text-navy-500">Full statutory adherence</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to="/about-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white rounded-pill font-semibold text-sm hover:bg-navy-900 transition-all"
                  >
                    Learn More About Us <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="/hero-about.jpg"
                  alt="Clann Staffing Team"
                  className="rounded-2xl shadow-elevated w-full object-cover h-[400px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-amber text-white rounded-xl p-4 shadow-elevated">
                  <p className="text-2xl font-serif font-bold">10+</p>
                  <p className="text-sm">Years Combined Experience</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                Client Stories
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                Building lasting partnerships through exceptional service and successful placements.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.15}>
                <div className="bg-cream-100 rounded-xl p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-navy-700 italic leading-relaxed flex-1">"{testimonial.quote}"</p>
                  <div className="mt-4 pt-4 border-t border-cream-200">
                    <p className="font-semibold text-navy-800">{testimonial.author}</p>
                    <p className="text-sm text-navy-500">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-800 text-navy-800 rounded-pill font-semibold text-sm hover:bg-navy-800 hover:text-white transition-all"
            >
              Read All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 md:py-16 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-navy-500 text-sm font-medium mb-8">
              Trusted by Leading Organizations
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <AnimatedSection key={client} delay={index * 0.05}>
                <div className="bg-white px-6 py-3 rounded-lg shadow-xs hover:shadow-soft transition-shadow">
                  <p className="font-serif text-navy-700 font-medium">{client}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch and let's reimagine your workforce strategy together. Whether you're hiring one role or building an entire team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white rounded-pill font-semibold hover:bg-amber-dark transition-all hover:shadow-elevated"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-pill font-semibold hover:bg-white/20 transition-all"
              >
                View Open Positions <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
