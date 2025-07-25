import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/Animations";
import { Header } from "../../components/Header";

import {
  StaggerContainer,
  itemAnimation,
  StaggerText,
  letterAnimation,
} from "../../utils/Animations";

import { PageTransition } from "../../components/PageTransition";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
  const text1 = "Quer me contratar";
  const text2 = "ou me conhecer um pouco mais?";

  const fragmentedTitle1 = text1.split("");
  const fragmentedTitle2 = text2.split("");

  return (
    <>
    <PageTransition/>
      <Header/>
      <section className="flex h-[80vh] w-full flex-col items-center justify-center p-4 sm:h-[90vh] sm:p-6 ">
        <div className="max-w-5xl overflow-hidden text-center">
          <motion.h1
            variants={StaggerText}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-6xl font-Wulkan text-4xl lg:text-6xl"
          >
            <div className="mr-4">
              {fragmentedTitle1?.map((letter, index) => (
                <motion.div
                  key={index}
                  variants={letterAnimation}
                  style={{
                    display: "inline-block",
                  }}
                >
                  {letter === " " ? `\xa0` : letter}
                </motion.div>
              ))}
            </div>
            {fragmentedTitle2?.map((letter, index) => (
              <motion.div
                key={index}
                variants={letterAnimation}
                style={{ display: "inline-block" }}
              >
                {letter === " " ? `\xa0` : letter}
              </motion.div>
            ))}
          </motion.h1>

          <motion.h3
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, duration: 1.6, delay: 2.3 }}
            className="pt-12 pb-6 font-medium"
          >
            Entre em contato:
          </motion.h3>
        </div>

        <motion.div
          variants={StaggerContainer}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex items-center justify-center gap-10  text-3xl"
        >
          <motion.a
            variants={itemAnimation}
            href="https://api.whatsapp.com/send?phone=5522988247057"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            variants={itemAnimation}
            href="https://www.instagram.com/niall_swift_/"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            variants={itemAnimation}
            href="mailto:josueramosdossantos24@gmail.com"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <HiOutlineMail />
          </motion.a>

          <motion.a
            variants={itemAnimation}
            href="https://www.linkedin.com/in/josu%C3%A9-ramos-dev/"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.div>
      </section>
    </>
  );
};
