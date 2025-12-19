import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { CORE_VALUES } from '../data/features';
import { COMPANY_NAME, COMPANY_LOCATION, FOUNDED_YEAR } from '../data/constants';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="About New Morning Milk Products"
          subtitle="Pioneering excellence in dairy production since 2023"
          backgroundImage="https://images.pexels.com/photos/10922959/pexels-photo-10922959.jpeg"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">
                  Company Overview
                </h2>
                <p className="text-lg text-slate mb-4 leading-relaxed">
                  {COMPANY_NAME} is a state-of-the-art dairy facility located in {COMPANY_LOCATION}. We represent the perfect blend of traditional dairy values and modern processing technology.
                </p>
                <p className="text-lg text-slate mb-4 leading-relaxed">
                  Our facility is equipped with advanced machinery and follows international quality standards to ensure that every product that leaves our plant meets the highest benchmarks of quality, safety, and nutrition.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  We are committed to sustainable practices, animal welfare, and community development, making us a responsible corporate citizen in the dairy industry.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray/20">
                <img
                  src="https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg"
                  alt="Dairy processing facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">
                Our Sourcing & Quality Practices
              </h2>
              <p className="text-lg text-slate max-w-3xl mx-auto">
                Every step of our process is designed to deliver pure, natural, and safe dairy products
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="cowinfo.jpg"
                alt="Our farming and quality practices"
                className="w-full max-w-4xl h-auto rounded-2xl border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">
                Our Journey
              </h2>
              <p className="text-lg text-slate mb-6 leading-relaxed">
                Founded in {FOUNDED_YEAR}, New Morning Milk Products began with a vision to revolutionize the dairy industry through quality, innovation, and sustainability.
              </p>
              <p className="text-lg text-slate mb-6 leading-relaxed">
                From our humble beginnings, we have grown into a trusted name in dairy production, continuously expanding our operations and product range while maintaining our commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Leadership & Experience
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading">
                  Experienced Leadership
                </h3>
                <p className="text-slate">
                  Our directors bring over 3+ years of hands-on dairy plant management experience
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading">
                  Quality Assurance
                </h3>
                <p className="text-slate">
                  Focus on rigorous quality control and compliance with safety standards
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading">
                  Workflow Optimization
                </h3>
                <p className="text-slate">
                  Expertise in streamlining operations for maximum efficiency and productivity
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">Technical Specifications</h2>
              <p className="text-lg text-slate max-w-3xl mx-auto">
                Our dairy products are crafted with precision and care, following international quality standards. Every batch undergoes rigorous testing to ensure optimal freshness, nutrition, and safety for your family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <dl className="grid grid-cols-1 gap-8">
                  {[
                    { name: 'Pasteurization', description: 'Milk and dairy products are pasteurized using controlled processes to ensure safety, freshness, and quality.' },
                    { name: 'Testing Protocol', description: 'Products undergo rigorous quality control checks to meet hygiene, safety, and quality standards.' },
                    { name: 'Storage', description: 'Dairy products are stored under controlled and hygienic conditions to preserve freshness and prevent contamination.' },
                    { name: 'Packaging', description: 'Modern and hygienic packaging solutions are used to protect product quality and integrity.' },
                    { name: 'Shelf Life', description: 'Products are designed to maintain optimal freshness throughout their intended shelf life under recommended storage conditions.' },
                    { name: 'Certifications', description: 'Operations comply with applicable food safety regulations and recognized industry standards.' },
                  ].map((feature) => (
                    <div key={feature.name} className="border-l-4 border-primary pl-4">
                      <dt className="font-semibold text-charcoal text-lg">{feature.name}</dt>
                      <dd className="mt-2 text-slate">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Fresh dairy products"
                  src="/gheeG.png"
                  className="rounded-lg bg-gray-100 w-full h-48 object-cover"
                />
                <img
                  alt="Quality testing laboratory"
                  src="/fullcreammilk.jpg"
                  className="rounded-lg bg-gray-100 w-full h-48 object-cover"
                />
                <img
                  alt="Modern dairy facility"
                  src="/curds.jpg"
                  className="rounded-lg bg-gray-100 w-full h-48 object-cover"
                />
                <img
                  alt="Packaged dairy products"
                  src="ProductRange.jpg"
                  className="rounded-lg bg-gray-100 w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-heading">
                  Our Mission
                </h2>
                <p className="text-lg text-slate leading-relaxed">
                  To deliver premium quality dairy products that nourish lives while maintaining the highest standards of safety, sustainability, and ethical practices.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8" style={{ color: 'var(--color-slate)' }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-heading">
                  Our Vision
                </h2>
                <p className="text-lg text-slate leading-relaxed">
                  To become a leading dairy products company recognized for innovation, quality, and sustainability.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((value) => (
                <div key={value.id} className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}