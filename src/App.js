import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import MainPage from "./containers/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pharmadon" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
