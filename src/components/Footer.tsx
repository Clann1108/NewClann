import { Link } from 'react-router';
import { MapPin, Mail, Phone, Clock, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Permanent Staffing', href: '/services' },
    { label: 'Contract Staffing', href: '/services' },
    { label: 'Executive Search', href: '/services' },
    { label: 'RPO Services', href: '/services' },
    { label: 'Payroll & Compliance', href: '/services' },
    { label: 'Talent Consulting', href: '/services' },
  ],
  industries: [
    { label: 'Information Technology', href: '/industries' },
    { label: 'BFSI', href: '/industries' },
    { label: 'Healthcare', href: '/industries' },
    { label: 'Automotive', href: '/industries' },
    { label: 'Retail', href: '/industries' },
    { label: 'Manufacturing', href: '/industries' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Leadership Team', href: '/team' },
    { label: 'Job Openings', href: '/jobs' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'Upload Resume', href: '/upload-resume' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Contact bar */}
      <div className="border-b border-navy-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber/20 rounded-lg">
                <MapPin size={20} className="text-amber" />
              </div>
              <div>
                <p className="font-medium text-sm">Head Office</p>
                <p className="text-sm text-navy-200 mt-1">
                  Gulshan Belina, Greater Noida<br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber/20 rounded-lg">
                <Mail size={20} className="text-amber" />
              </div>
              <div>
                <p className="font-medium text-sm">Email Us</p>
                <a href="mailto:hr@clannstaffing.com" className="text-sm text-navy-200 mt-1 hover:text-amber transition-colors">
                  hr@clannstaffing.com
                </a>
                <br />
                <a href="mailto:sales@clannstaffing.com" className="text-sm text-navy-200 hover:text-amber transition-colors">
                  sales@clannstaffing.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber/20 rounded-lg">
                <Phone size={20} className="text-amber" />
              </div>
              <div>
                <p className="font-medium text-sm">Call Us</p>
                <a href="tel:+918476092027" className="text-sm text-navy-200 mt-1 hover:text-amber transition-colors">
                  +91 84 7609 2027
                </a>
                <br />
                <a href="tel:+919839440774" className="text-sm text-navy-200 hover:text-amber transition-colors">
                  +91 98 3944 0774
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber/20 rounded-lg">
                <Clock size={20} className="text-amber" />
              </div>
              <div>
                <p className="font-medium text-sm">Working Hours</p>
                <p className="text-sm text-navy-200 mt-1">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Clann Staffing" className="h-50 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm text-navy-200 leading-relaxed max-w-sm">
              India's premier staffing and recruitment partner, connecting exceptional talent with forward-thinking organizations since 2026. Your success is our mission.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="https://www.linkedin.com/company/clann-staffing/" 
                className="p-2 bg-navy-800 rounded-lg hover:bg-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/clann-staffing/" 
                className="p-2 bg-navy-800 rounded-lg hover:bg-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/clann-staffing/" 
                className="p-2 bg-navy-800 rounded-lg hover:bg-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/clannstaffing/" 
                className="p-2 bg-navy-800 rounded-lg hover:bg-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-navy-200 hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-serif text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-navy-200 hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-navy-200 hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-navy-300 text-center md:text-left">
              © 2026 Clann Staffing (A Convergence Consulting Co.), All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-sm text-navy-300 hover:text-amber transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-navy-300 hover:text-amber transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}