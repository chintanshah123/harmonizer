import Hero from "@/components/Hero";
import BESSBenefits from "@/components/BESSBenefits";
import StatsBar from "@/components/StatsBar";
import ProductsPreview from "@/components/ProductsPreview";
import ClientLogos from "@/components/ClientLogos";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <BESSBenefits />
      <ProductsPreview />
      <ClientLogos />
      <RoadmapSection />
      <CTASection />
    </>
  );
}
