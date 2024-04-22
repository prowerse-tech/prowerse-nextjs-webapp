
import './App.css'
import React, { useEffect, useState } from 'react'
import Navbar from './Pages/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import routes from "./Pages/routes";

function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const loadScript = () => {
      if (!window.HubSpotConversations) {
        const script = document.createElement('script')
        script.async = true
        script.defer = true
        script.src = `http://js.hs-scripts.com/8492701.js`
        script.onload = () => setScriptLoaded(true)
        document.body.appendChild(script)
      } else {
        setScriptLoaded(true)
      }
    }

    loadScript()

    return () => {
      // Cleanup if needed
    }
  }, [])

  useEffect(() => {
    if (scriptLoaded) {
      // Load the HubSpot Chat Widget
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.load()
      } else {
        console.error('HubSpot Conversations widget still not found.')
      }
    }
  }, [scriptLoaded])


    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });


  return (

    <>      
      <Navbar />
      <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
    // </div>
  )
}

export default App
