import { Routes, Route, useLocation, Outlet } from 'react-router';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Jobs from './pages/Jobs';
import Team from './pages/Team';
import Contact from './pages/Contact';
import UploadResume from './pages/UploadResume';
import Testimonials from './pages/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import TestYourself from './pages/TestYourself';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Main layout with Navbar and Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Route>

      {/* Hidden route - standalone, no navbar/footer */}
      <Route path="/test-yourself" element={<TestYourself />} />
    </Routes>
  );
}

export default App;
