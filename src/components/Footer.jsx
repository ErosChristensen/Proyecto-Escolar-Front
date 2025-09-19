import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
 
        <div className="space-y-2 text-center md:text-left">
          <p className="font-bold uppercase text-lg sm:text-xl">
            EEST N1 REPÚBLICA DE MÉXICO
          </p>
          <p className="text-base sm:text-lg font-semibold">
            Programación y Electromecánica
          </p>
        </div>

    
        <div className="flex flex-col sm:flex-row gap-8 text-base sm:text-lg font-semibold">
          <div className="space-y-3">
            <a
              href="https://www.facebook.com"
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com"
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+5422815748349"
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaPhoneAlt />
              <span>+54 2281 5748349</span>
            </a>
            <a
              href="mailto:eest1benitojuarez@abc.gob.ar"
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaEnvelope />
              <span>eest1benitojuarez@abc.gob.ar</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
