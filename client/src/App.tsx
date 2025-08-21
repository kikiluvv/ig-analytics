import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import FollowBack from "./pages/FollowBack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="follow-back" element={<FollowBack />} />
          {/* future plugins can go here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
