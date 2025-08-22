function Time(){
  return (  
    <p>This is the current date and time: {new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })} - {new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
  )
}
export default Time;