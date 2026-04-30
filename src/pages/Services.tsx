import { Link } from 'react-router';
import { ArrowRight, Users, Clock, Award, TrendingUp, CheckCircle, Briefcase, ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
    title: 'Permanent Staffing',
    description: 'Find the right full-time talent that aligns with your company culture and long-term goals. We handle end-to-end recruitment for permanent positions from sourcing to onboarding.',
    icon: Users,
    features: ['End-to-end recruitment lifecycle', 'Culture fit assessment', 'Background verification', 'Post-placement support'],
  },
  {
    title: 'Contract Staffing',
    description: 'Scale your workforce flexibly with our contract staffing solutions. Perfect for project-based needs, seasonal demands, and temporary roles.',
    icon: Clock,
    features: ['Flexible engagement models', 'Quick deployment', 'Contract-to-hire options', 'Payroll management'],
  },
  {
    title: 'Executive Search',
    description: 'Partner with us to find C-suite and senior leadership talent. Our executive search process is discreet, thorough, and results-driven.',
    icon: Award,
    features: ['Discreet search process', 'Market mapping', 'Leadership assessment', 'Board advisory'],
  },
  {
    title: 'RPO Services',
    description: 'Recruitment Process Outsourcing to streamline your hiring, reduce costs, and ensure you find the right talent faster with our dedicated teams.',
    icon: TrendingUp,
    features: ['Dedicated recruitment team', 'Technology integration', 'Process optimization', 'Scalable operations'],
  },
  {
    title: 'Payroll & Compliance',
    description: 'End-to-end payroll management and statutory compliance. We handle PF, ESIC, taxes, and labor law adherence so you can focus on growth.',
    icon: CheckCircle,
    features: ['Statutory compliance', 'PF & ESIC management', 'Tax processing', 'Labor law adherence'],
  },
  {
    title: 'Talent Consulting',
    description: 'Strategic workforce advisory to identify talent gaps, build hiring strategies, and optimize your human capital for maximum productivity.',
    icon: Briefcase,
    features: ['Workforce planning', 'Talent gap analysis', 'Compensation benchmarking', 'Employer branding'],
  },
];

export default function Services() {
  return (
    <div>
      <HeroSection
        title="Comprehensive Staffing Solutions"
        subtitle="Our Services"
        description="Tailored staffing solutions designed to meet your unique business requirements. From contingent workforce to executive leadership, we deliver excellence at every level."
        backgroundImage="/hero-services.jpg"
        primaryButton={{ label: 'REQUEST TALENT', href: '/contact-us' }}
        secondaryButton={{ label: 'UPLOAD RESUME', href: '/upload-resume' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                What We Offer
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                Comprehensive staffing solutions tailored to meet your unique business requirements, from contingent workforce to executive leadership.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber/10 rounded-lg group-hover:bg-amber/20 transition-colors shrink-0">
                      <service.icon className="h-8 w-8 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-navy-800 mb-2">{service.title}</h3>
                      <p className="text-sm text-navy-500 leading-relaxed mb-4">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-navy-600">
                            <ChevronRight size={14} className="text-amber shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              Need a Custom Staffing Solution?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to match your specific hiring needs.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white rounded-pill font-semibold hover:bg-amber-dark transition-all hover:shadow-elevated"
            >
              Talk to Our Experts <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
