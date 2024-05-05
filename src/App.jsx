import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Index />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <NavBar />
              <div>Pricing Page</div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <div>About Us Page</div>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <div>Contact Page</div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
