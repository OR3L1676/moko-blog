import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
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
          <Route index element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
