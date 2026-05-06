import SectionTitle from "./SectionTitle";

const services = [
  {
    number: "01",
    title: "Interface craft",
    description:
      "I build responsive interfaces that feel credible, premium, and ready to represent a product well.",
  },
  {
    number: "02",
    title: "Full-stack execution",
    description:
      "I can move from front-end implementation into APIs, data-driven features, and back-end logic without losing consistency.",
  },
  {
    number: "03",
    title: "Product thinking",
    description:
      "I care about outcomes, not just output, which means design, code quality, and user clarity all matter in the final result.",
  },
];

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="section-frame rounded-[2rem] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle
            eyebrow="Services"
            title="The value I bring"
            highlight="to modern product teams."
            subtitle="I contribute where visual polish, technical structure, and reliable delivery all need to meet."
          />

          <div className="grid gap-6">
            {services.map((service) => (
              <article key={service.title} className="grid gap-5 rounded-[1.7rem] bg-white/[0.04] p-7 md:grid-cols-[96px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.06] font-[family-name:var(--font-display)] text-2xl text-[#e7d8bf]">
                  {service.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-8 text-stone-300">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
