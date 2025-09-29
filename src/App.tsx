import "./App.css";
import Aurora from "./components/Aurora";
import RotatingText from "./components/RotatingText";
import { LayoutGroup, motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from 'motion/react'
import {useInView} from "motion/react"
import { useEffect, useRef, useState } from "react";
import { FaSalesforce,FaHubspot,FaShopify,FaMailchimp,FaSlack } from "react-icons/fa6";
import { SiN8N,SiGooglecalendar,SiFirebase,SiGmail } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa6";
import LogoLoop from './components/LogoLoop';
import { IconContext } from "react-icons";
import { HiLightBulb } from 'react-icons/hi';
import { LuTextCursor } from 'react-icons/lu';
import { BsChatLeftFill } from 'react-icons/bs';
import ScrollReveal from './components/ScrollReveal';
import { log } from "console";


const techLogos = [
  { node: <FaSalesforce />, title: "Salesforce", },
  { node: <FaHubspot />, title: "Hubspot",},
  { node: <FaShopify />, title: "Shopfiy",},
  { node: <FaMailchimp />, title: "Mailchimp",},
  { node: <FaSlack />, title: "Slack",},
  { node: <SiN8N />, title: "N8N",},
  { node: <SiGooglecalendar />, title: "GoogleCalender",},
  { node: <SiFirebase />, title: "Firebase",},
  { node: <SiGmail />, title: "Gmail",},
  { node: <FaGoogleDrive />, title: "GoogleDrive  ",},

];


function App() {
  const lenisRef = useRef<LenisRef>(null);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const heroView = useInView(heroRef,{amount:.5});
  const servicesView = useInView(servicesRef,{amount:.5});
  const testimonialView = useInView(testimonialRef,{amount:.5});
  const aboutView = useInView(aboutRef,{amount:.5});
  const contactView = useInView(contactRef,{amount:.5});

  const [activeSection,setActiveSection] = useState<string>("hero")

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
      setActiveSection("hero")
    }
    else if (servicesView) {
      setActiveSection("services")
    }
    else if (testimonialView) {
      setActiveSection("testimonial")
    }
    else if (aboutView) {
      setActiveSection("about")
    }
    else if (contactView) {
      setActiveSection("contact")
    }
  
  }, [heroView,servicesView,testimonialView,aboutView,contactView])
  

  return (
    <>
         <nav
        className={`w-full xl:h-24 fixed top-0 left-0 flex justify-center items-center xl:p-10 z-50 clash`}

      >
        <div className="py-4 px-5 w-6/12 xl:text-xl text-white flex justify-between items-center font-black bg-white/10 rounded-4xl backdrop-blur-md border border-white/35 shadow-lg">
          <a href="#hero" className="xl:text-2xl">NewLeaf/AI</a>
          <div className="flex gap-8 ">
            <a href="#services" className={`font-normal${activeSection == "services" ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300" : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300" }`}>Services</a>
            <a href="#testimonial" className={`font-normal${activeSection == "testimonial" ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300"  : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300"}`}>Testimonial</a>
            <a href="#about" className={`font-normal${activeSection == "about" ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300" : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300" }`}>About</a>
            <a href="#contact" className={`font-normal${activeSection == "contact" ? " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:primary-bg after:transition-all after:duration-300" : " after:content-[''] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:primary-bg after:transition-all after:duration-300" }`}>Contact</a>
          </div>
        </div>
      </nav>

      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <div className="w-full h-screen bg-zinc-950 relative" ref={heroRef} id="hero">
        <Aurora
          colorStops={["#8dfcbb", "#2be256", "#8dfcf3"]}
          blend={1}
          amplitude={0.6}
          speed={0.3}
        />
        <LayoutGroup>
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen ">
            <motion.h1
              layout
              className="xl:text-8xl font-medium text-white clash relative"
            >
              Grow your business with <br /> streamlined{" "}
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
      <div className="w-full flex justify-center xl:p-8" ref={servicesRef} id="services">
        <div className="bg-zinc-950 text-white poppins xl:h-120 xl:flex xl:justify-center xl:gap-16 ">
            <div className="xl:w-150 flex flex-col xl:justify-center ">
              <div>
                <h2 className="xl:text-7xl xl:mb-6 underline primary-underline font-medium clash ">
                  Services
                </h2>
                <p className="text-white font-regular xl:text-lg/tight">
                  NewLeafAI creates AI-powered automation that aim to eliminate time
                  consuming, annoying, and expensive tasks so you can stop focusing
                  on the small stuff and get back to what matters most - growing
                  your business. <br />
                  <br />
                  From creating a specialized AI model that can help costumers via
                  email and a website chat bot, to automating your outreach and
                  follow-up emails, NewLeafAI creates custom solutions that fit your
                  specific needs.
                </p>
              </div>
            </div>
          <div className="xl:w-150 h-full xl:flex xl:justify-start xl:items-center">
            <div className="xl:w-full xl:h-full  xl:grid xl:grid-cols-2 xl:grid-rows-2   xl:gap-4">
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento"></div>
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento"></div>
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento"></div>
              <div className="border border-zinc-800 rounded-3xl w-full h-full bento"></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className="xl:mt-48">
        <IconContext.Provider value={{ color: "white"}}>

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
        baseRotation={2}
        blurStrength={70}
        containerClassName="text-white m-auto w-300 h-200" 
      >
          We integrate with <span className="primary-underline underline">whatever platforms you use</span>. Whether you are a business who wants automations
          with salesforce or hubspot, slack or gmail, or any other software not listed, <span className="primary-underline underline">we have you covered</span>. 

      </ScrollReveal>
      <section className="h-screen w-screen" ref={testimonialRef} id="testimonial"></section>
    </>
  );
}

export default App;
