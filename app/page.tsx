import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import System from "@/components/System";
import Hive from "@/components/Hive";
import Bee from "@/components/Bee";
import Capabilities from "@/components/Capabilities";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <System />
      <Hive />
      <Bee />
      <Capabilities />
      <Integrations />
      <CTA />
      <Footer />
    </>
  );
}
