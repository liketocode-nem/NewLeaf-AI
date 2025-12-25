import "./App.css";
import Aurora from "./components/Aurora";
import RotatingText from "./components/RotatingText";
import { LayoutGroup, motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiOpenai } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { SiClaude } from "react-icons/si";
import {
  FaSalesforce,
  FaHubspot,
  FaShopify,
  FaMailchimp,
  FaSlack,
  FaClock,
} from "react-icons/fa6";
import { FaRedo } from "react-icons/fa";
import { SiN8N, SiGooglecalendar, SiFirebase, SiGmail } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import LogoLoop from "./components/LogoLoop";
import { IconContext } from "react-icons";
import ScrollReveal from "./components/ScrollReveal";
import { IoPerson } from "react-icons/io5";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Briefcase, MailIcon, User } from "lucide-react";

const techLogos = [
  { node: <FaSalesforce />, title: "Salesforce" },
  { node: <FaHubspot />, title: "Hubspot" },
  { node: <FaShopify />, title: "Shopfiy" },
  { node: <FaMailchimp />, title: "Mailchimp" },
  { node: <FaSlack />, title: "Slack" },
  { node: <SiN8N />, title: "N8N" },
  { node: <SiGooglecalendar />, title: "GoogleCalender" },
  { node: <SiFirebase />, title: "Firebase" },
  { node: <SiGmail />, title: "Gmail" },
  { node: <SiOpenai />, title: "Openai" },
  { node: <RiGeminiFill />, title: "Gemini" },
  { node: <SiClaude />, title: "Claud" },
];

