import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle, FileText, Send } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

export default function UploadResume() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div>
      <HeroSection
        title="Upload Your Resume"
        subtitle="Join Our Talent Pool"
        description="Submit your resume to be considered for current and upcoming opportunities. Our recruiters review every submission and match you with roles that fit your skills and career goals."
        backgroundImage="/hero-jobs.jpg"
        primaryButton={{ label: 'VIEW JOBS', href: '/jobs' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-xl p-6 md:p-10 shadow-soft">
              <h2 className="font-serif text-2xl md:text-3xl text-navy-800 mb-2">
                Submit Your Resume
              </h2>
              <p className="text-navy-500 mb-8">
                Fill out the form below and upload your resume. Our team will get in touch within 48 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-3" />
                  <h3 className="font-serif text-xl text-green-800 mb-1">Thank You!</h3>
                  <p className="text-green-600">Your resume has been submitted successfully. Our team will review and contact you within 48 hours.</p>
                  <Link
                    to="/jobs"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-amber text-white rounded-pill font-semibold text-sm hover:bg-amber-dark transition-all"
                  >
                    View Open Jobs <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1">Current Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bangalore, Mumbai"
                        className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1">Experience Level</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                        <option>Fresher (0-1 years)</option>
                        <option>Junior (1-3 years)</option>
                        <option>Mid-level (3-7 years)</option>
                        <option>Senior (7-10 years)</option>
                        <option>Leadership (10+ years)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1">Preferred Industry</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                        <option>Information Technology</option>
                        <option>BFSI</option>
                        <option>Healthcare</option>
                        <option>Automotive</option>
                        <option>Retail</option>
                        <option>Manufacturing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Upload Resume *</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-dashed border-cream-300 hover:border-amber cursor-pointer transition-colors"
                      >
                        <FileText size={20} className="text-navy-400" />
                        <span className="text-sm text-navy-500">
                          {fileName || 'Choose File (PDF, DOC, DOCX)'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Cover Letter / Additional Info</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your career goals, preferred roles, or anything else..."
                      className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber text-white rounded-lg font-semibold hover:bg-amber-dark transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
