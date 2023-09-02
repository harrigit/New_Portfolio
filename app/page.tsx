import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <main className='md:container md:mx-auto mb-72'>
      <Header />
      <HeroSection />
      <ProjectSection />
      <TechnologiesSection />
    </main>
  );
}
