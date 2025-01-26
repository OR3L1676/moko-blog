import { CardProp } from "@/components/Card";
import { Category } from "@/components/Menu";
import { useState } from "react";
import cardImage1 from "../assets/app-src/card-header-1.png";
import cardImage2 from "../assets/app-src/card-header-2.png";
import cardImage3 from "../assets/app-src/card-header-3.png";

export const useCardArrData = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: cardImage1,
      category: "design",
      header:
        "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
      body: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration",
    },
    {
      id: 2,
      image: cardImage2,
      category: "design",
      header: "30 Beautiful Google Fonts for Your Website",
      body: "Finding attractive, user-friendly, legible fonts for your website isn't always easy, but Google Fonts, launched in 2010, helps solve that problem. Having started small, the directory now includes more",
    },
    {
      id: 3,
      image: cardImage3,
      category: "design",
      header: "Design Thinking 101 for Designers",
      body: "Creativity doesn't just happen. The most inspired and innovative teams and Individual designers need to be a part of a culture that enables forward-thinking, acceleration, and efficiency",
    },
    {
      id: 4,
      image: cardImage1,
      category: "technology",
      header:
        "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
      body: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration",
    },
    {
      id: 5,
      image: cardImage2,
      category: "technology",
      header: "30 Beautiful Google Fonts for Your Website",
      body: "Finding attractive, user-friendly, legible fonts for your website isn't always easy, but Google Fonts, launched in 2010, helps solve that problem. Having started small, the directory now includes more",
    },
    {
      id: 6,
      image: cardImage3,
      category: "technology",
      header: "Design Thinking 101 for Designers",
      body: "Creativity doesn't just happen. The most inspired and innovative teams and Individual designers need to be a part of a culture that enables forward-thinking, acceleration, and efficiency",
    },
    {
      id: 7,
      image: cardImage1,
      category: "travel",
      header:
        "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
      body: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration",
    },
    {
      id: 8,
      image: cardImage2,
      category: "travel",
      header: "30 Beautiful Google Fonts for Your Website",
      body: "Finding attractive, user-friendly, legible fonts for your website isn't always easy, but Google Fonts, launched in 2010, helps solve that problem. Having started small, the directory now includes more",
    },
    {
      id: 9,
      image: cardImage3,
      category: "travel",
      header: "Design Thinking 101 for Designers",
      body: "Creativity doesn't just happen. The most inspired and innovative teams and Individual designers need to be a part of a culture that enables forward-thinking, acceleration, and efficiency",
    },
    {
      id: 10,
      image: cardImage1,
      category: "food",
      header:
        "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
      body: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration",
    },
    {
      id: 11,
      image: cardImage2,
      category: "food",
      header: "30 Beautiful Google Fonts for Your Website",
      body: "Finding attractive, user-friendly, legible fonts for your website isn't always easy, but Google Fonts, launched in 2010, helps solve that problem. Having started small, the directory now includes more",
    },
    {
      id: 12,
      image: cardImage3,
      category: "food",
      header: "Design Thinking 101 for Designers",
      body: "Creativity doesn't just happen. The most inspired and innovative teams and Individual designers need to be a part of a culture that enables forward-thinking, acceleration, and efficiency",
    },
    {
      id: 13,
      image: cardImage1,
      category: "techlonogy",
      header:
        "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
      body: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration",
    },
    {
      id: 14,
      image: cardImage2,
      category: "travel",
      header: "30 Beautiful Google Fonts for Your Website",
      body: "Finding attractive, user-friendly, legible fonts for your website isn't always easy, but Google Fonts, launched in 2010, helps solve that problem. Having started small, the directory now includes more",
    },
    {
      id: 15,
      image: cardImage3,
      category: "design",
      header: "Design Thinking 101 for Designers",
      body: "Creativity doesn't just happen. The most inspired and innovative teams and Individual designers need to be a part of a culture that enables forward-thinking, acceleration, and efficiency",
    },
  ]);
  const [visibleCards, setVisibleCards] = useState<CardProp[]>(cards);
  const [idCounter, setIdCounter] = useState<number>(cards.length + 1);

  const idGenerator = () => {
    setIdCounter((prev) => prev + 1);
    return idCounter;
  };

  const deleteBlog = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);

    const updatedVisibleCards = visibleCards.filter((card) => card.id !== id);
    setVisibleCards(updatedVisibleCards);
  };

  const changeCategory = (selectedCategory: Category) => {
    const newVisibleCards =
      selectedCategory && selectedCategory !== "all"
        ? cards.filter(
            (card) =>
              card.category.toLowerCase() === selectedCategory.toLowerCase()
          )
        : cards;
    setVisibleCards(newVisibleCards);
  };

  const updateBlog = (blogToUpdate: CardProp) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === blogToUpdate.id ? { ...blogToUpdate } : card
      )
    );

    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards.map((card) =>
        card.id === blogToUpdate.id ? { ...blogToUpdate } : card
      )
    );
  };

  const createBlog = (newBlog: CardProp) => {
    setCards((prev) => [newBlog, ...prev]);
    setVisibleCards((prev) => [newBlog, ...prev]);
  };

  return {
    visibleCards,
    updateBlog,
    deleteBlog,
    changeCategory,
    idGenerator,
    createBlog,
  };
};
