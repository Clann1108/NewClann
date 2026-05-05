import AnimatedSection from '../components/AnimatedSection';

export default function TermsOfService() {
  return (
    <div className="py-16 md:py-24 bg-cream-100 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-soft">
            <h1 className="font-serif text-3xl md:text-4xl text-navy-800 mb-6">Terms of Service</h1>
            <p className="text-sm text-navy-500 mb-8">Last updated: April 30, 2026</p>

            <div className="space-y-6 text-navy-600 leading-relaxed">
              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">1. Agreement to Terms</h2>
                <p>By accessing or using the Clann Staffing website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">2. Services Description</h2>
                <p>Clann Staffing provides staffing and recruitment services including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Permanent staffing and recruitment</li>
                  <li>Contract and temporary staffing</li>
                  <li>Executive search and leadership hiring</li>
                  <li>Recruitment Process Outsourcing (RPO)</li>
                  <li>Payroll and compliance management</li>
                  <li>Talent consulting and advisory services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">3. User Responsibilities</h2>
                <p>When using our services, you agree to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Not use our services for any illegal purpose</li>
                  <li>Not interfere with the proper working of our website</li>
                  <li>Respect the intellectual property rights of Clann Staffing</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">4. Resume and Job Applications</h2>
                <p>By submitting your resume or job application through our platform:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>You confirm that all information provided is accurate</li>
                  <li>You grant us permission to share your information with potential employers</li>
                  <li>You understand that we cannot guarantee employment</li>
                  <li>You agree to our data processing practices as described in our Privacy Policy</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">5. Intellectual Property</h2>
                <p>The Clann Staffing website and its original content, features, and functionality are owned by Clann Staffing (A convergence consulting pvt ltd company) and are protected by international copyright, trademark, and other intellectual property laws.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">6. Limitation of Liability</h2>
                <p>Clann Staffing shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. We do not guarantee specific employment outcomes.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">7. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Uttar Pradesh, India.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">8. Changes to Terms</h2>
                <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-navy-800 mb-3">9. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <p className="mt-2">Email: hr@clannstaffing.com<br />
                Address: Gulshan Belina, Greater Noida, Uttar Pradesh, India<br />
                Phone: +91 84 7609 2027</p>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
