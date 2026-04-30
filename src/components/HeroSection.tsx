import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  overlayOpacity?: number;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryButton,
  secondaryButton,
  overlayOpacity = 0.65,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-navy-900"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {subtitle && (
            <p className="text-amber font-sans text-sm font-semibold tracking-widest uppercase mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {primaryButton && (
              <Link
                to={primaryButton.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-white rounded-pill font-sans font-semibold text-sm hover:bg-amber-dark transition-all hover:shadow-elevated group"
              >
                {primaryButton.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {secondaryButton && (
              <Link
                to={secondaryButton.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-pill font-sans font-semibold text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                {secondaryButton.label}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
