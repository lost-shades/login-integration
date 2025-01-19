import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
