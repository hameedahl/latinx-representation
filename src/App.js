import Home from "./Home";
import ShowPlayer from "./ShowPlayer";
import ShowInformation from "./ShowInformation";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter> 
        <ScrollToTop />
        <div className="pageContent">
            <Routes>
                <Route index path="/" element={<Home/>} />
                <Route path="/show-information/:show" element={<ShowInformation />} />
                <Route path="/show-player/:show" element={<ShowPlayer/>} />
            </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
