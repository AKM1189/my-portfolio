const SectionTitle = ({ highlight, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="title">
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto -mt-10">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

