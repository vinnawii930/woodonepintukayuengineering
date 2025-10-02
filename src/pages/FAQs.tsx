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
            <div className="collapse-title font-semibold text-pr">Berapakah lama proses pengerjaan produk?</div>
            <div className="collapse-content text-sm text-neutral">Rata-rata waktu pengerjaan sekitar 20 hari, tergantung jenis produk dan ketersediaan bahan.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-pr">Bagaimana cara perawatan produk agar lebih awet?</div>
            <div className="collapse-content text-sm text-neutral">Bersihkan secara rutin dengan lap kering atau sedikit lembab, hindari penggunaan bahan kimia keras.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-pr">Apakah kirim luar kota?</div>
            <div className="collapse-content text-sm text-neutral">Bisa, kami bekerja sama dengan ekspedisi terpercaya untuk pengiriman ke seluruh Indonesia.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-pr">Metode pembayaran apa saja yang tersedia?</div>
            <div className="collapse-content text-sm text-neutral">Kami menerima transfer bank, e-wallet, dan pembayaran via marketplace resmi.</div>
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
