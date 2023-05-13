import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./global.scss";
import CardPage from "./components/CardPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [loginInfo, setLoginInfo] = useState("");

  return (
    <div className="App">
      <Navbar setLoginInfo={setLoginInfo} />
      <Routes>
        <Route
          path="/"
          element={<Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} />}
        />
        <Route path="students" element={<CardPage loginInfo={loginInfo} />} />
      </Routes>
    </div>
  );
}

export default App;
