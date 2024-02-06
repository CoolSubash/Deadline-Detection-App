import "./App.css";
import Home from "./page/Home/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Signup from "./page/Signup/Signup";
import AddTask from "./page/AddTask/AddTask";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-task" element={<AddTask />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
