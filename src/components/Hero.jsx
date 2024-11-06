import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Adhitya S</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Innovative Full-Stack Software Developer <br className="sm:block hidden" />
            Building Scalable Solutions with a User-Centric Approach
          </p>

          {/* Social Links */}
          <div className="flex mt-4 gap-4 z-10 relative">
            <a
              href="https://github.com/Adhitya-S"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-white hover:text-[#915EFF] text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/adhitya-s-a4511912b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white hover:text-[#915EFF] text-2xl" />
            </a>
            <a
              href="https://drive.google.com/file/d/1j5SA8hBIVlfFYzdJBNtKgenoX2SnlYqW/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <FaFileAlt className="text-white hover:text-[#915EFF] text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
