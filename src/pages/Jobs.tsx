import { Link } from 'react-router';
import { ArrowRight, Search, MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const jobs = [
  {
    title: 'Senior Software Engineer - React/Node.js',
    category: 'Information Technology',
    type: 'Full Time',
    location: 'Bangalore / Remote',
    description: 'Join a fast-growing fintech startup building next-generation payment solutions.',
  },
  {
    title: 'Sales Manager - BFSI',
    category: 'BFSI',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Lead a team of 10+ sales professionals in the insurance vertical.',
  },
  {
    title: 'Clinical Research Associate',
    category: 'Healthcare',
    type: 'Full Time',
    location: 'Hyderabad',
    description: 'Coordinate clinical trials for a leading pharmaceutical company.',
  },
  {
    title: 'HR Business Partner',
    category: 'Human Resources',
    type: 'Full Time',
    location: 'Greater Noida',
    description: 'Strategic HR partner for manufacturing operations across North India.',
  },
  {
    title: 'DevOps Engineer - AWS/Azure',
    category: 'Information Technology',
    type: 'Contract',
    location: 'Pune / Remote',
    description: '6-month contract for cloud infrastructure migration project.',
  },
  {
    title: 'Plant Operations Manager',
    category: 'Manufacturing',
    type: 'Full Time',
    location: 'Chennai',
    description: 'Oversee day-to-day operations for an automotive parts manufacturing unit.',
  },
  {
    title: 'Digital Marketing Lead',
    category: 'Retail & E-Commerce',
    type: 'Full Time',
    location: 'Delhi NCR',
    description: 'Drive online growth for a leading D2C brand.',
  },
  {
    title: 'Financial Analyst',
    category: 'BFSI',
    type: 'Full Time',
    location: 'Gurgaon',
    description: 'Investment research and portfolio analysis for wealth management division.',
  },
  {
    title: 'Nurse Staff - ICU Ward',
    category: 'Healthcare',
    type: 'Contract',
    location: 'Bangalore',
    description: '3-month contract for a multi-specialty hospital expansion.',
  },
  {
    title: 'Supply Chain Manager',
    category: 'Manufacturing',
    type: 'Full Time',
    location: 'Ahmedabad',
    description: 'End-to-end supply chain optimization for FMCG operations.',
  },
];

const categories = ['All Job Category', 'Information Technology', 'BFSI', 'Healthcare', 'Manufacturing', 'Retail & E-Commerce'];
const types = ['All Job Type', 'Full Time', 'Contract', 'Part Time'];
const locations = ['All Job Location', 'Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Remote'];

export default function Jobs() {
  return (
    <div>
      <HeroSection
        title="Current Job Openings"
        subtitle="Job Openings"
        description="Explore exciting career opportunities across industries. Whether you're looking for your next challenge or a complete career change, we have roles that match your ambitions."
        backgroundImage="/hero-jobs.jpg"
        primaryButton={{ label: 'UPLOAD RESUME', href: '/upload-resume' }}
        secondaryButton={{ label: 'GET IN TOUCH', href: '/contact-us' }}
      />
      <WaveDivider />

      <section className="py-12 md:py-16 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <AnimatedSection>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-soft mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <select className="w-full px-4 py-2.5 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
                <select className="w-full px-4 py-2.5 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                  {types.map((t) => <option key={t}>{t}</option>)}
                </select>
                <select className="w-full px-4 py-2.5 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>
          </AnimatedSection>

          {/* Job listings */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <AnimatedSection key={job.title} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-navy-800 group-hover:text-amber transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-navy-500 mt-1">{job.description}</p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <span className="inline-flex items-center gap-1 text-xs text-navy-500 bg-cream-100 px-2 py-1 rounded">
                          <Briefcase size={12} /> {job.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-navy-500 bg-cream-100 px-2 py-1 rounded">
                          <Clock size={12} /> {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-navy-500 bg-cream-100 px-2 py-1 rounded">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1 px-4 py-2 border border-navy-800 text-navy-800 rounded-lg text-sm font-medium hover:bg-navy-800 hover:text-white transition-all shrink-0"
                    >
                      Apply Now <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-navy-500 mb-4">
              Don't see a role that fits? Send us your resume and we'll match you with upcoming opportunities.
            </p>
            <Link
              to="/upload-resume"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-white rounded-pill font-semibold text-sm hover:bg-amber-dark transition-all"
            >
              Upload Resume <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
