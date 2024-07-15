import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, transition } from "../../utils/Animations";
import { StaggerContainer, itemAnimation } from "../../utils/Animations";
import Picture from "../../assets/picture.jpg";
import { PageTransition } from "../../components/PageTransition";
import { HiOutlineCodeBracket, HiOutlineScale } from "react-icons/hi2";
import { LuSendToBack } from "react-icons/lu";
import { Header } from "../../components/Header";

export const About = () => {
  return (
    <>
    <PageTransition/>
      <Header />
      <section className="container mx-auto flex min-h-[80vh] w-full flex-col gap-12 p-4 sm:p-6 lg:flex-row">
        <motion.div>
          <motion.div
            {...fadeInDown}
            transition={{ ...fadeInDown.transition, duration: 1.8, delay: 1 }}
            className="mt-8"
          >
            <h1 className="text-center font-Wulkan text-5xl font-medium uppercase sm:text-left sm:text-7xl">
              Sobre Mim
            </h1>

            <p className="max-w-sm py-8 text-sm sm:max-w-2xl sm:text-base">
              Eu me chamo Josué Ramos. Tenho 23 anos e atualmente estou
              em formação pelo curso livre de Desenvolvedor Full Stack Python na
              EBAC - Escola Britânica de Artes Criativas e Tecnologia.
              minha expertise reside no desenvolvimento de interfaces web com JavaScript e React. Agora, 
              estou em busca de aprimorar minhas habilidades para o back-end, aprendendo TypeScript, 
              Node.js e Express. Com essa combinação, pretendo me tornar um desenvolvedor full-stack completo, 
              capaz de criar aplicações web robustas e escaláveis.
            </p>

            <div className="mx-auto w-[100%] border border-Xbox-Purple/10"></div>

            <div className="my-4 flex w-full flex-col gap-4 rounded-xl bg-Xbox-Purple/50 py-4 px-3 text-center font-Wulkan text-xl font-semibold sm:m-6 sm:mx-auto sm:w-fit sm:flex-row sm:gap-8 sm:p-6 sm:text-3xl sm:font-normal">
              <h2 className="text-white">
                <span className="mr-2 text-2xl font-semibold text-Xbox-roxo">
                  5+
                </span>
                Projetos feitos
              </h2>
              <h2 className="text-white">
                <span className="mr-2 text-2xl font-semibold text-Xbox-roxo">
                  1
                </span>
                Ano de experiência
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="my-6 grid w-full md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4"
          >
            <motion.div
              variants={itemAnimation}
              className="rounded-xl w-full bg-whity/60 dark:bg-darky/60 p-4 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/50 dark:hover:shadow-darkAccent/30 xl:max-w-[17rem]"
            >
              <HiOutlineCodeBracket className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="font-semibold lg:text-lg ">Front-end</h3>
              <p className="pt-4">
                Atualmente a linguagem que mais uso é Javascript, usando em
                conjunto com React
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-whity/60 dark:bg-darky/60 p-4 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/50 dark:hover:shadow-darkAccent/30 xl:max-w-[17rem]"
            >
              <LuSendToBack className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-base font-semibold lg:text-lg ">Back-end</h3>
              <p className="pt-4">
              Olhando para o outro lado de uma aplicação, estou usando o TypeScript com o Node.js e express
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-whity/60 dark:bg-darky/60 p-4 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/50 dark:hover:shadow-darkAccent/30 xl:max-w-[17rem]"
            >
              <HiOutlineScale className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-base font-semibold lg:text-lg ">
                Princípios
              </h3>
              <p className="pt-4">
              Sou uma pessoa leal, sempre demostro respeito, comprometimento e afinidade, e gratidão a quem está ao meu lado.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemAnimation}
          className="mx-auto w-4/5 overflow-hidden rounded-2xl sm:relative xl:w-[35%]"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ ...transition, duration: 2 }}
            src={Picture}
            className="inset-0 h-full w-full rounded-2xl object-cover object-center lg:absolute"
            alt="A Picture about myself"
          />

          <div className="hidden bg-gradient-to-t from-Xbox-roxo w-full to-transparent lg:absolute lg:bottom-0 lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Esse sou eu! 🏳️‍🌈
            </h2>

            <p className="mt-4 leading-relaxed text-white/90"></p>
          </div>
        </motion.div>

        <div className="dotsGrid absolute left-0 top-0 z-10 hidden h-12 w-12 lg:block 2xl:h-24 2xl:w-32"></div>
        <div className="dotsGrid absolute bottom-0 z-20 hidden h-16 w-48 2xl:block 2xl:w-64"></div>
        <div className="dotsGrid absolute right-0 top-0 z-20 hidden h-16 w-24 lg:block 2xl:w-44"></div>
      </section>
    </>
  );
};
