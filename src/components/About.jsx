import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Vigneshwaran. I'm a Full stack develoer based in Tamilnadu, India.
        </p>

        <br />

        <p className="text-xl">
        I am a Certified Full Stack Developer.
         I enjoy problem-solving and coding.
          Always strive to bring 100% to the work I do. 
         I have worked on technologies like
          HTML ,CSS ,TAILWIND CSS ,JAVASCRIPT ,REACT JS ,NODE JS ,EXPRESS JS ,MONGO DB ,MYSQL ,POSTGRESQL ,FIREBASE ,GIT . 
         In my Knowledge i have build many applications,
           which helped me strengthen my experience in JAVASCRIPT,REACT JS AND NODE JS.
          I am passionate about developing complex applications that solve real-world problems impacting millions of users.
           </p>
      </div>
    </div>
  );
};

export default About;
