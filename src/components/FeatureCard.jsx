import { Award, Leaf, Settings, LayoutGrid, Heart } from 'lucide-react';

const iconMap = {
  award: Award,
  leaf: Leaf,
  settings: Settings,
  'layout-grid': LayoutGrid,
  heart: Heart,
};

export default function FeatureCard({ feature }) {
  const Icon = iconMap[feature.icon] || Award;

  return (
    <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray/20">
      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-primary/20">
        <Icon className="w-8 h-8" style={{ color: '#2D6A4F' }} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-semibold text-charcoal mb-3 font-heading group-hover:text-primary transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-slate leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}