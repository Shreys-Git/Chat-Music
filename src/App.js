import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Create } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
