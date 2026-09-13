import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components_test/Nav";

const HomePage = lazy(() => import("./Pages/HomePage"));
const About = lazy(() => import("./Pages/About"));
const Service = lazy(() => import("./Pages/Service"));
const Blog = lazy(() => import("./Pages/Blog"));
const Contact = lazy(() => import("./Pages/Contact"));
const Consultation = lazy(() => import("./Pages/Consultation"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<div className="min-h-[60vh]" style={{ backgroundColor: "rgba(237, 235, 228, 1)" }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
