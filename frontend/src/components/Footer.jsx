// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-10">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Column 1 - Company Info */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Company</h3>
//           <p className="text-sm">
//             BD E-Commerce
//             <br />
//             Bogura,Dhaka.
//           </p>
//           <p className="mt-4">&copy; 2024 BD E-Commerce. All rights reserved.</p>
//         </div>

//         {/* Column 2 - Customer Service */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Customer Service</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//             <Link to="/faqs" className="hover:text-gray-400 cursor-pointer">Help & FAQs</Link>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 Shipping & Delivery
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 Returns & Exchanges
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Column 3 - Information */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Information</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 Terms & Conditions
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-400">
//                 Careers
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Column 4 - Social Media & Newsletter */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
//           <div className="flex space-x-4 mb-4">
//             <a href="#" className="hover:text-gray-400">
//               Facebook
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               Twitter
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               LinkedIn
//             </a>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
//             <form>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 text-gray-900 rounded-md focus:outline-none"
//               />
//               <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from 'react-router-dom'; // Import Link for client-side routing

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Customer Service Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faqs" className="hover:text-gray-400 cursor-pointer">Help & FAQs</Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-gray-400 cursor-pointer">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-gray-400 cursor-pointer">Returns & Exchanges</Link>
            </li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-400 cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-400 cursor-pointer">Careers</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 cursor-pointer">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer">Twitter</a>
            </li>
          </ul>
        </div>

        {/* Legal Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-gray-400 cursor-pointer">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-400 cursor-pointer">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-gray-400 cursor-pointer">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
