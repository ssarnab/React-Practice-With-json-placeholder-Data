import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from "./pages/shared/navbar/Navbar";
import Posts from "./pages/Posts/Posts";
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="posts" element={<Posts />} />
          <Route exact path="posts/:id" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
