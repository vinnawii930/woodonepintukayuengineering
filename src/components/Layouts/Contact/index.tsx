import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../Card";
import { faDoorOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Contact = () => {
  return (
    <>
      <Card>
        <div className="flex justify-center items-center gap-6 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl lg:text-6xl font-semibold text-pr">Cara menghubungi kami</h3>
            <p className="text-base text-neutral mt-2">Ada pertanyaan? Kami selalu siap membantu.</p>
            <div className="mt-4 rounded-box overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5779473382636!2d106.86344817453073!3d-6.1871928606196525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f7c58df2e3:0x397b3269c562ac96!2sJl. Percetakan Negara Blok C No.266, RT.3/RW.6, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570!5e0!3m2!1sid!2sid!4v1759332208560!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen // Corrected property name
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // Corrected property name
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-background p-4 text-pr rounded-lg shadow-sm">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-pr">
                  <FontAwesomeIcon icon={faPhone} size="xl" />
                </div>
                <h5 className="mt-5 font-bold text-xl">Hubungi kami</h5>
                <p className="text-base font-normal pt-3">Bicaralah kepada kami melalui pesan whatsapp</p>
                <a href="https://wa.me/6285932945042?text=Halo%20saya%20mau%20tanya%20tentang%20produk%20Anda" target="_blank" rel="noopener noreferrer">
                  <button className="text-sm text-white bg-pr px-6 py-2 rounded-full cursor-pointer mt-5 hover:bg-pr/90 transition-all">WhatsApp</button>
                </a>
              </div>
              <div className="bg-background p-4 text-pr rounded-lg shadow-sm">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-pr">
                  <FontAwesomeIcon icon={faDoorOpen} size="xl" />
                </div>
                <h5 className="mt-5 font-bold text-xl">Kunjungi kami</h5>
                <p className="text-base font-normal pt-3">Senin sampai Jumat 8 pagi - 5 sore</p>
                <Link to={"https://maps.app.goo.gl/EJ33zFTm9LYF53cFA"}>
                  <button className="text-sm text-white bg-pr px-6 py-2 rounded-full cursor-pointer mt-5">View Maps</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Contact;
