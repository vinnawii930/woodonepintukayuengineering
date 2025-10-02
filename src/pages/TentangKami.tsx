import Container from "../components/Container";
import Footer from "../components/Footer";
import Contact from "../components/Layouts/Contact";
import TentangKamiLayout from "../components/Layouts/TentangKami";
import Navigasi from "../components/Navigasi";
import { RevealOnScroll } from "../components/RevealOnScroll";

const TentangKami = () => {
  return (
    <>
      <Container>
        {/* Navigasi */}
        <Navigasi />

        <RevealOnScroll>
          {/* Tentang Kami */}
          <TentangKamiLayout />
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Kontak Kami */}
          <Contact />
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Footer */}
          <Footer />
        </RevealOnScroll>
      </Container>
    </>
  );
}

export default TentangKami;