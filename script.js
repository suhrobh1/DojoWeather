function acceptCookies(id){
  var cookiesDiv=document.getElementById(id);
  var borderStyle = document.getElementById('cookieSection');
  cookiesDiv.innerHTML = "";
  borderStyle.style.border = "none";
}

const tempReadings = [24, 18, 27, 19, 21, 16, 26, 21];
function pickUnit(id, id1, id2, id3, id4, id5, id6, id7, id8){

  var temperatureValue=document.getElementById(id);
  var temperatureValue1=document.getElementById(id1);
  var temperatureValue2=document.getElementById(id2);
  var temperatureValue3=document.getElementById(id3);
  var temperatureValue4=document.getElementById(id4);
  var temperatureValue5=document.getElementById(id5);
  var temperatureValue6=document.getElementById(id6);
  var temperatureValue7=document.getElementById(id7);
  var temperatureValue8=document.getElementById(id8);
  
  
  temperatureValue.innerText = (tempReadings[0]) * 9/5 + 32 + '\u00B0';
  temperatureValue1.innerText = (tempReadings[1]) * 9/5 + 32 + '\u00B0';
  temperatureValue2.innerText = (tempReadings[2]) * 9/5 + 32 + '\u00B0';
  temperatureValue3.innerText = (tempReadings[3]) * 9/5 + 32 + '\u00B0';
  temperatureValue4.innerText = (tempReadings[4]) * 9/5 + 32 + '\u00B0';
  temperatureValue5.innerText = (tempReadings[5]) * 9/5 + 32 + '\u00B0';
  temperatureValue6.innerText = (tempReadings[6]) * 9/5 + 32 + '\u00B0';
  temperatureValue7.innerText = (tempReadings[7]) * 9/5 + 32 + '\u00B0';
  temperatureValue8.innerText = (tempReadings[8]) * 9/5 + 32 + '\u00B0';
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