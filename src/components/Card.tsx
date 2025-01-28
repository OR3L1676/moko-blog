import { useContext, useState } from "react";
import Modal from "./Modal";
import { FaTrashAlt } from "react-icons/fa";
import { CardContext } from "../hooks/context";

export interface CardProp {
  id: number;
  image: string;
  category: string;
  header: string;
  body: string;
}
interface Props {
  card: CardProp;
}

const Card = ({ card: { body, category, header, id, image } }: Props) => {
  const upCaseCategory = category.toUpperCase();
  const [isHover, setIsHover] = useState(false);
  const blogObject = { image, category, header, body, id };

  const { deleteBlog } = useContext(CardContext)!;

  return (
    <div
      className="w-72 h-96"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <header className="relative">
        {isHover && (
          <div className="absolute top-4 right-3">
            <div className="flex justify-between w-10">
              <Modal mode="edit" blog={blogObject} />
              <button
                onClick={() => {
                  deleteBlog(id);
                  console.log(id);
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        )}
        <img
          className="w-full max-h-36 object-cover"
          src={image}
          alt="moko card image"
        />
      </header>

      <div className="py-5 h-56">
        <h4 className="text-blue-400 text-xs font-semibold mb-3">
          {upCaseCategory}
        </h4>

        <section className="grid grid-rows-2 gap-3">
          <h3 className="text-lg font-bold line-clamp-3 break-words">
            {header}
          </h3>

          <p className="text-sm line-clamp-4 break-words">{body}</p>
        </section>
      </div>
    </div>
  );
};

export default Card;
