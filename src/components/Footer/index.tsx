import Card from "../Card";
import LogoWoodone from "../../assets/logoWoodone.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <Card>
      <div className="flex justify-between items-center gap-4 flex-col md:flex-row mb-5">
        <img src={LogoWoodone} alt="Logo Woodone" className="w-28" />
        <div className="flex justify-center items-center gap-4 text-pr">
          <Link to={"/"}>Beranda</Link>
          <Link to={"/tentang-kami"}>Tentang Kami</Link>
          <Link to={"/produk"}>Produk</Link>
          <Link to={"/faqs"}>FAQs</Link>
        </div>
      </div>
      <hr className="my-2 border-gray-300" />
      <p className="text-sm text-neutral">&copy; 2025 Woodone Integra. All rights reserved.</p>
    </Card>
  );
};

export default Footer;
