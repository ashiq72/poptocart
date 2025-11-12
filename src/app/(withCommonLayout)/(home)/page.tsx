import Category from "@/components/modules/home/Category";
import Hero from "@/components/modules/home/HeroSection";
import { getAllCategories } from "@/services/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import FlashSale from "@/components/modules/home/FlashSale";

const HomePage = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <div>
      <Hero />
      <Category categories={categories} />
      <FeaturedProducts />
      <FlashSale />
    </div>
  );
};

export default HomePage;
