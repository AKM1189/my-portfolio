import { motion } from "framer-motion";
import { MyInfo } from "../constants";
import { fadeInUp, staggerContainer } from "../utils/motion";

const Hero = ({ onAboutClick }) => {
  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const MotionH1 = motion.h1;

  return (
    <MotionDiv
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center min-h-[calc(100vh-8rem)] px-6 md:px-12 lg:px-20 pt-24 lg:pt-32 pb-16"
    >
      <div className="text-center max-w-3xl">
        <MotionP
          variants={fadeInUp}
          className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
        >
          {MyInfo.position}
        </MotionP>

        <MotionH1
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
        >
          I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
            {MyInfo.name}
          </span>
        </MotionH1>

        <MotionP
          variants={fadeInUp}
          className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          I am an enthusiastic web developer with a passion for creating dynamic and accessible web
          applications. My self-learning attitude helps me quickly adapt to new technologies and
          build practical, user-focused products.
        </MotionP>

        <MotionDiv
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className="px-8 py-3.5 bg-primary hover:bg-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            onClick={onAboutClick}
          >
            About Me
          </button>
          <a
            href="#projects"
            className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </a>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default Hero;
