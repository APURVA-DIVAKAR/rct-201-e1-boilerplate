
// type props = {
//   time : number;
// }
import React,{useState} from 'react'

  
const useClock = () => {
  // TODO
  // refer readme.md for what to return
  // let time = new Date().toLocaleTimeString();
  const d = new Date();
  let minute = d.getMinutes();
  let hour = d.getHours();
  let second = d.getSeconds();
  
  const [hours,sethour] = useState(hour);
  const [minutes,setMinute] = useState(minute);
  const [seconds,setSecond] = useState(second);

  const updateTime = () =>{
    // time = new Date().toLocaleTimeString()
    // setTime(time);
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    setMinute(minute);
    setSecond(second);
    sethour(hour);
    
  }
  React.useEffect(()=>{
    setInterval(()=>{
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    setMinute(minute);
    setSecond(second);
    sethour(hour);
    },1000)
  },[])
  // console.log(hour,minute,second)

  return {hour,second,minute}
};

export default useClock;
