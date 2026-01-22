import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="my-32 lg:px-24 px-5">
      <h3 className="title mb-10">CONTACT <span className="text-indigo-600">ME</span></h3>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="text-gray-700">
          <p><b>Phone:</b> 9042466932</p>
          <p><b>Email:</b> aungkaungmyat912002@gmail.com</p>
          <p><b>Location:</b> Yangon, Myanmar</p>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" />
          <textarea placeholder="Your Message" className="border p-2 rounded" rows="4"></textarea>
          <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
