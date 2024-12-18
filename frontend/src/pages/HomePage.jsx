
import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { Helmet } from "react-helmet";
import Carousel from "../components/Banner";


const categories = [
	{ href: "/laptops", name: "Laptops", imageUrl: "/laptop.jpg" },
	{ href: "/monitors", name: "monitors", imageUrl: "/monitor.jpg" },
	{ href: "/printers", name: "printers", imageUrl: "/printer.jpg" },
	{ href: "/cameras", name: "cameras", imageUrl: "/camera.jpg" },
	{ href: "/games", name: "games", imageUrl: "/game.jpg" },
	{ href: "/headphones", name: "headphones", imageUrl: "/headphone.jpg" },
	{ href: "/projectors", name: "projectors", imageUrl: "/projector.jpg" },
	{ href: "/networks", name: "networks", imageUrl: "/network.jpg" },
];

const HomePage = () => {

  const {fetchFeaturedProducts,products,isLoading} = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
		<Helmet htmlAttributes>
        <html lang="en" />
        <title>Home</title>
        </Helmet>
	  <Carousel />
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest and greatest available products.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

      {!isLoading && products?.length > 0 && <FeaturedProducts featuredProducts={products}/>}
			</div>
		</div>
	);
};
export default HomePage;