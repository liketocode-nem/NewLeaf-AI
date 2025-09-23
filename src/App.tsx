import './App.css'
import Aurora from './components/Aurora';
import RotatingText from './components/RotatingText'
import { LayoutGroup, motion } from 'motion/react';


function App() {

  return (
    <>
      <div className='w-full h-screen bg-black relative '>
         <Aurora
           colorStops={["#8dfcbb", "#2be256", "#8dfcf3"]}
           blend={1}
           amplitude={.6}
           speed={.5}
         />
        <LayoutGroup>
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen ">
            <motion.h1 layout className="2xl:text-8xl font-medium text-white   sans">
              Grow your business with <br /> streamlined {' '}
      
              <RotatingText
                texts={['Automation', 'Outreach','Efficiency', 'Email', 'Workflow', 'Support', 'Websites']}
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
      <div className="w-full h-screen bg-black">

      </div>
    </>
  )
}

export default App
