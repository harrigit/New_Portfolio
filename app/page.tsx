import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompaniesSection from '@/components/CompaniesSection';
import TechnologiesSection from '@/components/TechnologiesSection';
const DynamicAdditionalTechnologies = dynamic(
  () => import('@/components/AdditionalTechnologies')
);
const DynamicAboutmeSection = dynamic(
  () => import('@/components/AboutmeSections')
);
const DynamicProjectSection = dynamic(
  () => import('@/components/ProjectSection')
);
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className='container mx-auto px-2 md:px-8  text-base-content bg-primary'>
      <Header />
      <HeroSection />
      {/* <CompaniesSection /> */}
      <TechnologiesSection />
      <DynamicProjectSection />
      <DynamicAdditionalTechnologies />
      <DynamicAboutmeSection />
      <FooterSection />
    </main>
  );
}
