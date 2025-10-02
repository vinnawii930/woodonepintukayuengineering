import { faArrowRight, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "../../../api/products/products";
import { Link } from "react-router";
import { RevealOnScroll } from "../../RevealOnScroll";

type PropsProduct = {
  id: number;
  image: string;
  title: string;
};

const PorductsAll = () => {
  return (
    <Card>
      <div className="text-start mb-10">
        <h3 className="text-xl lg:text-3xl font-semibold underline-offset-8 underline text-pr">
          <FontAwesomeIcon icon={faDoorOpen} /> Produk Kami
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product: PropsProduct) => (
            <RevealOnScroll>
              <div
                key={product.id}
                className="relative bg-background rounded-xl shadow-md overflow-hidden pb-16"
                // ✅ kasih padding bawah supaya footer nggak nutupin konten
              >
                {/* Gambar */}
                <div className="flex justify-center items-center p-4">
                  <img src={product.image} alt={product.title} className="object-cover object-center w-auto h-60" />
                </div>

                {/* Footer absolute */}
                <div className="absolute bottom-0 left-0 right-0 bg-pr py-2 px-3 rounded-tr-3xl flex justify-between items-center">
                  <h3 className="text-white font-semibold text-sm md:text-lg">{product.title}</h3>
                  <Link to={`/detail-produk/${product.id}`}>
                    <button className="text-xs md:text-sm text-pr bg-background px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer">
                      Lihat Detail
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))
        ) : (
          <p>Produk tidak tersedia</p>
        )}
      </div>
    </Card>
  );
};

export default PorductsAll;
