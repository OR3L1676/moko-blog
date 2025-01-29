import { CardProp } from "@/components/Card";
import { Category } from "@/components/Menu";
import { useCallback, useEffect, useState } from "react";
import cardImage1 from "../assets/app-src/card-header-1.png";
import cardImage2 from "../assets/app-src/card-header-2.png";
import cardImage3 from "../assets/app-src/card-header-3.png";

const defaultCards = [
  {
    id: 1,
    image: cardImage1,
    category: "design",
    header: "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
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
    header: "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
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
    header: "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
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
    header: "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
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
    header: "15+ Best Angular Admin Dashboard Templates of 2020 - Users Choice",
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
];

export const useCardArrData = () => {
  const [cards, setCards] = useState<CardProp[]>(() => {
    const storedCards = localStorage.getItem("cards");
    return storedCards ? JSON.parse(storedCards) : defaultCards;
  });

  const [visibleCards, setVisibleCards] = useState<CardProp[]>(cards);

  const [idCounter, setIdCounter] = useState(() => {
    const storedIdCounter = localStorage.getItem("idCounter");
    return storedIdCounter
      ? JSON.parse(storedIdCounter)
      : defaultCards.length + 1;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("idCounter", JSON.stringify(idCounter));
  }, [cards, idCounter]);

  const getBlogById = useCallback(
    (id: number): CardProp | undefined => {
      return visibleCards.find((blog) => blog.id === id);
    },
    [cards]
  );

  const idGenerator = useCallback(() => {
    setIdCounter((prev: number) => prev + 1);
    return idCounter;
  }, [idCounter]);

  const deleteBlog = useCallback(
    (id: number) => {
      const updatedCards = cards.filter((card) => card.id !== id);
      setCards(updatedCards);
      setVisibleCards(updatedCards);
    },
    [cards]
  );

  const changeCategory = useCallback(
    (selectedCategory: Category) => {
      const newVisibleCards =
        selectedCategory && selectedCategory !== "all"
          ? cards.filter(
              (card) =>
                card.category.toLowerCase() === selectedCategory.toLowerCase()
            )
          : cards;
      setVisibleCards(newVisibleCards);
    },
    [cards]
  );

  const updateBlog = useCallback(
    (blogToUpdate: CardProp) => {
      const updatedCards = cards.map((card) =>
        card.id === blogToUpdate.id ? { ...blogToUpdate } : card
      );
      setCards(updatedCards);
      setVisibleCards(updatedCards);
    },
    [cards]
  );

  const createBlog = useCallback(
    (newBlog: CardProp) => {
      const updatedCards = [newBlog, ...cards];
      setCards(updatedCards);
      setVisibleCards(updatedCards);
    },
    [cards]
  );

  return {
    visibleCards,
    updateBlog,
    deleteBlog,
    changeCategory,
    idGenerator,
    createBlog,
    getBlogById,
  };
};
