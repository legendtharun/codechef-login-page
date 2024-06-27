import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage.jsx";
import Login1 from "./components/LoginPage1.jsx"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        
        <Route path="/" element={<Login1 />} />
        <Route path="/signup" element={<Login />} />
        
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;