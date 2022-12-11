import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto md:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-orange">Projects</span>
          </p>
          <div className="flex md:justify-center mt-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-lg">
          I'm always excited to join the production on new projects! Below are
          the collections I worked or still working on. Hover over to see more.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="relative p-2 "
          >
            <div
              className={`absolute max-w-[400px]  h-full w-full lg max-h-[400px] opacity-0
    z-30 flex flex-col justify-center  p-10 text-deep-blue rounded-3xl`}
            ></div>
            <img
              className="rounded-3xl"
              src={`../assets/project-1.jpg`}
              alt="uwucrew"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="relative p-2 "
          >
            <div
              className={`absolute max-w-[400px] overflow-auto  h-full w-full lg max-h-[400px] opacity-0 hover:opacity-95 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-10 text-deep-blue rounded-3xl`}
            >
              <p className="text-2xl font-playfair">uwucrew</p>
              <p className="mt-7">
                uwucrew is a collection of 9670 NFT avatars with over{" "}
                <b> 4500 Ethereums of trading volume</b>. As a member of the
                original team who created the project, my roles were mainly in{" "}
                <b>R&D and asset testing</b>.
              </p>
              <a
                href="https://opensea.io/collection/uwucrew"
                target="_blank"
                class="mt-5 transition duration-500 text-white bg-purple hover:bg-orange focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Open collection
              </a>
            </div>
            <img
              className="rounded-3xl"
              src={`../assets/project-2.jpg`}
              alt="uwucrew"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="relative p-2 "
          >
            <div
              className={`absolute max-w-[400px] overflow-auto  h-full w-full lg max-h-[400px] opacity-0 hover:opacity-95 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center  text-center p-10 text-deep-blue rounded-3xl`}
            >
              <p className=" text-xl font-playfair">Cat's Swords</p>
              <p className="mt-7">
                Cat's Swords is a collection of 3000 NFTs, in which I completed
                all production process by <b>myself</b>. Elements being:{" "}
                <b>
                  DApp, Smart contract, Website, art creation and testing,
                  social media, deployment on the blockchain.
                </b>
              </p>
              <a
                href="https://twitter.com/SwordsNFT"
                target="_blank"
                class="mt-5 transition duration-500 text-white bg-purple hover:bg-orange focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Open collection
              </a>
            </div>
            <img
              className="rounded-3xl"
              src={`../assets/project-3.jpg`}
              alt="cat's swords"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
