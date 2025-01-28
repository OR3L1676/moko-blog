import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardProp } from "./Card";
import { useContext } from "react";
import { CardContext } from "@/hooks/context";
import { Button } from "./ui/button";

import cardImage3 from "../assets/app-src/card-header-3.png";

export type BlogFormData = {
  category: "design" | "food" | "technology";
  header: string;
  body: string;
  image: string;
};

interface Props {
  blog?: CardProp;
  mode: "edit" | "create";
  closeModal: () => void;
}

const Form = ({ blog, closeModal, mode }: Props) => {
  const createSchema = z.object({
    category: z.enum(["design", "food", "technology"]),
    header: z.string().min(3, "Header must be at least 3 characters."),
    body: z.string().min(3, "Body must be at least 3 characters."),
    image: z.string().url("Image must be a valid URL."),
  });

  const editSchema = z.object({
    category: z.enum(["design", "food", "technology"]),
    header: z.string().min(3, "Header must be at least 3 characters."),
    body: z.string().min(3, "Body must be at least 3 characters."),
    image: z.string(),
  });

  const schema = mode === "create" ? createSchema : editSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormData>({ resolver: zodResolver(schema) });

  const { updateBlog, createBlog, idGenerator } = useContext(CardContext)!;

  const onSubmit = (data: BlogFormData) => {
    if (mode === "edit") {
      updateBlog({
        id: blog ? blog.id : idGenerator(),
        image: blog?.image || cardImage3,
        category: data.category,
        header: data.header,
        body: data.body,
      });
    } else {
      createBlog({
        id: idGenerator(),
        image: data.image,
        category: data.category,
        header: data.header,
        body: data.body,
      });
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center text-left w-full mt-3">
        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="category">Category</label>
          <select
            {...register("category")}
            id="category"
            className="border-blue-400 border-solid border-2 rounded-md"
          >
            <option value="design">DESIGN</option>
            <option value="food">FOOD</option>
            <option value="technology">TECHNOLOGY</option>
          </select>
          {errors.category && (
            <p className="text-red-600">{errors.category.message}</p>
          )}
        </div>

        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="picture">Pick an image</label>
          <input
            {...register("image")}
            id="picture"
            type="text"
            defaultValue={mode === "edit" ? blog?.image : ""}
            className="border-blue-400 border-solid border-2 rounded-md"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}
        </div>

        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="header">Header</label>
          <textarea
            {...register("header")}
            id="header"
            defaultValue={mode === "edit" ? blog?.header : ""}
            className="border-blue-400 border-solid border-2 rounded-md"
          ></textarea>
          {errors.header && (
            <p className="text-red-600">{errors.header.message}</p>
          )}
        </div>

        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="body">Body</label>
          <textarea
            {...register("body")}
            id="body"
            defaultValue={mode === "edit" ? blog?.body : ""}
            className="border-blue-400 border-solid border-2 rounded-md h-24"
          ></textarea>
          {errors.body && <p className="text-red-600">{errors.body.message}</p>}
        </div>

        <Button variant={"ghost"} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
