import React from "react";

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Creating responsive and modern web applications." },
    { title: "UI/UX Design", desc: "Designing intuitive and user-friendly interfaces." },
    { title: "Full-Stack Solutions", desc: "Handling both frontend and backend development." },
  ];

  return (
    <section id="services" class="mb-40">
            <div>
                <h3 class="title">
                    My <span class="text-indigo-600">Services</span>
                </h3>
            </div>
            <div class="md:grid md:grid-cols-2 gap-10 mb-14 service-container">
                <div class="bg-gray-50 p-10 rounded text-center mb-10 md:mb-0">
                    <div class="service-icon">
                        <i class="fa-solid fa-laptop-code text-6xl text-indigo-600"></i>
                    </div>
                    <h4 class="font-bold text-2xl my-5">Frontend Development</h4>
                    <p class="text-gray-500">
                        I specialize in front-end development using React, Tailwind CSS, and Ant Design. With a focus on creating responsive and visually appealing user interfaces, I ensure optimal performance and accessibility.
                    </p>
                </div>
                <div class="bg-gray-50 p-10 rounded text-center">
                    <div class="service-icon">
                        <i class="fa-solid fa-database text-6xl text-indigo-600"></i>
                    </div>
                    <h4 class="font-bold text-2xl my-5">Backend Development</h4>
                    <p class="text-gray-500">
                        I build robust applications using PHP and leverage Laravel for efficient, maintainable code. Skilled in designing and optimizing SQL databases, I ensure effective data management and high-quality solutions.
                    </p>
                </div>
            </div>
        </section>  
  );
};

export default Services;
