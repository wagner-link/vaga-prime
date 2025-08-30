import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JobDescription from '@/components/JobDescription';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <JobDescription />
      <ApplicationForm />
      <Footer />
    </main>
  );
}