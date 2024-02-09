import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechnologiesSection from '@/components/TechnologiesSection';
const DynamicAdditionalTechnologies = dynamic(
  () => import('@/components/AdditionalTechnologies')
);
const DynamicAboutmeSection = dynamic(
  () => import('@/components/AboutmeSections')
);
import FooterSection from '@/components/FooterSection';
// import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className='container mx-auto px-2 md:px-8  text-base-content bg-primary'>
      <Header />
      <HeroSection />
      {/* <ProjectSection /> */}
      <TechnologiesSection />
      <DynamicAdditionalTechnologies />
      <DynamicAboutmeSection />
      <FooterSection />
    </main>
  );
}
