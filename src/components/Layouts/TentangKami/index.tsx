import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { products } from "../../../api/products/products";

type PropsProduct = {
  id: number;
  image: string;
};

const TentangKamiLayout = () => {
  return (
    <>
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
              direkatkan menjadi lapisan-lapisan, seperti plywood atau MDF, dengan finishing veneer atau HPL yang menyerupai tampilan kayu solid. Material ini lebih stabil, tidak mudah memuai atau melengkung, tahan terhadap rayap dan suara,
              serta lebih ramah lingkungan karena memanfaatkan kayu hasil sisa produksi.
            </p>
            <p className="text-base text-neutral text-justify">
              Lapisan Luar (Veneer/HPL): Permukaan pintu dilapisi veneer (lapisan kayu tipis) atau HPL (High Pressure Laminate) untuk memberikan tampilan estetis yang beragam dan mirip kayu solid.
            </p>
            <p className="font-semibold">Keunggulan:</p>
            <ol className="list-decimal list-inside">
              <li>Stabilitas: Tidak mudah memuai, menyusut, atau melengkung karena konstruksinya yang berlapis-lapis.</li>
              <li>Daya Tahan: Lebih tahan terhadap rayap dan tidak rentan terhadap perubahan suhu dan kelembaban.</li>
              <li>Ramah Lingkungan: Menggunakan material kayu olahan yang memaksimalkan penggunaan potongan kayu, sehingga lebih efisien.</li>
            </ol>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TentangKamiLayout;
