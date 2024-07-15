import { Route, Routes, useLocation } from "react-router-dom";
import { Dashboadr } from "../pages/Dashboadr";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { AnimatePresence } from "framer-motion";


function AppRoute() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboadr />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoute