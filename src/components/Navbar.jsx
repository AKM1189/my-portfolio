const navItems = [
  { key: "hero", label: "Home" },
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
];

const Navbar = ({ onNavClick, activeSection }) => {
  return (
    <div className="rounded-full border border-white/6 bg-app-panel-dark/88 px-5 py-3 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <button
          className="text-md! font-bold tracking-[0.18em] text-app-primary"
          onClick={() => onNavClick("hero")}
        >
          {" <AKM />"}
        </button>

        <div className="mx-auto text-[14px]! flex items-center gap-5 font-medium text-slate-300 sm:text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;

            return (
              <button
                key={item.key}
                className={
                  isActive
                    ? "text-app-primary"
                    : "transition-colors hover:text-app-primary"
                }
                onClick={() => onNavClick(item.key)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          className="rounded-full bg-[image:var(--app-primary-gradient)] px-4 py-2 font-semibold text-slate-200 text-[14px]! transition-transform duration-300 hover:-translate-y-0.5 sm:text-xs"
          onClick={() => onNavClick("contact")}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
