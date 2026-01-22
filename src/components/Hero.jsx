
const Hero = ({onAboutClick}) => {
  return (
    // <section id="home" className="min-h-screen flex items-center">
    //   <div className="grid lg:grid-cols-3 gap-5 px-10 lg:px-24">
    //     <div className="image-container flex justify-center lg:col-span-1">
    //       <img
    //         className="rounded-full border-4 shadow-lg lg:w-2/3 w-2/3"
    //         src="/my photo.jpg"
    //         alt="Aung Kaung Myat"
    //       />
    //     </div>

    //     <div className="intro lg:col-span-2 flex flex-col justify-center">
    //       <h3 className="font-bold text-xl sm:text-3xl uppercase mb-3">
    //         I'm <span className="text-indigo-600">Aung Kaung Myat</span>
    //       </h3>
    //       <p className="text-gray-700 mb-5">
    //         I am an enthusiastic web developer with a passion for creating dynamic and accessible web applications. My self-learning attitude allows me to quickly adapt to new technologies and frameworks...
    //       </p>
    //       <a
    //         href="#about"
    //         className="bg-indigo-600 text-white px-4 py-2 rounded-full border border-indigo-600 hover:text-indigo-600 hover:bg-white transition duration-300"
    //       >
    //         About Me
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <div class="header grid grid-cols-3" id="header">
                    <div class="image-container lg:col-span-1 col-span-3 p-5 flex justify-center">
                        <div class="lg:w-2/3 w-2/3 ">
                            <img class="rounded-full border-secondary border-4 shadow-lg" src="/my photo.jpg" alt="" />
                        </div>
                    </div>
                    <div class="sm:col-span-1 lg:hidden"></div>
                    <div class="intro grid lg:ps-20 ps-10 items-center float-right col-span-3 sm:col-span-2">
                        <div class="intro-content">
                            <h3 class="font-bold text-xl sm:text-3xl uppercase mb-3">
                                I'm <span class="text-indigo-600">Aung Kaung Myat</span>
                            </h3>
                            <h3 class="role text-2xl sm:text-5xl font-bold uppercase"></h3>
                            <p class="my-5 w-10/12 sm:w-2/3 pb-3 space-y-10 text-gray-700">
                                I am an enthusiastic web developer with a passion for creating dynamic and accessible web applications. My self-learning attitude allows me to quickly adapt to new technologies and frameworks, making me an agile and versatile developer. I thrive on problem-solving
                                and enjoy tackling challenges head-on. I am dedicated to making the web a more open and user-friendly space. I am actively seeking job opportunities that align with my skills and interests, where I can contribute, learn,
                                and grow in a collaborative environment.
                            </p>

                            <button class="scroll-smooth smooth shadow-sm hover:shadow-primary bg-indigo-600 text-white px-4 py-2 rounded-full border border-indigo-600 cursor-pointer hover:text-indigo-600 hover:bg-white transition ease-in-out duration-300" onClick={onAboutClick}>About Me</button>
              </div>
            </div>
          </div>
  );
};

export default Hero;
