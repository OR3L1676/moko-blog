import { useCardArrData } from "@/hooks/useCardArrData";
import { useParams } from "react-router";

const Blog = () => {
  const { id } = useParams();
  const ID = parseInt(id || "", 10);
  const { getBlogById } = useCardArrData();
  const blog = getBlogById(ID);
  console.log(blog);

  return (
    <div className="h-full pt-4 pb-4 bg-blue-100">
      <body className="bg-blue-300 p-8 rounded-lg max-w-[900px] m-auto shadow-[0px_5px_15px_rgba(59,130,246,0.35)] text-blue-50">
        <div className="flex flex-col justify-between items-center">
          <img
            src={blog?.image}
            className="w-96 rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35)] mb-2"
          />
          <h3 className="text-3xl font-thin">{blog?.category}</h3>
        </div>
        <div className="flex flex-col items-start justify-center max-w-[900px] m-auto">
          <h2 className="text-3xl mt-20 font-sans max-w-[500px] text-left">
            {blog?.header}
          </h2>
          <p className="text-xl mt-6 text-left">{blog?.body}</p>
        </div>
      </body>
    </div>
  );
};

export default Blog;
