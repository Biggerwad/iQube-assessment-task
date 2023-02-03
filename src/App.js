import React from 'react';
import { useState } from 'react';
import './App.css';
import Billing from './components/billing';
import Complete from './components/complete';
import Confirm from './components/confirm';
import Personal from './components/personal';

function App() {
  const [stage, setStage] = useState("personal")


  return (
    <section className='container'>
      <div className='trackers'>
        {/* I am handling the stage here, this is the switching case when a user clicks next. 
        and on clicking return home, it takes them back to personal page*/}
        {
          stage !== "complete" &&
          <>
            <h2>Complete your Purchase</h2>
            <ul>
              <li className={stage === "personal" && "active-underline"}>Personal</li>
              <li className={stage === "billing" && "active-underline"}>Billing</li>
              <li className={stage === "confirm" && "active-underline"}>Confirm</li>
            </ul>
          </>
        }
      </div>
      <div>
        {stage === "personal" ? <Personal onClick={() => {
          setStage(() => "billing")
        }} />
          : stage === "complete" ? <Complete onClick={()=>{
            setStage(() => "personal")
          }} />
            : stage === "confirm" ? <Confirm onClick={() => {
              setStage(() => "complete")
            }} />
              : stage === "billing" && <Billing onClick={() => {
                setStage(() => "confirm")
              }} />
              
        }
      </div>
    </section>
  );
}

export default App;