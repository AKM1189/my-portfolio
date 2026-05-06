const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[72rem] flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">AKM</span>
          <span>© 2026 Aung Kaung Myat. Engineered with precision.</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AKM1189"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aung-kaung-myat1189/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
