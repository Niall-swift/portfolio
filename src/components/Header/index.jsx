import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInDown } from "../../utils/Animations";
import { MenuModal } from "../MenuModal";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import cv from '../../assets/Currículo-Josué.pdf'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      {...fadeInDown}
      transition={{ ...fadeInDown.transition, delay: 1.1 }}
      className={'bg-darkBrown/10 text-whity shadow-sm backdrop-blur-xl sticky top-0 z-30 flex py-6 transition-colors duration-150'}
    >
      <div className="container mx-auto flex items-center justify-between px-10 xl:px-0 ">
        <Link
          to="/"
          className="font-Odasans text-5xl font-semibold text-Xbox-Sinza dark:text-Xbox-Purple"
          onClick={() => window.scrollTo(0, 0)}
        >
          JRDS
        </Link>

        <div className="hidden gap-16 font-medium lg:flex">

          <Link
            to="/about"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Sobre Mim
          </Link>

          <Link
            to="/projects"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Projetos
          </Link>
          <Link
            to="/career"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Studos
          </Link>
          <Link
            to="/contact"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contato
          </Link>
        </div>

        <div className="flex items-center gap-4">
            <a
            href={cv}
            download
            className="hidden items-center gap-3 rounded-3xl bg-slate-800 dark:bg-Xbox-Purple hover:brightness-110 py-3 px-5 text-white transition-all disabled:cursor-not-allowed disabled:hover:bg-accent/40 disabled:hover:text-white/80 lg:flex"
          >
            Baixar Currículo
            <IoCloudDownloadOutline/>
          </a>
             {/* Botao Menu p Mobile  */}
          <button onClick={() => setIsOpen(true)} className="block lg:hidden">
            <HiOutlineMenuAlt4 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Menu p Mobile */}
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};