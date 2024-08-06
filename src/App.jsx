import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import HoverSound from './assets/sounds/vk_Focus.wav';
import ClickSound from './assets/sounds/vk_Select.wav';
import NotifySound from './assets/sounds/NotifyPopup.wav';
import BladeOpenSound from './assets/sounds/BladeOpen.wav';
import BladeSwitch1 from './assets/sounds/BladeSwitch_1.wav';
import BladeSwitch2 from './assets/sounds/BladeSwitch_2.wav';
import BladeSwitch3 from './assets/sounds/BladeSwitch_3.wav';
import BlipHoverSound from './assets/sounds/snd_channelup.wav';
import BlipClickSound from './assets/sounds/snd_channeldown.wav';
import NavHoverSound from './assets/sounds/btn_backG.wav';
import TimelineSound from './assets/sounds/tab_Switch.wav';

function App() {
  const hoverSound = useRef(new Audio(HoverSound));
  const clickSound = useRef(new Audio(ClickSound));
  const notifySound = useRef(new Audio(NotifySound));
  const bladeOpenSound = useRef(new Audio(BladeOpenSound));
  const bladeSwitch1 = useRef(new Audio(BladeSwitch1));
  const bladeSwitch2 = useRef(new Audio(BladeSwitch2));
  const bladeSwitch3 = useRef(new Audio(BladeSwitch3));
  const blipHoverSound = useRef(new Audio(BlipHoverSound));
  const blipClickSound = useRef(new Audio(BlipClickSound));
  const navHoverSound = useRef(new Audio(NavHoverSound));
  const timelineSound = useRef(new Audio(TimelineSound));
  const [soundEnabled, setSoundEnabled] = useState(null); // null means user has not made a choice yet

  // Set volume for each sound
  hoverSound.current.volume = 0.2;
  clickSound.current.volume = 0.2;
  notifySound.current.volume = 0.2;
  bladeOpenSound.current.volume = 0.2;
  bladeSwitch1.current.volume = 0.2;
  bladeSwitch2.current.volume = 0.2;
  bladeSwitch3.current.volume = 0.2;
  blipHoverSound.current.volume = 0.2;
  blipClickSound.current.volume = 0.2;
  navHoverSound.current.volume = 0.2;
  timelineSound.current.volume = 0.2;

  const playSound = (sound) => {
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    } 
  };

  useEffect(() => {
    if (soundEnabled) {
      playSound(notifySound.current);
    }
  }, [soundEnabled]);

  const handleUserChoice = (choice) => {
    setSoundEnabled(choice);
  };

  return (
    <main>
      <AnimatePresence>
        {soundEnabled === null && (
          <motion.div 
            className="fixed w-full h-screen flex flex-col justify-center items-center z-20"
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: -270, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-b from-alien_green shadow-lg shadow-gray-400 text-dark_gray border-solid border-alien_green border-2 p-6 w-80 h-16 rounded-full flex flex-row justify-center items-center gap-3 text-center">
              <h2 className="font-mussels-bold text-md">Enable sound? 🔊</h2>
              <button 
                className="text-xl font-mussels w-12 flex justify-center items-center rounded-lg shadow-lg bg-dark_gray text-alien_green p-2 cursor-pointer hover:scale-105 ease-in duration-200" 
                onClick={() => handleUserChoice(true)}
              >
                <TiTick />
              </button>
              <button 
                className="text-xl font-mussels w-12 flex justify-center items-center rounded-lg shadow-lg bg-dark_gray text-alien_green p-2 cursor-pointer hover:scale-105 ease-in duration-200" 
                onClick={() => handleUserChoice(false)}
              >
                <TiTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SideNav 
        soundEnabled={soundEnabled} 
        playSound={playSound} 
        bladeOpenSound={bladeOpenSound.current} 
        bladeSwitch1={bladeSwitch1.current}
        bladeSwitch2={bladeSwitch2.current}
        bladeSwitch3={bladeSwitch3.current}
        navHoverSound={navHoverSound.current}
      />
      <Main 
        soundEnabled={soundEnabled} 
        playSound={playSound} 
        hoverSound={hoverSound.current} 
        clickSound={clickSound.current} 
      />
      <Work 
        soundEnabled={soundEnabled} 
        playSound={playSound} 
        timelineSound={timelineSound.current}
      />
      <Projects 
        soundEnabled={soundEnabled} 
        playSound={playSound} 
        blipHoverSound={blipHoverSound.current} 
        blipClickSound={blipClickSound.current}
      />
      <AboutMe />
      <Contact 
        soundEnabled={soundEnabled} 
        playSound={playSound} 
        blipHoverSound={blipHoverSound.current} 
        blipClickSound={blipClickSound.current}
      />
    </main>
  )
}

export default App;
