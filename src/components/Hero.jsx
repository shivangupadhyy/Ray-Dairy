import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero({ title, subtitle, backgroundImage, primaryCTA, secondaryCTA }) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden={true}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/40 to-black/30 pointer-events-none" aria-hidden={true}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight animate-fade-in drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)' }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg" style={{ textShadow: '0 3px 10px rgba(0, 0, 0, 0.8)' }}>
          {subtitle}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-2xl hover:scale-105 shadow-lg"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className="inline-flex items-center px-8 py-4 border-2 border-white/80 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}