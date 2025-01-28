import { useCardArrData } from "@/hooks/useCardArrData";
import { useParams } from "react-router";

const Blog = () => {
  const { id } = useParams();
  const ID = parseInt(id || "", 10);
  const { getBlogById } = useCardArrData();
  const blog = getBlogById(ID);
  console.log(blog);

  return (
    <div>
      <p>{blog?.id}</p>
      <p>{blog?.image}</p>
      <p>{blog?.category}</p>
      <p>{blog?.header}</p>
      <p>{blog?.body}</p>
    </div>
  );
};

export default Blog;
