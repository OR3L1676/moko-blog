import "./App.css";
import NavBar from "./components/NavBar";
import BrowseHeader from "./components/BrowseHeader";
import CardGrid from "./components/CardGrid";
import { useMemo, useState } from "react";
import { CardContext } from "./hooks/context";
import { useCardArrData } from "./hooks/useCardArrData";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Category from "./pages/Category";

function App() {
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
    <>
      <BrowserRouter>
        <div
          about="header"
          className="grid grid-cols-1 sticky top-0 right-0 z-10"
        >
          <NavBar />
        </div>

        <Routes>
          <Route
            index
            element={
              <CardContext.Provider value={contextValue}>
                <div about="body" className="grid grid-cols-1">
                  <BrowseHeader />
                  <CardGrid />
                </div>
              </CardContext.Provider>
            }
          />
          <Route path="/categories" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
