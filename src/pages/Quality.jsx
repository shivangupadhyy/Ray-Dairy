import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { ShieldCheck, Leaf, Heart, Users } from 'lucide-react';
import { FaCow } from 'react-icons/fa6';

export default function Quality() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Quality & Sustainability"
          subtitle="Our commitment to excellence and environmental responsibility"
          backgroundImage="/sunable.png"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">
                  Quality Assurance
                </h2>
                <p className="text-lg text-slate mb-4 leading-relaxed">
                  At New Morning Milk Products, quality is not just a goal—it's our foundation. We implement rigorous quality control processes at every stage of production.
                </p>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Comprehensive testing of raw materials and finished products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Strict hygiene and sanitation protocols throughout the facility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Compliance with national and international safety standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Regular audits and certifications from recognized authorities</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray/20">
                <img
                  src="/sustinable.jpg"
                  alt="Quality control in dairy facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/SustainabilityPractices.png"
                  alt="Sustainable farming practices"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8" style={{ color: '#4CAF50' }} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading">
                  Sustainability Practices
                </h2>
                <p className="text-lg text-slate mb-4 leading-relaxed">
                  We are committed to minimizing our environmental footprint while maximizing positive impact on our communities.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                      Energy-Efficient Operations
                    </h3>
                    <p className="text-slate">
                      Modern equipment and optimized processes reduce energy consumption.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                      Carbon Neutrality Goal
                    </h3>
                    <p className="text-slate">
                      Working towards achieving carbon neutrality by 2040.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCow className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Animal Welfare
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <Heart className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading">
                  Humane Treatment
                </h3>
                <p className="text-slate">
                  All animals are treated with respect and care, ensuring their comfort and health.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <ShieldCheck className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading">
                  High Care Standards
                </h3>
                <p className="text-slate">
                  Regular veterinary checkups, proper nutrition, and comfortable living conditions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <Users className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading">
                  Farmer Collaboration
                </h3>
                <p className="text-slate">
                  Working closely with local farmers to ensure best practices in animal husbandry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}