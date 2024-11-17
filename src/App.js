import Home from "./Home";
import ShowPlayer from "./ShowPlayer";
import ShowInformation from "./ShowInformation";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <div className="pageContent">
            <Routes>
                <Route index path="/" element={<Home/>} />
                <Route path="/show-information/:show" element={<ShowInformation />} />
                <Route path="/show-player/:show" element={<ShowPlayer/>} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
