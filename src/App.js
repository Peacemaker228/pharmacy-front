import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import "antd/dist/antd.css";
import "./App.css";

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
