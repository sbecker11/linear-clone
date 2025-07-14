import Header from './components/Header';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import ModernTeams from './components/ModernTeams';
import ProjectDirection from './components/ProjectDirection';
import IssueTracking from './components/IssueTracking';
import AISection from './components/AISection';
import Collaboration from './components/Collaboration';
import Foundations from './components/Foundations';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <ModernTeams />
        <ProjectDirection />
        <IssueTracking />
        <AISection />
        <Collaboration />
        <Foundations />
      </main>
      <Footer />
    </div>
  );
}
