import BrowseHeader from "../components/BrowseHeader";
import CardGrid from "../components/CardGrid";
import { useMemo } from "react";
import { CardContext } from "../hooks/context";
import { useCardArrData } from "../hooks/useCardArrData";

const Home = () => {
  const {
    visibleCards,
    deleteBlog,
    changeCategory,
    updateBlog,
    idGenerator,
    createBlog,
  } = useCardArrData();

  const contextValue = useMemo(
    () => ({
      visibleCards,
      updateBlog,
      deleteBlog,
      changeCategory,
      idGenerator,
      createBlog,
    }),
    [
      visibleCards,
      updateBlog,
      deleteBlog,
      changeCategory,
      idGenerator,
      createBlog,
    ]
  );
  return (
    <CardContext.Provider value={contextValue}>
      <div about="body" className="grid grid-cols-1">
        <BrowseHeader />
        <CardGrid />
      </div>
    </CardContext.Provider>
  );
};

export default Home;
