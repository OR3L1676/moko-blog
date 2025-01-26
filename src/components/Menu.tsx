import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useCardArrData } from "@/hooks/useCardArrData";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export type Category = "all" | "design" | "technology" | "food";

interface Props {
  version: 1 | 2;
  onSelectedCategory?: (category: Category) => void;
}

const Menu = ({ version, onSelectedCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const { changeCategory } = useCardArrData();

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    if (onSelectedCategory) onSelectedCategory(category);
    changeCategory(category);
  };

  return (
    <div>
      <Menubar
        className={
          "bg-transparent border-none shadow-none" +
          (version === 2 ? "bg-blue-400" : "")
        }
      >
        <MenubarMenu>
          <MenubarTrigger className="data-[state=open]:bg-transparent focus:bg-transparent">
            {version === 1 ? (
              <GiHamburgerMenu className="text-3xl text-white hover:cursor-pointer" />
            ) : (
              <p
                className={
                  "text-2xl text-white bg-blue-400 hover:bg-blue-300 cursor-pointer rounded-md px-3 py-2" +
                  (!selectedCategory ? "w-[230px] py-2" : " w-[180px]")
                }
              >
                {selectedCategory
                  ? selectedCategory.toUpperCase()
                  : "Select a Category"}
              </p>
            )}
          </MenubarTrigger>
          <MenubarContent>
            {version === 2 && (
              <MenubarItem onClick={() => handleSelectCategory("all")}>
                ALL
              </MenubarItem>
            )}
            <MenubarItem onClick={() => handleSelectCategory("design")}>
              {version === 2 ? "DESIGN" : "DEALS"}
            </MenubarItem>
            <MenubarItem onClick={() => handleSelectCategory("food")}>
              {version === 2 ? "FOOD" : "ABOUT"}
            </MenubarItem>
            <MenubarItem onClick={() => handleSelectCategory("technology")}>
              {version === 2 ? "TECHNOLOGY" : "CATEGORIES"}
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Menu;
