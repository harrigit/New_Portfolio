import AboutmeSections from "@/components/AboutmeSections";
import AdditionalTechnologies from "@/components/AdditionalTechnologies";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <main className='container mx-auto mb-72'>
      <Header />
      <HeroSection />
      <ProjectSection />
      <TechnologiesSection />
      <AdditionalTechnologies />
      <AboutmeSections />
    </main>
  );
}
