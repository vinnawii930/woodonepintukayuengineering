import { Link } from "react-router";
import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { products } from "../../../api/products/products";

type PropsProduct = {
  id: number;
  image: string;
};

const Hero = () => {
  return (
    <>
      <Card>
        <div className="flex justify-center items-center gap-6 flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="text-5xl font-bold text-pr">
              <span className="text-sc">Woodone</span> Pintu Kayu Engineering
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-neutral">Mewujudkan Pintu Impian Anda dengan Sentuhan Elegan Kayu Asli</p>
            <div className="mt-6">
              <Link to={"/produk"}>
                <button className="text-sm lg:text-lg text-white bg-sc px-6 py-2 rounded-full cursor-pointer hover:bg-sc/90 transition-all duration-300">
                  Lihat Produk
                  <FontAwesomeIcon icon={faDoorOpen} className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 relative">
            <div className="carousel carousel-center bg-background rounded-box space-x-4 p-4 h-[400px]">
              {products.slice(0, 8).map((product: PropsProduct) => (
                <div className="carousel-item" key={product.id}>
                  <img src={product.image} className="rounded-box" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 bg-pr py-2 px-6 text-white rounded-tr-3xl shadow-md">Woodone Pintu Kayu Engineering</div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Hero;
