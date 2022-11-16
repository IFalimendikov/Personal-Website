import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MyExperience = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="experience" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-orange">Experience</span>
          </p>
          <LineGradient width="w-1/2" />
          <p className="mt-8 mb-7 text-lg">
            Deep knowledge and involvement into the Web3 and Blockchain Industry
            allows me to spot new trends and utilize them with a high degree of
            confidence.
          </p>
        </motion.div>
      </div>

      {/* EXPERIENCE */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* DEVELOPER */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Developer
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-lg">
            As a developer I offer full-stack Web3 production, including: Smart contract,
            DApp, Website, Asset testing. I specialize in production of NFTs and
            DeFi.
          </p>
        </motion.div>

        {/* ADVISER */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Adviser
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-lg ">
            I worked as an advisor for 3 projects. 6+ years in the Blockchain
            Industry, 1.5 years of which being in Web3 granted me a deep insight
            on the NFT production/deployment process and practical project
            management.
          </p>
        </motion.div>
        {/* ACADEMIC */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3 color">
                Academic
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-grey absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-lg">
            In addition to practical knowledge, I also hold master's degree in
            Finance and bachelor's degree in Economics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyExperience;
