import { Route, Routes, useLocation } from "react-router-dom";
import { Home} from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import Projects from "../pages/Projects"
import { ProjectDetail } from "../pages/ProjectDetail";
import { AnimatePresence } from "framer-motion";


function AppRoute() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<ProjectDetail/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoute