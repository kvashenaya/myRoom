// let myName = prompt("Enter your name:")
// document.getElementById("myName").innerHTML = myName;

// function getTemp(){
//   let temp = document.getElementById("temp").innerHTML;

//   if(temp <= 10){
//       console.log("Temperature is too low");
//   }
//   else if(temp >= 40){
//       console.log("Temperature is too high");
//   }
//   else{
//       console.log("Temperature is ok");
//   }
// }

// function getHum(){
//   let hum = document.getElementById("hum").innerHTML;

//   if(hum <= 35){
//       console.log("Humidity is too low");
//   }
//   else if(hum >= 60){
//       console.log("Humidity is too high");
//   }
//   else{
//       console.log("Humidity is ok");
//   }
// }

//Функція для календаря
function startTime(){
  let today = new Date();
  let sec = today.getSeconds();
  let min = today.getMinutes();
  let hour = today.getHours();
  let month = today.getMonth();
  let day=today.getDate(); 
  let wday=today.getDay()-1;

  //оновлена версія з цифрою 0 перед числом, що менше 10
  if(sec<10)
  {
    sec="0"+sec;
  }
  if(min<10)
  {
    min="0"+min;
  }
  if(hour<10)
  {
    hour="0"+hour;
  }

  document.getElementById("month").innerHTML = month;
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById("day").innerHTML = day;

  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  document.getElementById("wday").innerHTML = days[wday];
  
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById("month").innerHTML = months[month];

  setTimeout(startTime, 1000); //кожної секунди оновлення даних календаря
};



 var counter=0; //Винесення змінної counter за межі функції, адже необхідно,
                //щоб змінна не онулювалася (якщо натискаємо на кнопку - спрацьовує функція)
                //і змінна знову ставала би = 0, неможливо б було відслідковувати кількість натискань
 function changeColor() {
  counter++;
  let elemColor = document.getElementById("chColor");
switch(counter){
  case 1: 
    elemColor.style.color='LemonChiffon';
    break;
  case 2: 
    elemColor.style.color='Tan';
    break;
  case 3: 
    elemColor.style.color='Turquoise';
    break;
  case 4: 
    elemColor.style.color='Red';
    break;
  case 5: 
    elemColor.style.color='Green';
    counter=0;
    break;
 }          

 }

//Функція віднімання певного значення (h) від індикатора поливу квітки
 var hum=100; //Винесення змінної hum за межі функції, так само як і в минулому приклад
 function Flower(h){
 hum-=h;
 document.getElementById("flower").value=hum;
   if(hum<20){
      alert("Полий квітку!!!");
   }
 }
  