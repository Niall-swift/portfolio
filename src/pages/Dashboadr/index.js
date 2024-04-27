import { Conteiner, Iform, Title, DownloadButton} from "./Dashboard-styled"
import { Avatar } from "../Login/Login-styled"
import avatar from '../../assets/48032843-FBDB-480C-832C-B6FEDAE2B589.jpg'
import CV from '../../assets/Currículo Josué.docx.pdf'
import Header from "../../components/Header"
import { Link } from "react-router-dom"

export default function Dashboadr() {
  return(
    <>
    <Conteiner>
    <Header/>

      <Iform>
        <div>
        <Title>
          <h1>Josué Ramos</h1>
          <h2>Full-Stack Developer</h2>
        </Title>
        </div>

        <div>
        <Avatar>
            <img src={avatar} alt=""/>
        </Avatar>
        </div>

        <div>
        <DownloadButton>
        <a href={CV} download> Download CV </a>
        </DownloadButton>
        </div>
      </Iform>

    </Conteiner>
    </>
  )
}