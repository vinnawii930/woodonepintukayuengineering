import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Contact from "../components/Layouts/Contact";
import Navigasi from "../components/Navigasi";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const FAQs = () => {
  return (
    <Container>
      {/* Navigasi */}
      <Navigasi />

      <RevealOnScroll>
        <Card>
          <div className="text-start mb-10">
            <h3 className="text-xl lg:text-3xl font-semibold underline-offset-8 underline text-pr">
              <FontAwesomeIcon icon={faCircleQuestion} /> Frequently Asked Questions
            </h3>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-pr">Apakah bisa custom ukuran?</div>
            <div className="collapse-content text-sm text-neutral">Bisa banget dong, sesuai kebutuhan.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-pr">Berapa lama pengerjaan?</div>
            <div className="collapse-content text-sm text-neutral">Rata-rata 2-4 minggu.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-pr">Apakah kirim luar kota?</div>
            <div className="collapse-content text-sm text-neutral">Bisa banget dong pastinya, bisa kirim luar kota.</div>
          </div>
        </Card>
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
  );
};

export default FAQs;
