import { Button } from "@/components/ui/button";
import CreateCategoryModel from "./createCategoryModel";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2>Manage Category </h2>
        <CreateCategoryModel />
      </div>
    </div>
  );
};

export default ManageCategories;
