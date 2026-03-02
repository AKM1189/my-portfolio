import { MyInfo } from "../constants";

const Hero = ({ onAboutClick }) => {
  return (
    <div className="flex max-lg:flex-col gap-12 lg:gap-16 justify-center items-center min-h-[calc(100vh-8rem)] px-6 md:px-12 lg:px-20 pt-24 lg:pt-32 pb-16">
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-teal-400/20 rounded-full blur-2xl animate-pulse" />
          <img
            className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white/20 shadow-2xl object-cover"
            src="/my photo.jpg"
            alt="Aung Kaung Myat"
          />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-slate-900">
            <span className="text-2xl">👋</span>
          </div>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          {MyInfo.position}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
           {MyInfo.name}
          </span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
          I am an enthusiastic web developer with a passion for creating dynamic
          and accessible web applications. My self-learning attitude allows me
          to quickly adapt to new technologies and frameworks, making me an
          agile and versatile developer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
