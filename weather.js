const apikey="cbb5b1ec96f31a98c7d38f5664ed7698";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".card1 .searchcard .search");
const btn=document.querySelector(".card1 .button1");

async function checkwheather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
   if(data.name==undefined){
    document.querySelector(".city").innerHTML="enter valid city name";
    document.querySelector(".temp").innerHTML="--";
   }
   else{
    document.querySelector(".card1 .city").innerHTML=data.name;
    document.querySelector(".card1 .temp").innerHTML=Math.round(data.main.temp)+" ° Celcius";
	
   }
}
btn.onclick=function(){
    checkwheather(searchbox.value);
}