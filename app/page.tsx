import CTACentered from "@/components/cta-centered";
import Hero from "@/components/hero";
import Programs from "@/components/programs";
import SchoolStatistics from "@/components/statistics";
import Targets from "@/components/targets";
import Testimony from "@/components/testimony";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <WhyUs />
      <SchoolStatistics />
      <Testimony />
      <Targets />
      <CTACentered />
    </main>
  );
}
