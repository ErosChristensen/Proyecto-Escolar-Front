import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white max-h-30 py-20 px-60 flex justify-between items-center">
            <div className="space-y-2">
                <p className="font-bold uppercase text-xl">EEST N1 REPÚBLICA DE MÉXICO</p>
                <p className="text-lg font-semibold">Programación y Electromecánica</p>
            </div>
            <div className="flex space-x-12 text-lg font-semibold ">
                <div className='space-y-3'>
                    <a href="https://www.facebook.com" className="flex items-center space-x-2 hover:text-gray-400">
                        <FaFacebookF />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com" className="flex items-center space-x-2 hover:text-gray-400">
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>
                </div>
                <div className='space-y-3'>
                    <a href="tel:+5422815748349" className="flex items-center space-x-2 hover:text-gray-400">
                        <FaPhoneAlt />
                        <span>+54 2281 5748349</span>
                    </a>
                    <a href="mailto:eest1benitojuarez@abc.gob.ar" className="flex items-center space-x-2 hover:text-gray-400" >
                        <FaEnvelope />
                        <span>eest1benitojuarez@abc.gob.ar</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;