import { useState, useEffect } from "react";
import { 
  FaFacebookF, 
  FaTelegramPlane, 
  FaInstagram, 
  FaPhoneAlt,
  FaMobileAlt, 
  FaLaptop, 
  FaTabletAlt, 
  FaHeadphones, 
  FaTv, 
  FaCamera 
} from "react-icons/fa";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {  
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DH Electronics</h1>
        <div className="space-x-4">
          <a href="#products" className="hover:text-yellow-300">Products</a>
          <a href="#about" className="hover:text-yellow-300">About </a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Your Online Electronics Store</h2>
        <h2 className="text-2xl font-semibold mb-4">የእርስዎ Online ላይ ኤሌክትሮኒክስ ሱቅ</h2>
        <p className="text-lg mb-6">Phones, Laptops, Tablets, Headsets & More</p>
        <p className="text-md mb-6">ስልኮች፣ ላፕቶፖች፣ ታብሌቶች፣ ሆድሴቶች እና ሌሎችም</p>
        <a href="https://t.me/dp_chat1" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300">
          Shop Now / አሁን ይግዙ
        </a>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-12 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8">Our Electronics</h3>
        <h3 className="text-xl text-center mb-8 text-gray-600">የእኛ ኤሌክትሮኒክስ</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Smartphones", am: "ስማርትፎኖች", icon: <FaMobileAlt className="text-5xl text-blue-600" /> },
            { name: "Laptops", am: "ላፕቶፖች", icon: <FaLaptop className="text-5xl text-green-600" /> },
            { name: "Tablets", am: "ታብሌቶች", icon: <FaTabletAlt className="text-5xl text-purple-600" /> },
            { name: "Headsets", am: "ሆድሴቶች", icon: <FaHeadphones className="text-5xl text-red-600" /> },
            { name: "Televisions", am: "ቴሌቪዥኖች", icon: <FaTv className="text-5xl text-yellow-500" /> },
            { name: "Cameras", am: "ካሜራዎች", icon: <FaCamera className="text-5xl text-pink-500" /> },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-lg flex flex-col items-center hover:shadow-lg transition">
              {item.icon}
              <h4 className="text-xl font-semibold mt-4">{item.name}</h4>
              <h4 className="text-lg text-gray-700">{item.am}</h4>
              <p className="text-gray-600 text-center mt-2">
                High-quality and affordable {item.name.toLowerCase()} available now.
              </p>
              <p className="text-gray-600 text-center text-sm mt-1">
                ጥሩ ጥራት እና በተመጣጣኝ ዋጋ ያለው {item.am} አሁን ይገኛል።
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-4">About Us</h3>
        <h3 className="text-xl text-center mb-4 text-gray-700">ስለ እኛ</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          DH Electronics is your trusted online electronics store located in Harar.
          We deliver across Ethiopia and provide the latest gadgets at competitive prices.
        </p>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mt-2">
          DH Electronics በሀረር የሚገኘ የታመነ Online ላይ ኤሌክትሮኒክስ ሱቅ ነው።
          በኢትዮጵያ ውስጥ ሁሉ ቦታ ያስረከባልን እና የቅናሽ ዋጋ ያላቸውን የዘመናዊ መሳሪያዎች እናቀርባለን።
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-12 bg-blue-50">
        <h3 className="text-3xl font-bold text-center mb-4">Contact Us</h3>
        <h3 className="text-xl text-center mb-4 text-gray-700">አድራሻችን</h3>
        <p className="text-center mb-6">Connect with us on social media or call us directly.</p>
        <p className="text-center mb-6">በማህበራዊ ሚዲያ ይገናኙን ወይም በቀጥታ ይደውሉልን።</p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6 text-2xl text-blue-600">
            <a href="https://facebook.com/dhelectronics1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="https://t.me/dp_chat1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaTelegramPlane />
            </a>
            <a href="https://instagram.com/dh_electronics" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
          <div className="flex items-center space-x-2 text-lg text-gray-700">
            <FaPhoneAlt className="text-blue-600" />
            <span>+251 991 450 499</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} DH Electronics. All rights reserved.</p>
      </footer>

      {/* Call Now Floating Button */}
      {showButton && (
        <a
          href="tel:+251991450499"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-600 transition"
        >
          <FaPhoneAlt />
          <span className="hidden sm:inline font-semibold">Call Now / አሁን ይደውሉ</span>
        </a>
      )}
    </div>
  );
}
