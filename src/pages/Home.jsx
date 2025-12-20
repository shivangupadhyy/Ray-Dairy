import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import { FEATURED_PRODUCTS } from '../data/products';
import { FEATURES } from '../data/features';
import { COMPANY_NAME, COMPANY_LOCATION, FOUNDED_YEAR } from '../data/constants';

export default function Home() {
  return (
    <>
      <SEO
        title="Ray Dairy | Fresh & Quality Dairy Products"
        description="Ray Dairy delivers fresh milk, paneer, ghee, curd, and premium dairy products with a commitment to quality, hygiene, and sustainability."
      />
      <Header />
      <main>
        <Hero
          title="Delivering Freshness, Quality, and Trust in Every Drop"
          subtitle="Premium dairy products crafted with care, combining traditional values with modern technology"
          backgroundImage="https://images.unsplash.com/photo-1665105519765-a0ec8e027100?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxTY2VuaWMlMjBkYWlyeSUyMGZhcm0lMjB3aXRoJTIwY293cyUyMGdyYXppbmclMjBpbiUyMGdyZWVuJTIwcGFzdHVyZXMlMjB1bmRlciUyMGJsdWUlMjBza3l8ZW58MHwwfHxncmVlbnwxNzY1NzMwOTA1fDA&ixlib=rb-4.1.0&q=85"
          primaryCTA={{ text: 'Explore Our Products', href: '/products' }}
          secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        />

        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">
                  About {COMPANY_NAME}
                </h2>
                <p className="text-lg text-slate mb-4 leading-relaxed">
                  Located in {COMPANY_LOCATION}, we are a state-of-the-art dairy facility committed to delivering premium quality dairy products.
                </p>
                <p className="text-lg text-slate mb-6 leading-relaxed">
                  Founded in {FOUNDED_YEAR}, we blend traditional dairy values with modern processing technology to ensure the highest standards of quality, freshness, and sustainability.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray/20">
                <img
                  src="plant1.webp"
                  alt="Modern dairy processing facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Our Premium Products
              </h2>
              <p className="text-lg text-slate max-w-2xl mx-auto">
                Discover our wide range of high-quality dairy products, crafted with care and precision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-secondary text-charcoal rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Why Choose Us
              </h2>
              <p className="text-lg text-slate max-w-2xl mx-auto">
                Our commitment to excellence sets us apart in the dairy industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Partner with a Trusted Dairy Producer
            </h2>
            <p className="text-xl mb-8 text-cream">
              Join hands with us for premium quality dairy products and exceptional service
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-cream hover:shadow-xl hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}