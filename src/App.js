import "./styles/app.scss";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx"
import Header from "./components/Header.jsx"
import {Toaster} from "react-hot-toast"
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
