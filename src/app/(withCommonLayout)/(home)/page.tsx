import Category from "@/components/modules/home/Category";
import Hero from "@/components/modules/home/HeroSection";
import { getAllCategories } from "@/services/Category";

const HomePage = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <div>
      <Hero />
      <Category categories={categories} />
    </div>
  );
};

export default HomePage;
