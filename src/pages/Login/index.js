import { Conteiner, VideoBackground, Avatar } from "./Login-styled"
import video from '../../assets/Dynamic Background.mp4'
import login from '../../sons/xbox-series-sign-on.mp3'
import sing from '../../sons/xbox-series-return-to-xmb.mp3'
import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Login(){
  const Navigate = useNavigate();

  const [son, setSon] = useState(new Audio(login))


  function Sing (){
    Navigate('/Dashboadr')
    setTimeout(()=>{
      son.play();
    },100)
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
          <img src="https://avatars.githubusercontent.com/u/108350617?v=4" alt="foto de josué"/>
        </Avatar>
        <h1>Josué Ramos</h1>
    </Conteiner>
  )
}
