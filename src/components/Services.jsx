import React from "react";

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Creating responsive and modern web applications." },
    { title: "UI/UX Design", desc: "Designing intuitive and user-friendly interfaces." },
    { title: "Full-Stack Solutions", desc: "Handling both frontend and backend development." },
  ];

  return (
    <section id="services" className="my-32 lg:px-24 px-5">
      <h3 className="title mb-10">MY <span className="text-indigo-600">SERVICES</span></h3>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-100 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="font-bold mb-3">{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
