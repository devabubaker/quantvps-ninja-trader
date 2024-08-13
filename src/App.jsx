import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Home";
import Pricing from "./Pricing";
import Compatibility from "./Compatibility";
import Features from "./Features";
import Faq from "./Faq";
import Support from "./Support";
import WhatServer from "./WhatServer";
import Taha from "./Taha";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Pricing" element={<Pricing />} />

          <Route path="/Compatibility" element={<Compatibility />} />

          <Route path="/Features" element={<Features />} />

          <Route path="/Faq" element={<Faq />} />

          <Route path="/Support" element={<Support />} />

          <Route path="/WhatServer" element={<WhatServer />} />

          <Route path="/Taha" element={<Taha />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
