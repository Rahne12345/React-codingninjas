import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from './pages/LoginPage';
import ListPage from "./pages/List";
import BookDetail from "./pages/BookDetail";
import ViewOrder from "./pages/ViewOrder";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./context/Navbar";


function App() {
  return (
    <>
    <MyNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/book/list" element={<ListPage/>}/>
      <Route path="/books/view/:bookId" element={<BookDetail/>}/>
      <Route path="/books/order" element={<ViewOrder/>}/>

    </Routes>
    </>
  );
}

export default App;
