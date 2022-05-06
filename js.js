// let myName = prompt("Enter your name:")
// document.getElementById("myName").innerHTML = myName;

function getTemp(){
  let temp = document.getElementById("temp").innerHTML;

  if(temp <= 10){
      console.log("Temperature is too low");
  }
  else if(temp >= 40){
      console.log("Temperature is too high");
  }
  else{
      console.log("Temperature is ok");
  }
}

function getHum(){
  let hum = document.getElementById("hum").innerHTML;

  if(hum <= 35){
      console.log("Humidity is too low");
  }
  else if(hum >= 60){
      console.log("Humidity is too high");
  }
  else{
      console.log("Humidity is ok");
  }
}

getTemp();
getHum();

function startTime(){
  let today = new Date();
  let sec = today.getSeconds();
  let min = today.getMinutes();
  let hour = today.getHours();
  let month = today.getMonth();
  let day=today.getDate(); 
  //let wday=today.getDay()-1; //день тижня

  document.getElementById("month").innerHTML = month;
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById("day").innerHTML = day;
  //let reload = setTimeout(startTime, 1000);

  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  document.getElementById("day").innerHTML = days[day];
  
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById("month").innerHTML = months[month];
}



