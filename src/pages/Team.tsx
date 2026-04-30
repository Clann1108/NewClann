import { Link } from 'react-router';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const team = [
  {
    name: 'Yashit Sati',
    role: 'Founder & CEO',
    image: '/team-priya.jpg',
    bio: 'With over 15 years in HR and staffing, Yashit founded Clann Staffing with a vision to transform how India hires. His leadership has driven the company from inception to industry recognition.',
  },
  {
    name: 'Ruchi',
    role: 'Co-Founder & COO',
    image: '/team-Ruchi.jpg',
    bio: 'Ruchi brings operational excellence and strategic vision to Clann. Her expertise in scaling businesses ensures we deliver consistent quality across all our operations.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Director - Technology Hiring',
    image: '/team-arjun.jpg',
    bio: 'Arjun leads our IT and technology recruitment practice. With deep connections in the tech ecosystem, he has placed hundreds of engineers, product managers, and tech leaders.',
  },
  {
    name: 'Neha Gupta',
    role: 'Director - HR Consulting',
    image: '/team-neha.jpg',
    bio: 'Neha heads our talent consulting and compliance division. Her expertise in labor law and HR strategy helps clients build sustainable workforce practices.',
  },
];

export default function Team() {
  return (
    <div>
      <HeroSection
        title="Our Leadership Team"
        subtitle="The People"
        description="Experienced professionals committed to transforming the staffing landscape in India. Meet the leaders who drive our vision every day."
        backgroundImage="/hero-about.jpg"
        primaryButton={{ label: 'JOIN OUR TEAM', href: '/contact-us' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-navy-800">
                Meet Our Leaders
              </h2>
              <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
                Dedicated professionals who bring decades of combined experience in recruitment, HR strategy, and business operations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.15}>
                <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all group">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="sm:col-span-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 sm:h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-2 p-6 flex flex-col justify-center">
                      <h3 className="font-serif text-xl text-navy-800">{member.name}</h3>
                      <p className="text-amber font-sans text-sm font-medium mt-1">{member.role}</p>
                      <p className="text-sm text-navy-500 mt-3 leading-relaxed">{member.bio}</p>
                      <div className="flex items-center gap-3 mt-4">
                        <button className="p-2 bg-cream-100 rounded-lg hover:bg-amber/20 transition-colors">
                          <Linkedin size={16} className="text-navy-600" />
                        </button>
                        <button className="p-2 bg-cream-100 rounded-lg hover:bg-amber/20 transition-colors">
                          <Mail size={16} className="text-navy-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 md:py-24 bg-navy-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate recruiters, consultants, and operations professionals who believe in the power of human connections.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white rounded-pill font-semibold hover:bg-amber-dark transition-all hover:shadow-elevated"
            >
              View Careers at Clann <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
