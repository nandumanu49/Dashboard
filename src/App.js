import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Page from "./components/Layout/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;