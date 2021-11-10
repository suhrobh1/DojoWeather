function acceptCookies(id){
  var cookiesDiv=document.getElementById(id);
  var borderStyle = document.getElementById('cookieSection');
  cookiesDiv.innerHTML = "";
  borderStyle.style.border = "none";
}

const tempReadings = [
  {temp: 24, id:'todayDayTemp'}, 
  {temp: 18, id :'todayNightTemp'}, 
  {temp: 27, id :'tomorroDayTemp'}, 
  {temp: 19, id :'tomorrowNightTemp'}, 
  {temp: 21, id : 'friDayTemp'}, 
  {temp: 16, id :'friNightTemp'},
  {temp: 26, id : 'satDayTemp'},
  {temp: 21, id: 'satNightTemp'}];


function pickUnit(value){
  if(value==="F"){
    for (let i of tempReadings){
    var temperatureValue=document.getElementById(i.id);
    temperatureValue.innerText = (i.temp) * 9/5 + 32 + '\u00B0';
    }
  }else{
    for (let i of tempReadings){
    var temperatureValue=document.getElementById(i.id);
    temperatureValue.innerText = (i.temp) + '\u00B0';
    }
  }
}



function changeCity(id, id1){
  var city = document.getElementById(id);
  var cityCurrent = document.getElementById(id1);
  if(id=="burbank"){
    cityCurrent.innerText = "Burbank";
  }else if(id=="chicago"){
     cityCurrent.innerText = "Chicago";
   }else{
     cityCurrent.innerText = "Dallas";
   }
  alert("Loading weather report");
}