import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Area from "@/components/Area";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Area />
        <Menu />
        <Contact />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
