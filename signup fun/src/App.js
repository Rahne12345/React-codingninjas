import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Todo from "./component/Todo";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
