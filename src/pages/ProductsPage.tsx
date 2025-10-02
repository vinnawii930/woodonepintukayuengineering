import Container from "../components/Container";
import Footer from "../components/Footer";
import Contact from "../components/Layouts/Contact";
import PorductsAll from "../components/Layouts/ProductAll";
import Navigasi from "../components/Navigasi";
import { RevealOnScroll } from "../components/RevealOnScroll";

const ProductsPage = () => {
  return (
    <>
      <Container>
        {/* Navigasi */}
        <Navigasi />

        <PorductsAll />

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
};

export default ProductsPage;
