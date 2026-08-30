import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Differentiator } from "./sections/Differentiator.jsx";
import { Solutions } from "./sections/Solutions.jsx";
import { Process } from "./sections/Process.jsx";
import { Projects } from "./sections/Projects.jsx";
import { EnergyAnimation } from "./sections/EnergyAnimation.jsx";
import { Sustainability } from "./sections/Sustainability.jsx";
import { Testimonials } from "./sections/Testimonials.jsx";
import { TrustSection } from "./sections/TrustSection.jsx";
import { CTA } from "./sections/CTA.jsx";
import { Contact } from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Differentiator />
        <Solutions />
        <Process />
        <Projects />
        <EnergyAnimation />
        <Sustainability />
        <Testimonials />
        <TrustSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
