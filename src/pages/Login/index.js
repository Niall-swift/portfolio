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
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPiyFEI6CvUJcsMQy7wu50rEGCAkfmgfxwL8Qehion2GM62QgLhA2vSNjIfr6cWCuGmccMYXSRlzBXfcREsTykAi4bfT1ovRe1gvf9kqA3NBz9g8kbJD9oLruJKxMoh22WiP18a1oQIknAN7viHoc1aeIhkVzwN5LXBU3oVOE1AV2OPCBS4UxrnK28c6xY4okvhRJemWmaM-GCmvhZwOybwaBHoh86pvQbOiMdcPQUOIzBDA15nOlXl-4PSIgjHNMRKyFIHCo6nh2Yf2Ky_0DLGzGukFFSnY9-Sj5spPROrdZlZEeRJytXALpGHE0Dm8d4vRe8vI5wXw6e5C4xx1j4qgQQ1F7pYxsTSEc-umw64q3_3USPyo-ly1qOhiasTkX9gfPVuHR4-ya3WDfBKWxITUxNiFvimEhEhKW1NUDeF3ngoQq5W-N7IA_v6AVmpvlimVgt2nBmMqVhy6Nmg5roc8_md1aN27g4TCFSf29aauT4F1rWxUk2P6h5LE3pByBQ5TZlbFcayDwdPNs4Eis0LThPRIRQzFHUBYCqvmZtGJsst1jw_BozQeKHDUsK2RDkYBZtmqOvk7OnqEJYiwg2098WTYs_a4s4Td313S-10uMR1kd_E0O888pBy6mZrvOQOPEz3H3-d8GGRvrlRQbxF0ggBXS3fxE_pxaX_sJ21w4fn170M3w13anBHqU1ytHYH0k2UfmahDV7uUvcycvFek1spCRpxQKttRbFnDDt5cfC0XeZBACSPXvAlkMyDCn7Z_HoOdrPl2f_1Wo69_3RcK3efc30CjmhFHe0PBK9hHSI3tCXJLkrkDBPTYxyM5Yh1O_YFnoUVR3r3e8obuzkzRkvdshsTboW3jUNykjoYMkYu9enWL9xLMHdFOQ4GuqblAeJbTNmwz8QtYOP87Lix1A=w489-h869-s-no-gm?authuser=0" alt="foto de josué"/>
        </Avatar>
        <h1>Josué Ramos</h1>
    </Conteiner>
  )
}