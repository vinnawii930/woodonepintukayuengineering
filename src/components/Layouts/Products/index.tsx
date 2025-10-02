import { faArrowRight, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "../../../api/products/products";
import { Link } from "react-router";

export type ProductSpec = {
  type?: string;
  material?: string;
  finishing: string;
  veneer?: string;
  glass?: string;
  accessories?: string[];
};

export type ProductSize =
  | {
      thickness: string;
      width: string;
      height: string;
    }
  | {
      frame: string;
      wall: string;
    };

export type Product = {
  id: number;
  image: string;
  title: string;
  spesification: ProductSpec;
  size: ProductSize;
};


const Porducts = () => {
  return (
    <>
      <Card>
        <div className="text-start mb-10">
          <h3 className="text-xl lg:text-3xl font-semibold underline-offset-8 underline text-pr">
            <FontAwesomeIcon icon={faDoorOpen} /> Produk Kami
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.length > 0 ? (
            products.slice(0, 6).map((product: Product) => (
              <div className="relative" key={product.id}>
                <div className="w-full flex justify-center items-center bg-background p-4 rounded-xl">
                  <img src={product.image} alt={product.title} className="object-cover object-center bg-no-repeat w-auto h-60" />
                </div>
                <div className="absolute bottom-0 left-0 bg-pr py-2 px-3 rounded-tr-3xl shadow-md w-full flex justify-between items-center">
                  <h3 className="text-white font-semibold text-lg">{product.title}</h3>
                  <Link to={`/detail-produk/${product.id}`}>
                    <button className="text-xs md:text-sm text-pr bg-background px-4 py-2 rounded-full cursor-pointer">
                      Lihat Detail
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Produk tidak tersedia</p>
          )}
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link to={"/produk"}>
            <button className="text-sm md:text-lg text-white bg-sc px-6 py-2 rounded-full cursor-pointer hover:bg-sc/90 transition-all duration-300">
              Lihat Semua Produk
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default Porducts;
