import "./App.css";
import CountingDown from "./CountDown/CountingDown";
import React, { useState } from 'react';
import Clock from './Clock';



function App() {
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle(toggle => !toggle);
  return (
        <div>
            {toggle &&
              <div>
                  <button className="buttonToggle" type="button" onClick={toggleChecked}>
                    Horloge
                  </button> 
                  <CountingDown />
              </div>
            }
            {!toggle &&
              <div>
                  <button className="buttonToggle" type="button" onClick={toggleChecked}>
                    Compte à rebours
                  </button>
                  <Clock />
              </div>
            }
        </div>
  );
}

export default App;



// export default function App() {
  
//   return (
     
//   );
// }