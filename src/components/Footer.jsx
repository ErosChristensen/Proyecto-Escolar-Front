import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4 flex justify-between items-center">
            <div className="space-y-1">
                <p className="font-bold uppercase text-sm">EEST N1 REPÚBLICA DE MÉXICO</p>
                <p className="text-sm">Programación y Electromecánica</p>
            </div>
            <div className="flex space-x-12 text-sm font-semibold">
            <div className=''>
                <a href="https://www.facebook.com" className="flex items-center space-x-2 hover:text-gray-400">
                    <FaFacebookF />
                    <span>Facebook</span>
                </a>

                <a href="https://www.instagram.com" className="flex items-center space-x-2 hover:text-gray-400">
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
            </div>
                <a href="tel:+5422815748349" className="flex items-center space-x-2 hover:text-gray-400">
                    <FaPhoneAlt />
                    <span>+54 2281 5748349</span>
                </a>

                <a href="mailto:escuelatecnica@fisj.com" className="flex items-center space-x-2 hover:text-gray-400" >
                    <FaEnvelope />
                    <span>escuelatecnica@gmail.com</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
