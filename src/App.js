import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Conta from "./components/Conta";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conta/:id" element={<Conta />} />
      </Routes>
    </Router>
  );
};

export default App;
