import { useContext, useState } from "react";
import Menu, { Category } from "./Menu";
import { useCardArrData } from "@/hooks/useCardArrData";
import { CardContext } from "@/hooks/context";

interface Props {
  onSelectedCategory: (selectedCategory: Category) => void;
}

const BrowseHeader = ({ onSelectedCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const { changeCategory } = useContext(CardContext)!;
  return (
    <div className="flex justify-start items-center sm:pl-12 md:pl-16 lg:pl-24 py-7 ">
      <Menu
        version={2}
        onSelectedCategory={(category) => {
          onSelectedCategory(category);
          setSelectedCategory(category);
          changeCategory(category);
        }}
      />
      <h3 className="text-3xl font-semibold">
        Currently Browsing: {selectedCategory?.toUpperCase()}
      </h3>
    </div>
  );
};

export default BrowseHeader;
