import { Link } from 'react-router';
import { ArrowRight, Award, Users, Globe, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const values = [
  {
    title: 'Integrity First',
    description: 'We believe in honest, transparent dealings with both clients and candidates. No hidden agendas, no shortcuts.',
    icon: Award,
  },
  {
    title: 'People-Centric',
    description: 'Every placement is a life changed. We treat every candidate and client with the respect and attention they deserve.',
    icon: Users,
  },
  {
    title: 'Pan-India Reach',
    description: 'From metro cities to Tier-2 towns, our network spans the length and breadth of India.',
    icon: Globe,
  },
  {
    title: 'Excellence Always',
    description: 'We don\'t settle for good enough. Our processes, people, and technology are geared for excellence.',
    icon: CheckCircle,
  },
];

const milestones = [
  { year: '2026', title: 'Founded', description: 'Clann Staffing established with a vision to transform recruitment in India.' },
  { year: '2026', title: 'First 100 Placements', description: 'Achieved our first 100 successful placements within the inaugural year.' },
  { year: '2026', title: 'Pan-India Expansion', description: 'Extended operations to 10+ major cities across India.' },
  { year: '2026', title: '50,000+ Resumes', description: 'Built a database of 50,000+ qualified candidates across industries.' },
];

export default function About() {
  return (
    <div>
      <HeroSection
        title="Where It All Began"
        subtitle="About Clann Staffing"
        description="At Clann Staffing, our goal will always be simple: we will listen to your story, find out what you're looking for, and match you with people that fit your dreams and make that story even better."
        backgroundImage="/hero-about.jpg"
        primaryButton={{ label: 'REQUEST TALENT', href: '/contact-us' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-2">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy-800 mb-6">
                  This Is Our Story
                </h2>
                <p className="text-navy-500 leading-relaxed mb-4">
                  Founded in 2026, Clann Staffing was born from a simple observation: the Indian staffing market needed a partner who truly cared about both sides of the hiring equation. We saw companies struggling to find quality talent, and talented professionals unable to find the right opportunities.
                </p>
                <p className="text-navy-500 leading-relaxed mb-4">
                  We decided to be that bridge. Not just another staffing agency, but a true partner in growth — for organizations and individuals alike. The name "Clann" (derived from the Gaelic word for family/tribe) reflects our belief that every successful placement creates a new connection, a new relationship, a new member of our extended family.
                </p>
                <p className="text-navy-500 leading-relaxed">
                  Today, with 50,000+ active resumes, 1,000+ successful placements, and a 98% client retention rate, we're proud to be India's premier staffing partner. But we're just getting started.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-800 rounded-xl p-6 text-white">
                  <p className="text-4xl font-serif font-bold text-amber">50K+</p>
                  <p className="text-sm text-navy-200 mt-1">Active Resumes</p>
                </div>
                <div className="bg-amber rounded-xl p-6 text-white">
                  <p className="text-4xl font-serif font-bold">1,000+</p>
                  <p className="text-sm mt-1">Placements</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <p className="text-4xl font-serif font-bold text-navy-800">98%</p>
                  <p className="text-sm text-navy-500 mt-1">Client Retention</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <p className="text-4xl font-serif font-bold text-navy-800">10+</p>
                  <p className="text-sm text-navy-500 mt-1">Cities Covered</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                What We Stand For
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                Our values aren't just words on a wall — they guide every decision we make, every placement we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-cream-100 rounded-xl p-6 text-center hover:bg-cream-200 transition-colors h-full">
                  <div className="p-3 bg-amber/10 rounded-lg w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-amber" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-navy-500">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                Our Journey
              </h2>
              <p className="mt-4 text-navy-200 max-w-2xl mx-auto">
                Milestones that mark our growth and commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.title} delay={index * 0.1}>
                <div className="bg-navy-700/50 rounded-xl p-6 border border-navy-600">
                  <span className="text-amber font-sans text-sm font-semibold">{milestone.year}</span>
                  <h3 className="font-serif text-lg text-white mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-navy-300">{milestone.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-800 mb-4">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-navy-500 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking for talent or seeking your next opportunity, we'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 text-white rounded-pill font-semibold hover:bg-navy-900 transition-all hover:shadow-elevated"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-800 text-navy-800 rounded-pill font-semibold hover:bg-navy-800 hover:text-white transition-all"
              >
                Meet Our Team <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
