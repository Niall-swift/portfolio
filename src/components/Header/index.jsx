import { Link } from "react-router-dom";
import { Conteiner, Options, ButtonMenu } from "./Header_styled";
import { useState } from "react";
import sounds from '../../sons/xbox-series-select.mp3'
import { ContextG } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../utils/Animations";


export default function Header() {
  const { setIsVisible } = useContext(ContextG);
  const [sound, setSound] = useState(new Audio(sounds));

  function handleSound() {
    sound.play()
  }


  return (
    <motion.div
      {...fadeInDown}
      transition={{ ...fadeInDown.transition, delay: 1.1 }}
    >
      <Conteiner>
        <ButtonMenu onClick={() => setIsVisible(true)}>ola</ButtonMenu>
        <Options>
          <ul>
            <Link to={'/Dashboardr'} onClick={handleSound}><li>Bem-vindo</li></Link>
            <Link to={'/Dashboardr'} onClick={handleSound}><li>Social</li></Link>
            <Link to={'/Dashboardr'} onClick={handleSound}><li>Projetos</li></Link>
            <Link to={'/Dashboardr'} onClick={handleSound}><li>Sobre</li></Link>
          </ul>
        </Options>
      </Conteiner>
    </motion.div>
  )
}