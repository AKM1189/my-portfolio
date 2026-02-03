import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "(+95) 94522 435 31",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "akm.dev.me@gmail.com",
      href: "mailto:akm.dev.me@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "Yangon, Myanmar",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="title">
          Contact <span className="gradient-text">Me</span>
        </h2>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Get in Touch</h3>

              <div className="space-y-6">
                {contacts.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-600 text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-800 font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/akm1189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aung-kaung-myat1189/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <form id="contact-form" className="space-y-5">
                <div>
                  <label htmlFor="name" className="label-style block mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input-style"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-style block mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-style"
                    placeholder="akm@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label-style block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="input-style min-h-[120px] resize-y"
                    placeholder="Your message..."
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
