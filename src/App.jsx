import { Routes, Route } from "react-router-dom";
import Banner from "./component/Banner";
import Layout from "./component/Layout";
import "./App.css";
import Home from "./pages/Home"
import WhyChooseUs from "./component/WhyChooseUs";
import HowitWorks from "./component/HowitWorks";
import ScrollToTop from "./component/ScrollToTop ";
import Contact from "./pages/Contact ";
import About from "./pages/About ";
import ServicesSlider from "./component/ServicesSlider ";
import Breadcrumb from "./component/Breadcrumb";
import Services from "./pages/Services";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ServicesSlider />
              <HowitWorks />
              <WhyChooseUs />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<>
          <Breadcrumb />
          <About />
        </>} />
        <Route path="/contact" element={<>
          <Breadcrumb />
          <Contact />
        </>} />
        <Route path="/services" element={<>
          <Breadcrumb />
          <Services />  
        </>} />
      </Routes>
    </Layout>
  );
}

export default App;
