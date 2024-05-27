import { motion } from "framer-motion";
import { transition } from "../../utils/Animations";
import './PageTransition.css'

export const PageTransition = () => (
  <>
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 0,
      }}
      exit={{ scaleY: 1 }}
      transition={{ ...transition, duration: 1.5}}
      className="Transition"
    >
      <h1 className="Name">JRDS</h1>
    </motion.div>

    <motion.div
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
      }}
      exit={{ scaleY: 0 }}
      transition={{ ...transition, duration: 1.5, delay: 1 }}
      className="Transition"
    >
      <h1 className="Name">JRDS</h1>
    </motion.div>

  </>
);