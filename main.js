(function chrono(){
  
  function checkTime(time){
    return (time < 10)? "0" + time:time;
  } 
  
  function startTime(){
    
    let today = new Date(),
    h = checkTime(today.getHours()), 
    m = checkTime(today.getMinutes()),
    s = checkTime(today.getSeconds());
    
    document.querySelector('#clock').innerHTML = `${h}:${m}:${s}`;
    let t = setTimeout(()=>{
      startTime();
    },500);
    
    
  } 
  startTime();
})();

