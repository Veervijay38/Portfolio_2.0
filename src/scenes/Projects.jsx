import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Project1 = {
  title: "NexusONE",
  description:
    "Elante NexusOne app is the official app of Elante Mall Chandigarh designed to bring the best shopping, entertainment and dining experience to you,The app helps you access a host of special features like the store directory, your favourite brand's list, events, offers, discounts, benefits and mall directions anytime and anyplace!",
  image: require("../assets/NexusONE.png"),
  features: [
    "Push Notification",
    "Store Showcase",
    "Map Functionality",
    "Deployed App on Play/App store",
  ],
  toolsUsed: "React Native, Firebase",
  playstorelink:
    "https://play.google.com/store/apps/details?id=com.nexusmalls.elantenexusone",
};
const Project2 = {
  title: "HP Saksham",
  description:
    "To create a customized one stop technology solution for partners in order to enable them to interact with each other along with complete visibility on purchase/Sales/Inventory data and more. This platform will be a holistic tool providing host of features to the partners.",
  image: require("../assets/HP.png"),
  features: ["Setup Onboarding Flow", "Product Showcase", "Push Notification"],
  toolsUsed: "React Native, Firebase",
  playstorelink: "https://play.google.com/store/apps/details?id=com.hp.saksham",
};
const Project3 = {
  title: "AppSCoT",
  description:
    "AppSCoT is dedicated to its members who are passionate tennis players world wide. It allows to maintain contacts and relationships among its members, and contribute to develop the community. It also manages the organisation and the course of the ASCoT Club since 1992 tennis tornaments.",
  image: require("../assets/AppScot.png"),
  features: [
    "Developed from scratch",
    "InstagramLogin",
    "Chatting/Calling(Twilio)",
    "Push Notification",
    "Deployed App on Play/App store",
  ],
  toolsUsed: "React Native, Firebase, Twilio, Meta, Google Cloud API",
  playstorelink: "https://play.google.com/store/apps/details?id=com.AppSCot92",
};

const Project4 = {
  title: "Gativan",
  description:
    "Gativan is a multi-brand car and bike servicing platform for vehicle owners that want hassle free, transparent and reliable service.",
  image: require("../assets/Gativan.png"),
  features: [
    "Developed from scratch",
    "Implemented subscription model",
    "Deployed App on Play/App store",
  ],
  toolsUsed: "React Native, GraphQL, RevenueCat, Google Cloud",
  playstorelink:
    "https://play.google.com/store/apps/details?id=com.KStudio.Gativan",
};
const Project5 = {
  title: "resQR",
  description:
    "Attach resQR to keys, computers, phones, passports, luggage, wallets credit cards sunglasses and anything valuable.",
  image: require("../assets/Resqr.png"),
  features: ["Implemented subscription model", "Barcode Scanner"],
  toolsUsed: "React Native",
  playstorelink: "https://play.google.com/store/apps/details?id=com.resqr",
};

const Project6 = {
  title: "MERN Stack Dashboard",
  description:
    "The front-end of the dashboard is built using React.js and provides a responsive and dynamic user interface. The back-end is built using Node.js and Express, which provides a robust and scalable API for data management. The data is stored in MongoDB, a flexible and powerful NoSQL database, which provides efficient and fast data retrieval.",
  image: require("../assets/DashboardSS.png"),
  features: [
    "Multi-page Layout Featuring Sidebar Navigation",
    "Establishing a Proprietary Database and Backend Server Configuration",
    "Mongodb setup & Database creation",
    "Ensuring responsiveness across various devices and screen sizes",
    "Switching between Dark and Light Modes",
    "Developed/Deployed from scratch",
  ],
  toolsUsed: "MongoDB, Express, React JS, Node Js, Material-UI, Redux Toolkit",
  githublink: "https://github.com/Veervijay38/FullStack_admin",
  livelink: "https://veer-mern-admin.onrender.com/",
};

const Project7 = {
  title: "VR",
  description:
    "This project showcases my skills in web development and design by creating a simple and elegant single-page portfolio website. The website features a clean and modern design, with a responsive layout that adapts to various screen sizes. The website includes a brief introduction, my skills and expertise, my work experience, and my educational background.",
  image: require("../assets/Portfolio2.0.png"),
  features: [
    "Developed/Deployed from scratch",
    "Website with different Color gradient",
  ],
  toolsUsed: "React JS, Tailwind , Material-UI",
  githublink: "https://github.com/Veervijay38/Portfolio_2.0",
  livelink: "https://veervijaysinh-rana-portfolio.vercel.app/",
};

const Project8 = {
  title: "Gativan Website",
  description:
    "From the inception of the website to its launch, I contributed to every aspect and feature of the project.",
  image: require("../assets/gativanWebapp.png"),
  features: ["Developed from scratch", "Deployed on AWS"],
  toolsUsed: "React JS, Amazon S3, Amazon Route 53",
  livelink: "https://www.gativan.in/pune",
};

const Project9 = {
  title: "Portfolio Webapp",
  description:
    "Software Developer Portfolio built with react.js bootstrap that helps you showcase your work and skills as a software developer.",
  image: require("../assets/Portfolio.png"),
  features: ["Developed/Deployed from scratch"],
  toolsUsed: "React JS, react-router-dom, Material-UI",
  githublink: "https://github.com/Veervijay38/Veer_Portfolio",
  livelink: "https://veervijaysinh-rana.vercel.app/",
};

const Project10 = {
  title: "AirBnb_Clone",
  description:
    "Successfully cloned and replicated the Airbnb website Using React, Tailwind, Prisma, MongoDB, NextAuth, showcasing my skills in web development and design.",
  image: require("../assets/AirBnb_clone.png"),
  features: ["Implemented subscription model", "Barcode Scanner"],
  toolsUsed: "React Native",
  githublink: "https://github.com/Veervijay38/airbnb_clone",
  livelink: "https://veer-rent-house.vercel.app/",
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ Project }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{Project.title}</p>
        <p className="mt-7">{Project.description}</p>
        {Project.playstorelink && (
          <div
            className="rounded-r-sm bg-gradient-rainblue pr-0.5 pl-0.5 py-0.5 mt-6"
            onClick={() => window.open(Project.playstorelink)}
          >
            <div className="bg-grey hover:text-red w-full h-full flex items-center justify-center px-10 font-playfair">
              Playstore Link
            </div>
          </div>
        )}
        {/* {Project.githublink && (
          <div
            className="rounded-r-sm bg-gradient-rainblue pr-0.5 pl-0.5 py-0.5 mt-6"
            onClick={() => window.open(Project.githublink)}
          >
            <div className="bg-grey hover:text-red w-full h-full flex items-center justify-center px-10 font-playfair">
              Playstore Link
            </div>
          </div>
        )} */}
        {Project.livelink && (
          <div
            className="rounded-r-sm bg-gradient-rainblue pr-0.5 pl-0.5 py-0.5 mt-6"
            onClick={() => window.open(Project.livelink)}
          >
            <div className="bg-grey hover:text-red w-full h-full flex items-center justify-center px-10 font-playfair">
              Demo
            </div>
          </div>
        )}
      </div>
      <img src={Project.image} alt={Project.title} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MOBILE USER INTERFACES
          </div>
          <Project Project={Project1} />
          <Project Project={Project2} />

          {/* ROW 2 */}
          <Project Project={Project3} />
          <Project Project={Project4} />
          <Project Project={Project5} />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            WEB USER INTERFACES
          </div>
          <Project Project={Project6} />
          <Project Project={Project7} />

          {/* ROW 2 */}
          <Project Project={Project8} />
          <Project Project={Project9} />
          <Project Project={Project10} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
