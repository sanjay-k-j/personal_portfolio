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
        I am a versatile developer with experience in Python, JavaScript, HTML, CSS, C, React and SQL.
         I am proficient in version control with Git. My portfolio includes projects that demonstrate my ability 
         to use technology to solve real-world problems and enhance user experiences.
        </p>

        <br />

        <p className="text-xl">
        I am always looking for new challenges and opportunities to learn and grow. 
        I am confident that I can use my skills and experience to make a significant contribution to any team.
        </p>
      </div>
    </div>
  );
};

export default About;
