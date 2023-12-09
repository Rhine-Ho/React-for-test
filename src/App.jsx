import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Home, Test1, Test2, Test3, Test4 } from "./components";

function App() {
  return (
    <>
      <Router>
        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Test1" element={<Test1 />} />
            <Route path="/Test2" element={<Test2 />} />
            <Route path="/Test3" element={<Test3 />} />
            <Route path="/Test4" element={<Test4 />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
