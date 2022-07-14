import { Routes, Route } from "react-router-dom";
import { NavBar, CartCard, ProductsCard } from "Components";
import { ProductsPage, CartPage } from "Pages";
import "./index.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
