import "./App.css";
import NavBar from "./components/NavBar";
import NavLayout from "./components/NavLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reserve from "./pages/Reserve";
import Register from "./pages/Register";
import Message from "./pages/Message";
import ReservationForm from "./pages/ReservationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/reserveForm" element={<ReservationForm />} />
          <Route element={<NavLayout />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
