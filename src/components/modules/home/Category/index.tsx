"use client";

import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { ICategory } from "@/types";
import Link from "next/link";

type Props = {
  categories: ICategory[];
};

const CategoryClient = ({ categories }: Props) => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Category</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-8 my-5">
        {categories?.slice(0, 12).map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryClient;
