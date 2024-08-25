import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import HomePage from "./assets/pages/Home-page";
import About from "./assets/pages/About-Page";
import Store from "./assets/pages/Store";
import Contact from "./assets/pages/Contact";
import ProductDetails from "./assets/pages/Product-Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/product-details/:id" element={<ProductDetails />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
