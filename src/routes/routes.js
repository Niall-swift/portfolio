import { Route, Routes, useLocation } from "react-router-dom";
import { Dashboadr } from "../pages/Dashboadr";
import { AnimatePresence } from "framer-motion";


function AppRoute() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboadr />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoute