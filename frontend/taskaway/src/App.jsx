import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" extact element={<Home />} />
      <Route path="/login" extact element={<Login />} />
      <Route path="/signup" extact element={<SignUp />} />
    </Routes>
  </Router>
);
function App() {
  return <div>{routes}</div>;
}

export default App;
