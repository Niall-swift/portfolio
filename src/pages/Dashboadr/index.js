import { Conteiner, Iform} from "./Dashboard-styled"
import { Avatar } from "../Login/Login-styled"
import avatar from '../../assets/48032843-FBDB-480C-832C-B6FEDAE2B589.jpg'
import Header from "../../components/Header"

export default function Dashboadr() {
  return(
    <>
    <Conteiner>
    <Header/>

      <Iform>
        <div>
          <h1>Josué Ramos</h1>
          <h2>Full-Stack Develop</h2>
        </div>

        <div>
        <Avatar>
            <img src={avatar} alt=""/>
        </Avatar>
        </div>

        <div>
          <button>Baixar cv</button>
        </div>
      </Iform>

    </Conteiner>
    </>
  )
}