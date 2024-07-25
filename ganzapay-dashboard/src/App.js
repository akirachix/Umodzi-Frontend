import Landing from "./Landing";
import Login from "./Login";
import Signup from "./Signup";
import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>

</div>
    </Router>

  );
}

export default App;