function App() {
  const lenisRef = useRef<LenisRef>(null);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const heroView = useInView(heroRef, { amount: 0.5 });
  const servicesView = useInView(servicesRef, { amount: 0.5 });
  const testimonialView = useInView(testimonialRef, { amount: 0.5 });
  const aboutView = useInView(aboutRef, { amount: 0.5 });
  const contactView = useInView(contactRef, { amount: 0.5 });

  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    if (heroView) {
      setActiveSection("hero");
    } else if (servicesView) {
      setActiveSection("services");
    } else if (testimonialView) {
      setActiveSection("testimonial");
    } else if (aboutView) {
      setActiveSection("about");
    } else if (contactView) {
      setActiveSection("contact");
    }
  }, [heroView, servicesView, testimonialView, aboutView, contactView]);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <nav
        className={`w-full xl:h-24 fixed left-0 flex justify-center items-center xl:p-10 p-5 z-50 clash`}
      >
        <div className="py-4 px-5 xl:w-6/12 lg:w-7/12 md:w-8/12 w-full text-xs lg:text-xl md:text-base  sm:mt-6 text-white flex justify-between items-center font-black bg-white/10 rounded-4xl backdrop-blur-sm border border-white/35 shadow-lg">
          <a href="#hero" className="xl:text-2xl mr-2">
            NewLeaf/AI
          </a>
          <div className="flex md:gap-8 gap-2">
            <a
              href="#services"
              className={`font-normal ${
                activeSection == "services"
                  ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300"
                  : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300"
              }`}
            >
              Services
            </a>
            <a
              href="#testimonial"
              className={`font-normal ${
                activeSection == "testimonial"
                  ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300"
                  : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300"
              }`}
            >
              Testimonial
            </a>
            <a
              href="#about"
              className={`font-normal ${
                activeSection == "about"
                  ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300"
                  : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300"
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`font-normal ${
                activeSection == "contact"
                  ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300"
                  : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div
        className="w-full h-screen bg-zinc-950 relative"
        ref={heroRef}
        id="hero"
      >
        <Aurora
          colorStops={["#8dfcbb", "#2be256", "#8dfcf3"]}
          blend={1}
          amplitude={0.6}
          speed={0.3}
        />
        <LayoutGroup>
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen">
            <motion.h1
              layout
              className="xl:text-8xl lg:text-7xl md:text-6xl text-[7vw] font-medium text-white clash relatived p-5 "
            >
              Grow your business with{"          "} <br /> streamlined{" "}
              <RotatingText
                texts={[
                  "Automation",
                  "Outreach",
                  "Efficiency",
                  "Email",
                  "Workflow",
                  "Support",
                  "Websites",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3  primary-bg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg inline-flex items-center  flex justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.h1>
          </div>
        </LayoutGroup>
      </div>
      <div
        className="w-full flex justify-center xl:px-8 lg:px-44 px-10 md:scroll-mt-50 md:h-auto h-screen py-1"
        ref={servicesRef}
        id="services"
      >
        <div className="bg-zinc-950 text-white poppins md:h-120 flex justify-center gap-16 ">
          <div className="xl:w-150 lg:w-110 md:w-85 flex flex-col justify-center ">
            <div>
              <h2 className="lg:text-7xl md:text-6xl text-5xl mb-6 underline primary-underline font-medium clash md:text-start text-center ">
                Services
              </h2>
              <p className="text-white font-regular lg:text-lg/tight md:text-start text-center ">
                NewLeafAI creates AI-powered automation that helps eliminate
                time-consuming, repetitive tasks so you can stop focusing on the
                small stuff and get back to what matters most — growing your
                business.
              </p>
            </div>
          </div>
          {/*bento container*/}
          <div className="xl:w-150 lg:w-110 md:w-85 h-full md:flex md:justify-start md:items-center hidden">
            {/*grid maker*/}
            <div className="md:w-full md:h-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento">
                <div className="pl-7 pr-2 py-5">
                  <h2 className="xl:text-3xl lg:text-2xl font-medium clash flex items-center">
                    <FaRobot className="inline mr-2 primary" />
                    Chatbots
                  </h2>
                  <ul className="xl:text-base lg:text-sm text-xs font-light list-disc">
                    <li className="my-2">Website chatbot to retain visitors</li>
                    <li className="my-2">
                      Internal chatbot to assist employees
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento">
                <div className="pl-7 pr-2 py-5">
                  <h2 className="xl:text-3xl lg:text-2xl font-medium clash flex items-center ">
                    <IoPerson className="inline mr-2 primary" />
                    Leads
                  </h2>
                  <ul className="xl:text-base lg:text-sm text-xs font-light list-disc">
                    <li className="my-2">Automatic text & email response</li>
                    <li className="my-2">Appointment booking</li>
                    <li className="my-2">Reminder & reschedule handling</li>
                  </ul>
                </div>
              </div>
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento">
                <div className="pl-7 pr-2 py-5">
                  <h2 className="xl:text-3xl lg:text-2xl font-medium clash flex items-center">
                    <FaClock className="inline mr-2 primary" />
                    Time
                  </h2>
                  <ul className="xl:text-base lg:text-sm text-xs font-light list-disc">
                    <li className="my-2">Call summaries & transcripts</li>
                    <li className="my-2">Staff updates & scheduling</li>
                  </ul>
                </div>
              </div>
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento">
                <div className="pl-7 pr-2 py-5">
                  <h2 className="xl:text-3xl lg:text-2xl font-medium clash flex items-center">
                    <FaRedo className="inline mr-2 primary" />
                    Retention
                  </h2>
                  <ul className="xl:text-base lg:text-sm text-xs font-light list-disc">
                    <li className="my-2">Reactivation campaigns</li>
                    <li className="my-2">Customer satisfaction checks</li>
                    <li className="my-2">Post-service follow-ups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          marginBottom: "10rem",
        }}
        className="mt-48"
      >
        <IconContext.Provider value={{ color: "white" }}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={80}
            gap={70}
            pauseOnHover
            ariaLabel="Possible integrations"
          />
        </IconContext.Provider>
      </div>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={3}
        blurStrength={70}
        containerClassName="text-white m-auto xl:w-300 lg:w-250 md:w-185 mb-[10rem] md:text-2xl p-10 text-base"
      >
        We integrate with{" "}
        <span className="primary-underline underline">any platform</span>.
        Whether you use Salesforce or Hubspot, Slack or Gmail, to name a few,{" "}
        <span className="primary-underline underline">we have you covered</span>
        .
      </ScrollReveal>
      <section
        className="w-screen mb-[10rem] flex justify-center md:scroll-mt-50 scroll-mt-30 md:h-auto h-screen"
        ref={testimonialRef}
        id="testimonial"
      >
        <div className="bg-zinc-950 text-white poppins md:h-120 md:flex md:justify-center md:gap-16 ">
          <div className="xl:w-150 lg:w-110 md:w-85 flex flex-col lg:justify-center text-9xl items-center md:mb-0 mb-6">
            <img src="GreenPaperProductsLogoCrop.svg" width={250} alt="" />
            <p className="text-white font-regular md:text-lg text-center text-sm w-[250px] mt-4">
              Aaron Saks <br />
              <span className="text-zinc-300">CEO Green Paper Products</span>
            </p>
          </div>
          <div className="xl:w-150 lg:w-110 md:w-85 h-full lg:flex lg:justify-start lg:items-center">
            <div>
              <h2 className="lg:text-7xl md:text-6xl text-4xl mb-6 underline primary-underline font-medium clash md:text-start text-center">
                Testimonial
              </h2>
              <p className="text-white font-regular lg:text-lg/tight md:text-start text-center md:p-0 px-10 text-sm mb-6">
                NewLeafAI creates AI-powered automation that aim to eliminate
                time consuming, annoying, and expensive tasks so you can stop
                focusing on the small stuff and get back to what matters most -
                growing your business. <br />
                <br />
                From creating a specialized AI model that can help costumers via
                email and a website chat bot, to automating your outreach and
                follow-up emails, NewLeafAI creates custom solutions that fit
                your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-screen mb-[15rem] text-white flex justify-center items-center md:scroll-mt-50 scroll-mt-30 md:h-auto h-1/2"
        ref={aboutRef}
        id="about"
      >
        <div className="xl:w-230 lg:w-250 md:w-170 md:text-center">
          <h2 className="lg:text-7xl md:text-6xl text-4xl mb-6 underline primary-underline font-medium clash text-center">
            About
          </h2>
          <p className="text-white m-auto xl:w-300 lg:w-250 md:w-185 md:text-2xl p-10 text-base leading-loose tracking-wider">
            NextLeafAI is a Cleveland-based consultancy specializing in AI
            automation. We work hand-in-hand with clients to create custom
            integrated solutions.
          </p>
        </div>
      </section>
      <section
        className="w-screen pb-[10rem] text-white flex justify-center md:scroll-mt-40 scroll-mt-30 md:h-auto h-screen"
        ref={contactRef}
        id="contact"
      >
        <div className="w-100 text-center">
          <h2 className="lg:text-7xl md:text-6xl text-4xl md:mb-6 underline primary-underline font-medium clash">
            Contact
          </h2>
          <p className="text-lg italic m-6">Lets talk!</p>
          <div className="grid gap-4 px-10">
            <InputGroup>
              <InputGroupInput placeholder="name" />
              <InputGroupAddon>
                <User />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="company" />
              <InputGroupAddon>
                <Briefcase />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="email" />
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupTextarea placeholder="message" />
              <InputGroupAddon align="block-end">
                <InputGroupButton
                  className="ml-auto primary-bg text-zinc-950  hover:!bg-green-500 hover:scale-105"
                  size="sm"
                  variant="default"
                >
                  Send
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <p className="text-start">
              To:{" "}
              <a href="mailto:nextleafai@gmail.com">
                <span className="primary underline">nextleafai</span>@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
