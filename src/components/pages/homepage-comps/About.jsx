import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          Hello, I’m a seasoned web developer with over a decade of experience
          crafting innovative digital solutions. From designing seamless user
          experiences to building robust, secure back-end systems, I specialize
          in translating complex challenges into intuitive and scalable
          applications.
        </p>

        <p className="mb-4">
          Proficient in cutting-edge technologies like ReactJS, NextJS, NodeJS,
          and MongoDB, I excel in developing modern web and mobile solutions. My
          passion lies in clean, maintainable code and delivering projects that
          not only meet but exceed client expectations.
        </p>

        <p className="mb-4 py-6">
          With a background in full-stack development and leadership roles, I
          thrive on collaboration and driving efficiency in every stage of the
          development lifecycle. Let’s connect and create transformative
          solutions together.
        </p>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
