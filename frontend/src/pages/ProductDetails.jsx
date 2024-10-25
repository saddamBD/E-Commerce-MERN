import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
  const {fetchProduct,products} = useProductStore()
  const { user } = useUserStore();
  const { addToCart } = useCartStore()

  const navigate = useNavigate();

  const handleBack = () => {
    window.location.reload();
    navigate(-1);
  };
	const handleAddToCart = () => {
        console.log(products)
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(products);
		}
	};


	const { id } = useParams();

	useEffect(() => {
		fetchProduct(id);
	}, [fetchProduct,id]);

	console.log("products:", products);
 
  if (!products) {
    return (
      <div className="text-center py-16">
        <Helmet htmlAttributes>
        <html lang="en" />
        <title>Product details</title>
      </Helmet>
        <h2 className="text-3xl font-bold">Product Not Found</h2>
        <Link to="/" className="mt-4 text-emerald-500 hover:underline">
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">{products.name}</h1>
          <p className="text-2xl font-semibold text-emerald-500 mb-4">
            ${products.price}
          </p>
          <p className="text-white mb-6">{products.description}</p>

         <button
					className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
					 text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
					onClick={handleAddToCart}
				>
					<ShoppingCart size={22} className='mr-2' />
					Add to cart
		</button>

          <Link
            to={`/category/${products.category}`}
            className="mt-6 inline-block text-emerald-500 hover:underline"
          >
            Back to Products
          </Link>
      <button
        onClick={handleBack}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
        </motion.div>
      </div>

      {/* Additional Information */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
        <ul className="space-y-2">
          <li className="text-white">
            <strong>Category:</strong> {products.category}
          </li>
          <li className="text-slate-50">
            <strong>Rating:</strong> {products.rating} / 5
          </li>
          <li className="text-slate-300">
            <strong>Reviews:</strong> {products.reviews} reviews
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
