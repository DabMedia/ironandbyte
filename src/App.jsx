import { Routes, Route } from "react-router-dom";
import Banner from "./component/Banner";
import Layout from "./component/Layout";
import "./App.css";
import WhyChooseUs from "./component/WhyChooseUs";
import HowitWorks from "./component/HowitWorks";
import Breadcrumb from "./component/Breadcrumb";
import ServicesSlider from "./component/ServicesSlider ";
import AboutUs from "./pages/About ";
import Contact from "./pages/Contact ";
import Services from "./pages/Services";
import OffensiveSecurity from "./pages/Services/OffensiveSecurity";
import RedTeam from "./pages/Services/RedTeam";
import Pentesting from "./pages/Services/Pentesting";
import SastDast from "./pages/Services/SastDast";
import StateAdvisory from "./pages/Services/StateAdvisory";
import VipSecurity from "./pages/Services/VipSecurity";
import Incident from "./pages/Services/Incident";
import ScadaSecurity from "./pages/R&D/ScadaSecurity";
import SatcomSecurity from "./pages/R&D/SatcomSecurity";
import CyberWeaponsDesign from "./pages/R&D/CyberWeaponsDesign";
import DefensePartnerships from "./pages/R&D/DefensePartnerships";
import GovernmentState from "./pages/Industries/GovernmentState";
import CorporatesEnterprises from "./pages/Industries/CorporatesEnterprises";
import HighProfileIndividuals from "./pages/Industries/HighProfileIndividuals";
import DefenseCriticalInfrastructure from "./pages/Industries/DefenseCriticalInfrastructure";
import StartupsFintech from "./pages/Industries/StartupsFintech";
import AIACDS from "./pages/Association/Aiacds";
import Membership from "./pages/Association/Membership";
import Research from "./pages/Association/Research";
import Blog from "./pages/Insights/Blog";
import CaseStudies from "./pages/Insights/CaseStudies";
import Whitepapers from "./pages/Insights/Whitepapers";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ServicesSlider />
              <HowitWorks />
              <WhyChooseUs />
              <AboutUs />
              <Contact />
            </>
          }
        />

        {/* Other pages */}
        <Route
          path="/about"
          element={
            <>
              <Breadcrumb />
              <AboutUs />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Breadcrumb />
              <Contact />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Breadcrumb />
              {/* <Services /> */}
            </>
          }
        />

        {/* Sub-service pages */}
        <Route path="/services/offensive-security" element={<OffensiveSecurity />} />
        <Route path="/services/red-team" element={<RedTeam />} />
        <Route path="/services/pentesting" element={<Pentesting />} />
        <Route path="/services/sast-dast" element={<SastDast />} />
        <Route path="/services/state-advisory" element={<StateAdvisory />} />
        <Route path="/services/vip-security" element={<VipSecurity />} />
        <Route path="/services/incident" element={<Incident />} />

        {/* R&D section */}
        <Route
          path="/rd"
          element={
            <>
              <Breadcrumb />
              {/* <Services /> */}
            </>
          }
        />
        <Route path="/rd/scada-security" element={<ScadaSecurity/>} />
        <Route path="/rd/satcom-security" element={<SatcomSecurity/>} />
        <Route path="/rd/cyber-design" element={<CyberWeaponsDesign/>} />
        <Route path="/rd/defens-partnerships" element={<DefensePartnerships/>} />

        <Route
          path="/industries"
          element={
            <>
              <Breadcrumb />
              {/* <Services /> */}
            </>
          }
        />
        <Route path="/industries/government-state" element={<GovernmentState />} />
        <Route path="/industries/corporates-enterprises" element={<CorporatesEnterprises />} />
        <Route path="/industries/high-profileind-ividuals" element={<HighProfileIndividuals />} />
        <Route path="/industries/defense-critical-infrastructure" element={<DefenseCriticalInfrastructure />} />
        <Route path="/industries/startups-fintech" element={<StartupsFintech />} />

        <Route
          path="/association"
          element={
            <>
              <Breadcrumb />
              {/* <Services /> */}
            </>
          }
        />
        <Route path="/association/aiacds" element={<AIACDS />} />
        <Route path="/association/membershippartnerships" element={<Membership />} />
        <Route path="/association/researchpolicypapers" element={<Research />} />

        <Route
          path="/insights"
          element={
            <>
              <Breadcrumb />
              {/* <Services /> */}
            </>
          }
        />
        <Route path="/insights/blog" element={<Blog />} />
        <Route path="/insights/casestudies" element={<CaseStudies />} />
        <Route path="/insights/whitepapers" element={<Whitepapers />} />
      </Routes>
    </Layout>
  );
}

export default App;
