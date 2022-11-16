import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-32"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-6 before:-left-5 before:rounded-lg
            before:w-full before:max-w-[400px] md:before:max-w-[500px] before:h-full before:border-8 before:bg- before:border-orange before:z-[-1]"
          >
            <img
              alt="profile"
              className=" z-10 w-full rounded-lg bg-purple max-w-[500px] md:max-w-[400px] xl:max-w-[500px] "
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full rounded-lg bg-purple max-w-[250px] md:max-w-[400px] xl:max-w-[500px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Ivan {""}
            <span
              className="xs:relative text-orange xs:font-semibold z-20 lg:before:content-blockchain
              before:absolute  before:-right-[80px] before:-top-[1px] before:z-[-1] "
            >
              Falimendikov
            </span>
          </p>

          <p className="mt-12 mb-7 text-lg text-center md:text-start">
            My name is Ivan Falimendikov, I'm a Blockchain Developer. Welcome to
            my personal website!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-orange text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-orange hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-orange py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-orange transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk!
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
