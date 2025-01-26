import "./App.css";
import { Button } from "@/components/ui/button";
import NavBar from "./components/NavBar";
import BrowseHeader from "./components/BrowseHeader";
import CardGrid from "./components/CardGrid";
import { useState } from "react";
import { Category } from "./components/Menu";
import { CardContext } from "./hooks/context";
import { useCardArrData } from "./hooks/useCardArrData";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const {
    visibleCards,
    deleteBlog,
    changeCategory,
    updateBlog,
    idGenerator,
    createBlog,
  } = useCardArrData();

  return (
    <>
      <div
        about="header"
        className="grid grid-cols-1 sticky top-0 right-0 z-10"
      >
        <NavBar />
      </div>
      <CardContext.Provider
        value={{
          visibleCards,
          deleteBlog,
          changeCategory,
          updateBlog,
          idGenerator,
          createBlog,
        }}
      >
        <div about="body" className="grid grid-cols-1">
          <BrowseHeader
            onSelectedCategory={(category) => setSelectedCategory(category)}
          />
          <CardGrid />
        </div>
      </CardContext.Provider>
    </>
  );
}

export default App;
