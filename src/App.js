// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect,useState } from "react";
import Navbar from "./Pages/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Services";
import ContactUS from "./Pages/ContactUs";
import Careers from "./Pages/Careers";
import Post1 from "./Component/BlogDetails/post-1";
import Post3 from "./Component/BlogDetails/post-3";
import Post2 from "./Component/BlogDetails/post-2";
import ProductEngineering from "./Pages/ProductEngineering";
import BuildYourTeam from "./Pages/BuildYourTeam";
import ViewCaseStudyBlockChain from "./Component/ViewCaseStudy/ViewCaseStudyBlockChain";
import ViewCaseStudyHealthCare from "./Component/ViewCaseStudy/ViewCaseStudyHealthCare";
import ViewCaseStudyhealthFitness from "./Component/ViewCaseStudy/ViewCaseStudyhealthFitness";
import ViewCaseStudyInsurance from "./Component/ViewCaseStudy/ViewCaseStudyInsurance";

import BuildYourDedicatedTeam from "./Pages/BuildYourDedicatedTeam";
import JobDescriptionBusiness from "./Component/JobDescription/job-description-business-executive";
import JobDescriptionDevOps from "./Component/JobDescription/job-description-devops";

import JobDescriptionPython from "./Component/JobDescription/job-description-python";

import JobDescriptionRust from "./Component/JobDescription/job-description-rustengineer";

import JobDescriptionAutomation from "./Component/JobDescription/job-description-testautomation";

import PostResume from "./Pages/post-resume";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      if (!window.HubSpotConversations) {
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = `http://js.hs-scripts.com/8492701.js`;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    };

    loadScript();

    return () => {
      // Cleanup if needed
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      // Load the HubSpot Chat Widget
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.load();
      } else {
        console.error("HubSpot Conversations widget still not found.");
      }
    }
  }, [scriptLoaded]);

  return (
    // <div className="App">
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/blog-product" element={<Post1 />} />
        <Route path="/blog-infra" element={<Post2 />} />
        <Route path="/blog-cloud" element={<Post3 />} />
        <Route path="/hire-developers" element={<Post3 />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<ProductEngineering />} />
        <Route path="/buildyourteam" element={<BuildYourTeam />} />
        <Route path="/blockchain" element={<ViewCaseStudyBlockChain />} />
        <Route path="/healthcare" element={<ViewCaseStudyHealthCare />} />
        <Route
          path="/health-wealth-fitness"
          element={<ViewCaseStudyhealthFitness />}
        />
        <Route path="/insurance" element={<ViewCaseStudyInsurance />} />

        <Route
          path="/build-your-dedicated-team"
          element={<BuildYourDedicatedTeam />}
        />
        <Route path="/post-resume" element={<PostResume />} />

        {/* job description */}
        <Route
          path="/job-description-business-executive"
          element={<JobDescriptionBusiness />}
        />
        <Route
          path="/job-description-automation"
          element={<JobDescriptionAutomation />}
        />
        <Route
          path="/job-description-devops"
          element={<JobDescriptionDevOps />}
        />
        <Route
          path="/job-description-python"
          element={<JobDescriptionPython />}
        />
        <Route path="/job-description-rust" element={<JobDescriptionRust />} />
      </Routes>
    </>
    // </div>
  );
}

export default App;
