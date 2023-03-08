import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Create } from "./pages";
import React from "react";
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}

export default App;
