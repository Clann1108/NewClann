import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <HeroSection
        title="Get In Touch, Say Hello!"
        subtitle="Contact Us"
        description="Have a few questions you want to ask? Do you want to know about the recruitment process? Drop us a note, text, or call. We'd love to hear from you."
        backgroundImage="/hero-contact.jpg"
        primaryButton={{ label: 'UPLOAD RESUME', href: '/upload-resume' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft">
                  <h2 className="font-serif text-2xl md:text-3xl text-navy-800 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-navy-500 mb-6">
                    Whether you're hiring or seeking your next opportunity, we'd love to hear from you.
                  </p>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-3" />
                      <h3 className="font-serif text-xl text-green-800 mb-1">Thank You!</h3>
                      <p className="text-green-600">Your message has been sent. We'll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">First Name</label>
                          <input
                            type="text"
                            required
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="divu@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 983944 0774"
                            className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">I am a</label>
                          <select className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                            <option>Job Seeker</option>
                            <option>Employer / Hiring Manager</option>
                            <option>HR Professional</option>
                            <option>Partner</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">Interested In</label>
                          <select className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-amber">
                            <option>Permanent Staffing</option>
                            <option>Contract Staffing</option>
                            <option>Executive Search</option>
                            <option>RPO Services</option>
                            <option>Payroll & Compliance</option>
                            <option>HR Consulting</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your requirements..."
                          className="w-full px-4 py-3 rounded-lg border border-cream-200 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-amber resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-amber text-white rounded-lg font-semibold hover:bg-amber-dark transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Submit Enquiry
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber/10 rounded-lg">
                        <MapPin size={20} className="text-amber" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-800">Head Office</p>
                        <p className="text-sm text-navy-500 mt-1">
                          Gulshan Belina, Greater Noida<br />
                          Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber/10 rounded-lg">
                        <Mail size={20} className="text-amber" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-800">Email Us</p>
                        <a href="mailto:hr@clannstaffing.com" className="text-sm text-navy-500 mt-1 hover:text-amber transition-colors block">
                          hr@clannstaffing.com
                        </a>
                        <a href="mailto:sales@clannstaffing.com" className="text-sm text-navy-500 hover:text-amber transition-colors block">
                          sales@clannstaffing.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber/10 rounded-lg">
                        <Phone size={20} className="text-amber" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-800">Call Us</p>
                        <a href="tel:+918476092027" className="text-sm text-navy-500 mt-1 hover:text-amber transition-colors block">
                          +91 84 7609 2027
                        </a>
                        <a href="tel:+919839440774" className="text-sm text-navy-500 hover:text-amber transition-colors block">
                          +91 98 3944 0774
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber/10 rounded-lg">
                        <Clock size={20} className="text-amber" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-800">Working Hours</p>
                        <p className="text-sm text-navy-500 mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy-800 rounded-xl p-6 text-white">
                    <p className="font-serif text-lg mb-2">Prefer to Talk Directly?</p>
                    <p className="text-sm text-navy-200 mb-4">
                      Schedule a 15-minute discovery call with one of our staffing specialists. No obligations, just insights.
                    </p>
                    <a
                      href="tel:+918476092027"
                      className="inline-flex items-center gap-2 text-amber font-medium hover:underline"
                    >
                      <Phone size={16} />
                      Call +91 98 3944 0774
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
