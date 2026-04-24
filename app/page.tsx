import HeroSection from "@/components/HeroSection";
import LearningManagement from "@/components/LearningManagement";
import CorporateTrainings from "@/components/CorporateTrainings";
import ManagementProgram from "@/components/ManagementProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-nunito-normal">
      <HeroSection />
      <LearningManagement />
      <CorporateTrainings />
      <ManagementProgram />
      <TransformationHub />
      <TrainingConsultant />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
