import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg1 from "../assets/Profile_image.jpeg";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* Image section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-30 xl:mt-[150px] flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5 before:rounded-t-[400px] xl:before:max-w-[800px] xl:before:-top-8 xl:before:-left-8
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[800px] md:max-h-[500px] xl:max-h-[900px] rounded-t-[400px] "
              src={ProfileImg1}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
            src={ProfileImg1}
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 xl:mt-[400px]">
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
          <p className="text-6xl md:text-5xl xl:text-6xl font-playfair z-10 text-center md:text-start">
            Veervijaysinh {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[30px] before:-top-[90px] before:z-[-1]"
            >
              Rana
            </span>
          </p>

          <p className="mt-10 mb-7 md:text-md xl:text-xl text-center md:text-start">
            Hello 👋🏻, I'm a Senior Software Developer with{" "}
            <span className="text-yellow font-semibold">6+ years</span> of{" "}
            <span className="text-red font-semibold">React Native</span>{" "}
            experience and{" "}
            <span className="text-yellow font-semibold">1.5+ years</span> of{" "}
            <span className="text-red font-semibold">React JS</span> experience.
            I am passionate about building high-quality
            <span className="text-blue font-semibold"> Mobile and Web </span>
            applications that meet the needs of end-users and drive business
            success. Throughout my career, I have honed my skills in developing
            custom UI components, integrating third-party APIs, and optimizing
            app performance and scalability.
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
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
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
