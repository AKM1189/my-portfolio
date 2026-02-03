import React from "react";

const Contact = () => {
  return (
    <section id="contact" class="mb-32">
          <div class="contact-container">
            <div class="mb-20">
              <h3 class="title">
                Contact <span class="text-indigo-600">Me</span>
              </h3>
            </div>
            <div class="sm:grid sm:grid-cols-2 contact-container">
              <div>
                <div class="mb-10">
                  <h3 class="text-3xl text-gray-500 font-semibold">Get in Touch</h3>
                </div>
                <div class="flex mb-7">
                  <div class="mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="size-7 text-indigo-600 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="sm:text-xl text-lg font-semibold text-gray-500 mb-1">Phone</h3>
                    <h4 class="sm:text-lg text-sm">(+95) 94522 435 31</h4>
                  </div>
                </div>
                <div class="flex mb-7">
                  <div class="mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7 text-indigo-600 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="sm:text-xl text-lg font-semibold text-gray-500 mb-1">Email</h3>
                    <h4 class="sm:text-lg text-sm">akm.dev.me@gmail.com</h4>
                  </div>
                </div>
                <div class="flex mb-7">
                  <div class="mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7 text-indigo-600 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="sm:text-xl text-lg font-semibold text-gray-500 mb-1">
                      Address
                    </h3>
                    <h4 class="sm:text-lg text-sm">Yangon, Myanmar</h4>
                  </div>
                </div>
                <div>
                  <a href="https://github.com/akm1189" class="mr-5" target="_blank"><i class="fa-brands fa-github text-3xl text-indigo-500"></i></a>
                                    <a href="https://www.linkedin.com/in/aung-kaung-myat1189/" class="mr-5" target="_blank"><i class="fa-brands fa-linkedin text-3xl text-indigo-500"></i></a>
                                </div>
                            </div>
                            <div class="mt-10">
                                <form id="contact-form">
                                    <div class="mb-5">
                                        <label for="name" class="label-style">Name</label>
                                        <input id="name" type="text" class="input-style" placeholder="Your Name" required />
                                    </div>
                                    <div class="my-5">
                                        <label for="email" class="label-style">Email</label>
                                        <input type="email" id="email" class="input-style" placeholder="akm@example.com" required />
                                    </div>
                                    <div class="my-5">
                                        <label for="message" class="label-style">Message</label>
                                        <textarea name="" id="message" class="input-style" placeholder="Message" rows="3" required></textarea>
                                    </div>
                                    <input type="submit" id="submit" value="Send Message" class="btn bg-indigo-500 rounded-md p-2 px-4 text-white transition ease-in-out duration-300 hover:bg-indigo-600 hover:shadow-md"></input>

                                </form>
                            </div>
                        </div>
                    </div>
        </section>
  );
};

export default Contact;
