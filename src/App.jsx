import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Quality = lazy(() => import('./pages/Quality'));
const Contact = lazy(() => import('./pages/Contact'));

const Loading = () => <div className="p-8">Loading...</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<Loading />}><Products /></Suspense>} />
      <Route path="/quality" element={<Suspense fallback={<Loading />}><Quality /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
    </Routes>
  );
}

export default App;