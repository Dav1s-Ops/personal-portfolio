import { useState, useRef, useEffect } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import HoverSound from './assets/sounds/vk_Focus.wav'
import ClickSound from './assets/sounds/vk_Select.wav'
import NotifySound from './assets/sounds/NotifyPopup.wav'
import BladeOpenSound from './assets/sounds/BladeOpen.wav'
import BladeSwitch1 from './assets/sounds/BladeSwitch_1.wav'
import BladeSwitch2 from './assets/sounds/BladeSwitch_2.wav'
import BladeSwitch3 from './assets/sounds/BladeSwitch_3.wav'
import BlipHoverSound from './assets/sounds/snd_channelup.wav'
import BlipClickSound from './assets/sounds/snd_channeldown.wav'
import NavHoverSound from './assets/sounds/btn_backG.wav'
import TimelineSound from './assets/sounds/tab_Switch.wav'

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
  hoverSound.current.volume = 0.25;
  clickSound.current.volume = 0.25;
  notifySound.current.volume = 0.25;
  bladeOpenSound.current.volume = 0.2;
  bladeSwitch1.current.volume = 0.2;
  bladeSwitch2.current.volume = 0.2;
  bladeSwitch3.current.volume = 0.2;
  blipHoverSound.current.volume = 0.25;
  blipClickSound.current.volume = 0.25;
  navHoverSound.current.volume = 0.25;
  timelineSound.current.volume = 0.25;

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
      {soundEnabled === null && (
        <div className="font-mussels fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <div className="bg-gradient-to-t to-dark_gray from-alien_green shadow-lg shadow-gray-400 text-white border-solid border-alien_green border-2 p-6 w-60 flex flex-col justify-center items-center gap-3 rounded-lg text-center">
            <h2 className="text-lg mb-4">Enable sound?</h2>
            <button 
              className="w-[100%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green m-2 p-2 cursor-pointer hover:scale-105 ease-in duration-200" 
              onClick={() => handleUserChoice(true)}
            >
              Yes
            </button>
            <button 
              className="w-[100%] flex justify-center items-center rounded-full shadow-lg bg-dark_gray text-alien_green m-2 p-2 cursor-pointer hover:scale-105 ease-in duration-200" 
              onClick={() => handleUserChoice(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
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

export default App
