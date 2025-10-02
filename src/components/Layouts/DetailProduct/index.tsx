import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../Card";
import { faArrowLeft, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router";
import { products } from "../../../api/products/products";
import Container from "../../Container";
import { RevealOnScroll } from "../../RevealOnScroll";
import Navigasi from "../../Navigasi";
import Contact from "../Contact";
import Footer from "../../Footer";

const DetailProduct = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return (
      <Container>
        <RevealOnScroll>
          <Card>
            <p className="text-pr font-normal text-sm text-center min-h-dvh">Produk tidak ditemukan</p>
          </Card>
        </RevealOnScroll>
      </Container>
    );
  }

  return (
    <Container>
      {/* Navigasi */}
      <Navigasi />

      <RevealOnScroll>
        <Card>
          <div className="text-start mb-10">
            <h3 className="text-xl lg:text-3xl font-semibold underline-offset-8 underline text-pr">
              <FontAwesomeIcon icon={faDoorOpen} /> Detail Produk
            </h3>
          </div>

          {/* Card Detail di Tengah */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 border border-pr rounded-xl max-w-screen-md w-full shadow-md p-6">
              {/* Gambar */}
              <div className="w-full md:w-1/2 flex justify-center items-center bg-background p-4 rounded-xl">
                <img src={product.image} alt={product.title} className="object-cover object-center w-auto h-72 md:h-96 rounded-lg" />
              </div>

              {/* Info Produk */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-pr">{product.title}</h3>

                {/* Spesifikasi */}
                <p className="mt-4 font-medium">Spesifikasi:</p>
                <ol className="mt-2 space-y-1 text-sm md:text-base">
                  {Object.entries(product.spesification).map(([key, value]) => (
                    <li key={key}>
                      <span className="capitalize font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ol>

                {/* Ukuran */}
                <p className="mt-4 font-medium">Ukuran (cm):</p>
                <ol className="mt-2 space-y-1 text-sm md:text-base">
                  {Object.entries(product.size).map(([key, value]) => (
                    <li key={key}>
                      <span className="capitalize font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ol>

                {/* Tombol Aksi */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                  <Link to="/produk">
                    <button className="text-xs md:text-sm text-background bg-sc px-4 py-2 rounded-full cursor-pointer hover:bg-sc/90 transition">
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                      Kembali ke Produk
                    </button>
                  </Link>
                  <a href="https://wa.me/6285932945042?text=Halo%20saya%20mau%20tanya%20tentang%20produk%20Anda" target="_blank" rel="noopener noreferrer">
                    <button className="text-sm text-white bg-pr px-6 py-2 rounded-full cursor-pointer hover:bg-pr/90 transition-all">WhatsApp</button>
                  </a>
                </div>
              </div>
            </div>
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

export default DetailProduct;
