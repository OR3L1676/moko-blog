import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
