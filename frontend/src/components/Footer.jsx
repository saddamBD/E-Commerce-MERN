import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Customer Service Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faqs" className="hover:text-gray-400 cursor-pointer">Help & FAQs</Link>
            </li>
            <li>
              <Link to="/shipping-delivery" className="hover:text-gray-400 cursor-pointer">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="/return-and-refund" className="hover:text-gray-400 cursor-pointer">Returns & Exchanges</Link>
            </li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about-us" className="hover:text-gray-400 cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-400 cursor-pointer">Careers</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400 cursor-pointer">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://x.com/saddambd10" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer">twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saddam-hossain-003609b8/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/saddamBD" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer"> Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
