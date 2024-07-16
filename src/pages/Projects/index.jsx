import { motion } from "framer-motion";
import { StaggerContainer } from "../../utils/Animations";
import { PageTransition } from "../../components/PageTransition";
import { ProjectCard } from "../../components/ProjectCard";
import {Header} from '../../components/Header'
import { useContext } from "react";
import { ContextG } from "../../Context";


export default function Projects () {
  const {projects} = useContext(ContextG)

  return (
    <>
      <Header/>
      <motion.section className="flex w-full flex-col items-center">
        <h1 className="mb-16 mt-6 font-Wulkan text-4xl sm:text-5xl">
          Últimos Projetos
        </h1>
          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid gap-x-28 lg:grid-cols-2 xl:gap-x-36"
          >
            {projects?.map((project, index) => (
              <ProjectCard key={index} project={project} position={index} />
            ))}
          </motion.div>
      </motion.section>
    </>
  )

}