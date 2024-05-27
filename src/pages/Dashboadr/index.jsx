import { Conteiner, Iform, Title, DownloadButton, Redes} from "./Dashboard_Style"
import { Avatar } from "../Login/Login_Style"
import avatar from '../../assets/48032843-FBDB-480C-832C-B6FEDAE2B589.jpg'
/// components
import CV from '../../assets/Currículo Josué.docx.pdf'
import Header from "../../components/Header"
import SaidBar from "../../components/SideBar"
/// motion
import { PageTransition } from "../../components/PageTransition"
import { motion } from "framer-motion"
import { transition } from "../../utils/Animations"
/// icons
import {IoLogoInstagram,IoLogoLinkedin} from 'react-icons/io5';
import { FaGithubSquare } from "react-icons/fa";

export default function Dashboadr() {
  return (
    <>
      <Conteiner>
        <Header />
        <SaidBar />
        <PageTransition />
        
        <Iform>
          <div>
            <Title>
            Olá, seja bem-vindo(a) ao meu portfólio de 2024! <br></br> Aqui você
              encontrará meus projetos que venho feito ultimamente. Logo abaixo está algumas das minhas redes, sinta-se
              à vontade de entrar em contato! 🤠
              <Redes>
              <button><IoLogoInstagram size={50}/></button>
              <button><IoLogoLinkedin size={50}/></button>
              <button><FaGithubSquare size={50}/></button>
            </Redes>
            </Title>
          </div>

          <div>
            <Avatar>
            <motion.img
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ ...transition, duration: 1.45, delay: 1.9 }}
              src={avatar}
            />
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