import { Link } from "react-router-dom";
import { Conteiner,Options} from "./Header-styled";
import { useState } from "react";
import sounds  from '../../sons/xbox-series-select.mp3'

export default function Header(){
  const [sound, setSound] = useState(new Audio(sounds));

  function handleSound(){
    sound.play()
  }


  return(
    <Conteiner>
      <Options>
        <ul>
          <Link to={'/Dashboardr'} onClick={handleSound}><li>Bem-vindo</li></Link>
          <Link to={'/Dashboardr'} onClick={handleSound}><li>Social</li></Link>
          <Link to={'/Dashboardr'} onClick={handleSound}><li>Projetos</li></Link>
          <Link to={'/Dashboardr'} onClick={handleSound}><li>Sobre</li></Link>
        </ul>
      </Options>
    </Conteiner>
  )
}