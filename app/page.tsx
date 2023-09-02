import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className='md:container md:mx-auto'>
      <Header />
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
