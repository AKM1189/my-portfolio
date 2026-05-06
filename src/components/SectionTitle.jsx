const SectionTitle = ({ eyebrow, title, highlight, subtitle }) => {
  return (
    <div className="mb-9">
      {eyebrow && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-app-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-4xl font-bold leading-none text-white sm:text-[3.45rem]">
        {title} {highlight && <span className="text-app-primary">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
