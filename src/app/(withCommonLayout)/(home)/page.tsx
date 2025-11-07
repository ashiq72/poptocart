import Category from "@/components/modules/home/Category";
import Hero from "@/components/modules/home/HeroSection";
import { getAllCategories } from "@/services/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";

const HomePage = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <div>
      <Hero />
      <Category categories={categories} />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
