import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

export default function Products() {
  const milkProducts = ALL_PRODUCTS.filter((p) => p.category === 'milk-products');
  const dairyPowdersFats = ALL_PRODUCTS.filter((p) => p.category === 'dairy-powders-fats');
  const freshProcessed = ALL_PRODUCTS.filter((p) => p.category === 'fresh-processed');
  const furtherProducts = ALL_PRODUCTS.filter((p) => p.category === 'further-products');

  return (
    <>
      <SEO
        title="Our Products | Milk, Paneer, Ghee & Dairy Items"
        description="Explore Ray Dairy’s premium product range including milk, paneer, ghee, curd, and other high-quality dairy products."
      />
      <Header />
      <main>
        <Hero
          title="Our Premium Product Range"
          subtitle="Discover our wide selection of high-quality dairy products"
          backgroundImage="/productHome.jpg"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Milk Products
              </h2>
              <p className="text-lg text-slate">
                Fresh, nutritious milk in various fat content options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milkProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Dairy Powders & Fats
              </h2>
              <p className="text-lg text-slate">
                Premium quality powders, ghee, and butter
              </p>
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dairyPowdersFats.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Fresh & Processed Products
              </h2>
              <p className="text-lg text-slate">
                Traditional dairy products made fresh daily
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freshProcessed.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
                Further Products
              </h2>
              <p className="text-lg text-slate">
                Delicious cheese, ice cream, and traditional sweets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {furtherProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}