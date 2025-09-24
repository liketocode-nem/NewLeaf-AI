import "./App.css";
import Aurora from "./components/Aurora";
import RotatingText from "./components/RotatingText";
import { LayoutGroup, motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="w-full h-screen bg-zinc-950 relative ">
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
              className="xl:text-8xl font-medium text-white clash"
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
      <div className="w-full bg-zinc-950 text-white poppins xl:h-120 xl:grid xl:grid-cols-2 xl:gap-16 ">
        <div className="w-full h-full xl:flex xl:flex-col xl:justify-center xl:items-end">
          <div>
            <h2 className="xl:text-6xl xl:mb-6 underline primary-underline font-medium clash ">
              Services
            </h2>
            <p className="text-white font-regular xl:text-md/tight w-120 ">
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
        <div className="w-full h-full xl:flex xl:justify-start xl:items-center">
          <div className="xl:w-10/12 xl:h-full  xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:p-8  xl:gap-4">
            <div className="border border-zinc-800 rounded-3xl w-full h-full"></div>
            <div className="border border-zinc-800 rounded-3xl w-full h-full"></div>
            <div className="border border-zinc-800 rounded-3xl w-full h-full"></div>
            <div className="border border-zinc-800 rounded-3xl w-full h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
