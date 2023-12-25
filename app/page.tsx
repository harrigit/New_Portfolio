import AboutmeSections from "@/components/AboutmeSections";
import AdditionalTechnologies from "@/components/AdditionalTechnologies";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <main className="container mx-auto px-8  text-base-content bg-primary">
      <Header />
      <HeroSection />
      {/* <ProjectSection /> */}
      <TechnologiesSection />
      <AdditionalTechnologies />
      <AboutmeSections />
      <FooterSection />
    </main>
  );
}
