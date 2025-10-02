import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../Card";
import { faDoorOpen, faFileSignature, faMagic, faTruckFast } from "@fortawesome/free-solid-svg-icons";

const Layanan = () => {
  return (
    <>
      <Card>
        <div className="text-start mb-10">
          <h3 className="text-xl lg:text-3xl font-semibold underline-offset-8 underline text-pr">
            <FontAwesomeIcon icon={faFileSignature} /> Layanan Yang Kami Tawarkan
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <div className="bg-pr p-4 text-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-pr">
              <FontAwesomeIcon icon={faHammer} size="xl" />
            </div>
            <h5 className="mt-3 font-bold text-xl">Pembuatan Pintu Custom</h5>
            <p className="text-base font-normal">sesuai desain dan ukuran</p>
          </div> */}
          <div className="bg-pr p-4 text-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-pr">
              <FontAwesomeIcon icon={faDoorOpen} size="xl" />
            </div>
            <h5 className="mt-3 font-bold text-xl">Pintu Kayu Standar & Premium</h5>
            <p className="text-base font-normal">berbagai model siap pakai</p>
          </div>
          <div className="bg-pr p-4 text-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-pr">
              <FontAwesomeIcon icon={faMagic} size="xl" />
            </div>
            <h5 className="mt-3 font-bold text-xl">Finishing & Ukiran</h5>
            <p className="text-base font-normal">memperindah detail pintu</p>
          </div>
          <div className="bg-pr p-4 text-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-pr">
              <FontAwesomeIcon icon={faTruckFast} size="xl" />
            </div>
            <h5 className="mt-3 font-bold text-xl">Pengiriman</h5>
            <p className="text-base font-normal">layanan ke berbagai daerah</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Layanan;