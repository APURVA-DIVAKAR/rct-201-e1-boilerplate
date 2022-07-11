import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import useClock from "./hooks/useClock";



function App() {
  const props = useClock();
 
  return (
    <div className="App">
     
      {/* Clock */}
      <Clock hour= {props.hour} minute= {props.minute} second= {props.second}/>
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
