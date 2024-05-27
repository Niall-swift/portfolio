import { Conteiner, VideoBackground, Avatar } from "./Login_Style"
import video from '../../assets/Dynamic Background.mp4'
import login from '../../sons/xbox-series-sign-on.mp3'
import sing from '../../sons/xbox-series-return-to-xmb.mp3'
import avatar from '../../assets/48032843-FBDB-480C-832C-B6FEDAE2B589.jpg'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login(){
  const Navigate = useNavigate();

  const [sound, setSound] = useState(new Audio(login))


  function Sing (){
    Navigate('/Dashboardr')
    setTimeout(()=>{
      sound.play();
    },500)
  }

  return(
    <Conteiner>
        <VideoBackground>
        <audio src={sing} autoPlay/>
          <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          </video>
        </VideoBackground>
        <Avatar onClick={Sing}>
          <img src={avatar} alt="foto de josué"/>
        </Avatar>
        <h1>Josué Ramos</h1>
    </Conteiner>
  )
}
