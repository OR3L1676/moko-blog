import { useCardArrData } from "@/hooks/useCardArrData";
import Card, { CardProp } from "./Card";
import { Category } from "./Menu";
import { CardContext } from "@/hooks/context";
import { useContext } from "react";
import Form from "./Form";
import { Button } from "./ui/button";
import Modal from "./Modal";

const CardGrid = () => {
  const { visibleCards } = useContext(CardContext)!;

  return (
    <div className="mx-auto">
      <div className="flex justify-center mb-6">
        <Modal mode="create" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {visibleCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
