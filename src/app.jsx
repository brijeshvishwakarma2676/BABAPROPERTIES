import React from 'react';
import {
  HashRouter, Routes, Route, useRouter,
} from './components/shared';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ProcessPage from './pages/process';
import ProjectsPage from './pages/projects';
import TestimonialsPage from './pages/testimonials';
import FAQPage from './pages/faq';
import ContactPage from './pages/contact';

const ScrollToTop = () => {
  const { page } = useRouter();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);
  return null;
};

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20">
    <div className="font-cinzel text-8xl font-black text-gold/45 mb-4">404</div>
    <h2 className="font-cinzel text-2xl font-bold text-white mb-4">Page Not Found</h2>
    <p className="font-inter text-sm text-white/70 mb-8">The page you are looking for does not exist.</p>
    <a href="#/" className="btn-gold">Back to Home</a>
  </div>
);

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
      <Navbar />
      <main style={{ flex:1 }}>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/services"     element={<ServicesPage />} />
          <Route path="/process"      element={<ProcessPage />} />
          <Route path="/projects"     element={<ProjectsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq"          element={<FAQPage />} />
          <Route path="/contact"      element={<ContactPage />} />
          <Route path="*"             element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
