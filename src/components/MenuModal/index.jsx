import { Link } from "react-router-dom";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInDown } from "../../utils/Animations";
import { IoCloudDownloadOutline } from "react-icons/io5";
import cv from "../../assets/Currículo-Josué.pdf";

export const MenuModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-Xbox-SbBlack/30 backdrop-blur-sm"
        >
          <DialogPanel className="relative mx-auto flex h-[32rem] w-[90%] flex-col items-center overflow-hidden rounded-2xl bg-white p-4">
            <DialogTitle
              as={motion.h1}
              {...fadeInDown}
              transition={{
                ...fadeInDown.transition,
                duration: 0.8,
                delay: 0.5,
              }}
              className="font-Odasans text-5xl font-semibold text-Xbox-Purple"
            >
              JRDS
            </DialogTitle>
            <div className="mt-8 flex w-full flex-col items-center gap-2 font-medium">
              <motion.div
                {...fadeInDown}
                transition={{
                  ...fadeInDown.transition,
                  duration: 0.8,
                  delay: 0.6,
                }}
                className="w-full rounded-lg bg-Xbox-Purple/50 p-3"
              >
                <Link
                  to="/"
                  className="bottomLine w-full text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                {...fadeInDown}
                transition={{
                  ...fadeInDown.transition,
                  duration: 0.8,
                  delay: 0.7,
                }}
                className="w-full rounded-lg bg-Xbox-Purple/50 p-3"
              >
                <Link
                  to="/about"
                  className="bottomLine w-full text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Mim
                </Link>
              </motion.div>

              <motion.div
                {...fadeInDown}
                transition={{
                  ...fadeInDown.transition,
                  duration: 0.8,
                  delay: 0.8,
                }}
                className="w-full rounded-lg bg-Xbox-Purple/50 p-3"
              >
                <Link
                  to="/projects"
                  className="bottomLine w-full text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Projetos
                </Link>
              </motion.div>

              <motion.div
                {...fadeInDown}
                transition={{
                  ...fadeInDown.transition,
                  duration: 0.8,
                  delay: 0.9,
                }}
                className="w-full rounded-lg bg-Xbox-Purple/50 p-3"
              >
                <Link
                  to="/contact"
                  className="bottomLine w-full text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </motion.div>

              <motion.a
                {...fadeInDown}
                transition={{
                  ...fadeInDown.transition,
                  duration: 0.8,
                  delay: 1,
                }}
                href={cv}
                download
                target="_blank"
                className="mt-8 flex items-center gap-3 rounded-xl bg-Xbox-Purple py-4 px-6 text-white"
              >
                Baixar Currículo
                <IoCloudDownloadOutline />
              </motion.a>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
    </AnimatePresence>
  );
};
