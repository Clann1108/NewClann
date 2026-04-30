import AnimatedSection from '../components/AnimatedSection';

export default function PrivacyPolicy() {
  return (
    <div className="py-16 md:py-24 bg-cream-100 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-soft">
            <h1 className="font-serif text-3xl md:text-4xl text-navy-800 mb-6">Privacy Policy</h1>
            <p className="text-sm text-navy-500 mb-8">Last updated: April 30, 2026</p>

            <div className="space-y-6 text-navy-600 leading-relaxed">
              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">1. Introduction</h2>
                <p>Clann Staffing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">2. Information We Collect</h2>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Submit your resume or job application</li>
                  <li>Fill out our contact forms</li>
                  <li>Register for our services</li>
                  <li>Subscribe to our newsletters</li>
                  <li>Request information about our services</li>
                </ul>
                <p className="mt-3">This information may include your name, email address, phone number, work experience, education details, and other professional information.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Match you with suitable job opportunities</li>
                  <li>Provide our staffing and recruitment services</li>
                  <li>Communicate with you about potential opportunities</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">4. Information Sharing</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Potential employers (with your consent)</li>
                  <li>Service providers who assist our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">5. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">7. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2">Email: info@clannstaffing.com<br />
                Address: Gulshan Belina, Greater Noida, Uttar Pradesh, India<br />
                Phone: +91 80 1234 5678</p>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
