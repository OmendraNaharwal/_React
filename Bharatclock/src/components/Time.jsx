import { use, useEffect, useState } from "react";

function Time(){

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  
  return (  
    <p>This is the current date and time: {time.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })} - {time.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
  )
}
export default Time;