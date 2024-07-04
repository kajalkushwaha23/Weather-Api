
const apiKey="5b05493a24bc9e6da9f365068f62ac67";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".cloud_icon");
const BackgroundVideo = document.querySelector("#background-video");
const WeathType = document.querySelector(".weath_type");
   
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

console.log(data);


document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
weatherIcon.src="images/cloudyy.png";
BackgroundVideo.src="cloudy.mp4";
WeathType.textContent = "Cloudy";


}
else if(data.weather[0].main == "Clear"){
weatherIcon.src="images/sun.png";
BackgroundVideo.src="clear.mp4";
WeathType.textContent = "Clear";

}
else  if(data.weather[0].main == "Rain"){
weatherIcon.src="images/heavy-rain.png";
BackgroundVideo.src="rainm   99jk.mp4";
WeathType.textContent = "Raining";


} 
else if(data.weather[0].main == "Drizzle"){
weatherIcon.src="images/cloudy.png";
BackgroundVideo.src="drizzer.mp4";
WeathType.textContent = "Drizzle";
}
    }
   

}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);

})


