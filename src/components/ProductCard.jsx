export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      
      {/* Image */}
      <div
        className="relative w-full overflow-hidden bg-gray-light"
        style={{ aspectRatio: '4 / 3' }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-charcoal mb-1 font-heading group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>

        {product.fatContent && (
          <span className="inline-block px-2 py-0.5 bg-secondary/20 text-charcoal text-xs font-semibold rounded-full mb-2 w-fit border border-secondary/30">
            {product.fatContent} Fat
          </span>
        )}

        <p className="text-slate text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
