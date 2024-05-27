import { Conteiner, NavBar } from "./SideBar_Style"
import { ContextG } from "../../Context";
import { useContext } from "react"
import { motion } from "framer-motion";
import { fadeInLeft } from "../../utils/Animations";

export default function SaidBar() {
  const { isVisible, setIsVisible } = useContext(ContextG);

  return (
    <motion.div
      {...fadeInLeft}
      transition={{ ...fadeInLeft.transition, duration: 1 }}
    >
      <Conteiner isVisible={isVisible} onClick={() => setIsVisible(false)}>
        <NavBar isVisible={isVisible}>
        </NavBar>
      </Conteiner>
    </motion.div>
  )
}