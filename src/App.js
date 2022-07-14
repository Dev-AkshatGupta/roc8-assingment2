import {Routes, Route} from "react-router-dom";
import {NavBar,CartCard,ProductsCard} from "Components";
import {ProductsPage,CartPage} from "Pages";
import "./index.css";
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <CartCard/>
      <ProductsCard/>
    {/* <Routes>
      <Route></Route>
    </Routes> */}

    </div>
  );
}

export default App;
