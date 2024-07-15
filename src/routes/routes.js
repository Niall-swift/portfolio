import { Route, Routes, useLocation } from "react-router-dom";
import { Dashboadr } from "../pages/Dashboadr";
import { About } from "../pages/About";
import { AnimatePresence } from "framer-motion";


function AppRoute() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboadr />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoute