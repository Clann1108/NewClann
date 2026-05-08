import { Link } from 'react-router';
import { ArrowRight, Monitor, Landmark, HeartPulse, Car, ShoppingCart, Factory, Wifi, Zap, Building2, GraduationCap, Package, Shield, Zap as ZapIcon, Users, BarChart3 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const industries = [
  {
    name: 'Information Technology',
    description: 'Software Engineering, Cloud, DevOps, AI/ML, Data Science, Cybersecurity, Product Management',
    icon: Monitor,
  },
  {
    name: 'BFSI',
    description: 'Banking Operations, Risk & Compliance, Investment Banking, Insurance, Fintech, Wealth Management',
    icon: Landmark,
  },
  {
    name: 'Healthcare & Pharma',
    description: 'Doctors, Nurses, Medical Devices, Clinical Research, Life Sciences, Hospital Administration',
    icon: HeartPulse,
  },
  {
    name: 'Automotive & Manufacturing',
    description: 'Auto Engineering, Aerospace, Industrial Design, Supply Chain, Quality Assurance, Plant Operations',
    icon: Car,
  },
  {
    name: 'Retail & E-Commerce',
    description: 'Store Operations, Digital Marketing, Supply Chain, Merchandising, Customer Experience, Logistics',
    icon: ShoppingCart,
  },
  {
    name: 'FMCG & Consumer Goods',
    description: 'Sales, Marketing, Operations, Supply Chain Management, Brand Management, Distribution',
    icon: Package,
  },
  {
    name: 'Telecom & Media',
    description: 'Network Engineering, Content Creation, Digital Media, Broadcasting, 5G Technology',
    icon: Wifi,
  },
  {
    name: 'Energy & Utilities',
    description: 'Renewable Energy, Power Systems, Oil & Gas, Sustainability, Smart Grid Technology',
    icon: Zap,
  },
  {
    name: 'Real Estate & Construction',
    description: 'Project Management, Architecture, Civil Engineering, Facility Management, Urban Planning',
    icon: Building2,
  },
  {
    name: 'Education & EdTech',
    description: 'Teaching, Curriculum Design, EdTech Development, Academic Administration, E-Learning',
    icon: GraduationCap,
  },
  {
    name: 'Manufacturing',
    description: 'Plant Operations, Production Planning, Quality Control, Lean Manufacturing, Industrial Engineering',
    icon: Factory,
  },
];

const capabilities = [
  {
    title: 'Compliance Ready',
    description: 'Industry-specific regulatory and compliance knowledge for every placement.',
    icon: Shield,
  },
  {
    title: 'Speed to Hire',
    description: 'Pre-qualified talent pools reduce time-to-fill by up to 60% in every sector.',
    icon: ZapIcon,
  },
  {
    title: 'Niche Specialists',
    description: 'Dedicated recruiters with deep vertical expertise in your specific industry.',
    icon: Users,
  },
  {
    title: 'Market Intelligence',
    description: 'Real-time salary benchmarks, talent trends, and competitive insights per sector.',
    icon: BarChart3,
  },
];

export default function Industries() {
  return (
    <div>
      <HeroSection
        title="Industries We Serve"
        subtitle="Sectors We Cover"
        description="Deep domain expertise across diverse industry verticals. We don't just fill roles - we understand the technical skills, regulatory frameworks, and cultural nuances that make each industry unique."
        backgroundImage="/hero-industries.jpg"
        primaryButton={{ label: 'DISCUSS YOUR SECTOR', href: '/contact-us' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                Deep Domain Expertise
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                We understand the unique talent needs of every sector we serve. Our specialized recruiters bring industry knowledge that makes all the difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all group h-full">
                  <div className="p-3 bg-amber/10 rounded-lg w-fit mb-4 group-hover:bg-amber/20 transition-colors">
                    <industry.icon className="h-6 w-6 text-amber" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-800 mb-2">{industry.name}</h3>
                  <p className="text-sm text-navy-500">{industry.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                Capabilities
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                Industry-Specific Hiring Expertise
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                We don't just fill roles. We understand the technical skills, regulatory frameworks, and cultural nuances that make each industry unique.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <div className="bg-cream-100 rounded-xl p-6 text-center hover:bg-cream-200 transition-colors">
                  <div className="p-3 bg-amber/10 rounded-lg w-fit mx-auto mb-4">
                    <cap.icon className="h-8 w-8 text-amber" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-800 mb-2">{cap.title}</h3>
                  <p className="text-sm text-navy-500">{cap.description}</p>
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
              Need Talent in Your Industry?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our industry specialists are ready to discuss your unique hiring challenges and build a tailored strategy.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white rounded-pill font-semibold hover:bg-amber-dark transition-all hover:shadow-elevated"
            >
              Talk to an Industry Expert <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
