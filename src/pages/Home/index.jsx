import { PageTransition } from "../../components/PageTransition";
import { Link } from "react-router-dom";
import { BsInstagram, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition, fadeInDown, fadeInUp} from "../../utils/Animations";
import picture from '../../assets/picture.jpg'
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
    <PageTransition/>
      <Header/>

      <section className="container relative z-20 mx-auto w-full h-full overflow-hidden sm:mt-1">
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mx-auto grid items-center gap-4 p-8 sm:grid-cols-3 xl:gap-14 "
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-Wulkan text-4xl font-medium uppercase  text-Xbox-Purple sm:text-left lg:text-5xl">
              Dev <br className="hidden sm:block" /> <p className="text-black">Front-End</p>
            </h1>

            <p className="text-xl xl:text-base">
              Olá, eu me chamo Josué, seja bem-vindo(a) ao meu Portfólio.
              Logo abaixo você encontra algumas das minhas redes, sinta-se
              à vontade de entrar em contato! =)
            </p>
            {/* Redes sociais */}
            <div className="flex justify-center gap-10 pb-4 text-3xl sm:justify-start sm:pt-6">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/niall_swift_/"
                className="transition hover:text-Xbox-Purple"
              >
                <BsInstagram />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/josué-ramos-dev"
                className="transition hover:text-Xbox-Purple"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Niall-swift"
                className="transition hover:text-Xbox-Purple"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="mx-auto w-[90%] h-[90%] shadow-2xl shadow-Xbox-roxo/50 overflow-hidden rounded-full">
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ ...transition, duration: 1.45, delay: 0.7 }}
              src={picture}
              className="mx-auto w-full"
            />
          </div>
          <div className="relative h-2/3 ">
            <h1 className="text-center font-Wulkan text-4xl uppercase sm:text-left lg:text-6xl">
              Josué Ramos
            </h1>

            <Link
              to="/projects"
              className="absolute -bottom-4 left-6 hidden h-32 w-32 items-center justify-center rounded-full border border-Xbox-Sinza sm:flex lg:left-14 lg:h-40 lg:w-40 xl:bottom-0 hover:scale-105	hover:animate-pulse transition duration-30"
            >
              <div className="absolute top-2 right-1 h-6 w-6 rounded-full bg-Xbox-Purple lg:top-1 lg:right-5"></div>
              <p className="w-20">Ver meus <p className="text-Xbox-Purple">Projetos</p></p>
              <BsArrowUpRight className="h-5 w-5" />
            </Link>

          </div>
        </motion.div>

      </section>

      {/* Efeitos em volta do site */}
    </>
  );
}
