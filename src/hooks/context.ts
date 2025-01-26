import { CardProp } from "@/components/Card";
import { Category } from "@/components/Menu";
import { createContext } from "react";

interface CardContextType {
  visibleCards: CardProp[];
  deleteBlog: (id: number) => void;
  changeCategory: (category: Category) => void;
  updateBlog: (card: CardProp) => void;
  idGenerator: () => number;
  createBlog: (newCard: CardProp) => void;
}

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);
