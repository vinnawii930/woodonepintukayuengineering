import Container from "../components/Container";
import Navigasi from "../components/Navigasi";
import { RevealOnScroll } from "../components/RevealOnScroll";
import Hero from "../components/Layouts/Hero";
import Layanan from "../components/Layouts/Layanan";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import { products } from "../api/products/products";
import { Link } from "react-router";
import Contact from "../components/Layouts/Contact";
import Footer from "../components/Footer";
import Products from "../components/Layouts/Products";


type PropsProduct = {
  id: number;
  image: string;
  title: string;
};

const Beranda = () => {
  return (
    <>
      <Container>
        {/* Navigasi */}
        <Navigasi />

        <RevealOnScroll>
          {/* Konten Beranda */}
          <Hero />
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Layanan */}
          <Layanan />
        </RevealOnScroll>

        {/* Tentang Kami */}
        <RevealOnScroll>
          <Card>
            <div className="text-start mb-10">
              <h3 className="text-xl lg:text-3xl font-semibold underline-offset-8 underline text-pr">
                <FontAwesomeIcon icon={faBuilding} /> Tentang Kami
              </h3>
            </div>
            <div className="flex justify-center items-center gap-6 flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/2 relative">
                <div className="carousel carousel-center bg-background rounded-box space-x-4 p-4 h-[400px]">
                  {products.slice(0, 8).map((product: PropsProduct) => (
                    <div className="carousel-item" key={product.id}>
                      <img src={product.image} className="rounded-box" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 bg-pr py-2 px-6 text-white rounded-tr-3xl shadow-md">Woodone Pintu Kayu Engineering</div>
              </div>
              <div className="w-full md:w-1/2 space-y-2">
                <p className="text-base text-neutral text-justify">
                  <span className="text-sc">PT Woodone Integra Indonesia</span> adalah perusahaan joint venture antara Woodone Co., Ltd dari Jepang dan Integra Group dari Indonesia. Pintu yang terbuat dari kayu olahan yang disusun dan
                  direkatkan menjadi lapisan-lapisan, seperti plywood atau MDF, dengan finishing veneer atau HPL yang menyerupai tampilan kayu solid. Material ini lebih stabil, tidak mudah memuai atau melengkung, tahan terhadap rayap dan
                  suara, serta lebih ramah lingkungan karena memanfaatkan kayu hasil sisa produksi.
                </p>
                <p className="text-base text-neutral text-justify line-clamp-2">
                  Lapisan Luar (Veneer/HPL): Permukaan pintu dilapisi veneer (lapisan kayu tipis) atau HPL (High Pressure Laminate) untuk memberikan tampilan estetis yang beragam dan mirip kayu solid.
                </p>
                <div className="mt-4 flex gap-3">
                  <Link to={"/tentang-kami"}>
                    <button className="text-sm text-white bg-sc px-6 py-2 rounded-full cursor-pointer hover:bg-sc/90 transition-all duration-300">
                      Baca Selengkapnya
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Produk Kami */}
          <Products />
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
};

export default Beranda;
