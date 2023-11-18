import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
