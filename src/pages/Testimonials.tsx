import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import WaveDivider from '../components/WaveDivider';
import AnimatedSection from '../components/AnimatedSection';

const testimonials = [
  {
    quote: "Working with Clann Staffing ended up being a dream come true. After what felt like endless interviews, final rounds, and rejection letters, I was introduced to the team and they found an opportunity that was the perfect fit. They were very responsive and communicative throughout. I couldn't be happier with the entire experience!",
    author: 'Rahul Mehta',
    role: 'CTO, TechCorp India',
    rating: 5,
  },
  {
    quote: "I've truly enjoyed working with Clann Staffing over the last couple of years. I would highly recommend them to anyone looking for new job opportunities or hiring talent. They've been engaging, dependable and high in integrity. They are very effective at their job and it's a pleasure to recommend them as accomplished recruiting professionals.",
    author: 'Dr. Priya Sharma',
    role: 'HR Director, MediCare Plus',
    rating: 5,
  },
  {
    quote: "I can't put into words how well Clann Staffing has done with our recruiting needs. They help to create a profile for our personnel needs, identify the perfect set of candidates, and screen them in accordance with our objectives and our culture. They work tirelessly and won't stop until they find the right match.",
    author: 'Vikram Joshi',
    role: 'VP HR, AutoTech Industries',
    rating: 5,
  },
  {
    quote: "Over my career I have worked with a lot of recruiters around the country. Most of them have been underprepared and unreliable with little to no integrity and professionalism. Clann Staffing stands apart — their honesty, integrity and professionalism are second to none.",
    author: 'Neha Gupta',
    role: 'Director, EduFirst Learning',
    rating: 5,
  },
  {
    quote: "My experience with Clann Staffing was excellent! I felt that they were in my corner throughout the entire process. The communication was very consistent, and I was confident that they wanted the best for me from day one. I would have absolutely zero hesitation in recommending them!",
    author: 'Arjun Mehta',
    role: 'Senior Developer, DataSystems',
    rating: 5,
  },
  {
    quote: "Clann Staffing transformed our hiring process. Within 3 weeks, they filled 12 critical tech roles that our internal team had been struggling with for months. Their understanding of our requirements and culture was remarkable.",
    author: 'Sanjay Patel',
    role: 'CEO, BuildConstruct',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div>
      <HeroSection
        title="What People Are Saying"
        subtitle="Testimonials"
        description="The overwhelming amount of positive feedback we receive is a testament to our commitment to excellence. Don't just take our word for it — hear from those we've helped."
        backgroundImage="/hero-about.jpg"
        primaryButton={{ label: 'SHARE YOUR STORY', href: '/contact-us' }}
      />
      <WaveDivider />

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft relative">
                  <div className="absolute top-6 right-6 p-3 bg-amber/10 rounded-full">
                    <Quote size={24} className="text-amber" />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-navy-700 leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
                    <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-white font-serif text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">{testimonial.author}</p>
                      <p className="text-sm text-navy-500">{testimonial.role}</p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied clients and candidates who have found success with Clann Staffing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white rounded-pill font-semibold hover:bg-amber-dark transition-all hover:shadow-elevated"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                to="/upload-resume"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-pill font-semibold hover:bg-white/20 transition-all"
              >
                Upload Resume <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
