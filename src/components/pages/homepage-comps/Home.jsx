import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MobileSocialLinks from "./MobileSocialLinks";

const Home = () => {
  return (
    <section name="Home" className="relative w-full md:h-screen h-unset">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-col md:gap-8">
        <div className="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4">
            I`m Jackson Kidd
          </h1>
          <h2 className="rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white">
            Front End Developer
            <span className="text-green-400"> +10 </span>
          </h2>

          {/* <p className="text-gray-300 py-4 max-x-md text-justify">
            With over a decade of experience leading website development
            projects, I specialize in driving all phases of the development
            lifecycle, from gathering and analyzing user requirements to
            delivering clean, robust, and secure code. Adept at creating
            detailed mockups, enhancing designs, and implementing innovative
            solutions, I ensure seamless user experiences and exceptional system
            performance. Committed to achieving cross-platform compatibility and
            exceeding client expectations, I combine technical expertise with a
            customer-focused approach to deliver high-quality, scalable web
            solutions.
          </p> */}
          <div className="flex order-1 md:order-2 py-8">
            <img
              // src="./images/hero.webp"
              src="./images/hero1.jpg"
              alt="My profile"
              className="mb-2 rounded-2xl mx-auto  object-cover  shadow-2xl shadow-primary-color/20"
              style={{
                filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))",
              }}
            />
          </div>

          <div className="hidden desktop:flex order-2">
            <Link
              to="About"
              smooth
              duration={500}
              className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <MobileSocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
