"use strict";
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let main = document.querySelector('.main');
let hourly = document.querySelector('.hourly');
let err = document.querySelector('.err__info');
let today = new Date().toLocaleDateString();

searchButton.addEventListener('click', (e)=>{
    if(search.value === '') alert('Input a city name!');
    else
    {
        main.hidden = false;
        hourly.hidden = false;
        err.hidden = true;
        getWeather();
    }
})
async function getWeather() {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=4632a6f42d53c3e881705a5e58531546&units=metric`);
    let weather = await response.json();
    if(weather.cod === '404')
    {
        main.hidden = true;
        hourly.hidden = true;
        err.hidden = false;
    }
    else
    {
        showMain(weather);
        response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude={part}&appid=4632a6f42d53c3e881705a5e58531546&units=metric`);
        weather = await response.json();
        showHourly(weather);
    }
}
function showMain(weather)
{
    currCity.innerText = weather.name;
    forecastMain.innerText = weather.weather[0].main;
    currIco.src = weathMainPic.src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weather.weather[0].icon}.png`;
    currTemperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    minT.innerHTML = Math.round(weather.main.temp_min) + '&deg;C';
    maxT.innerHTML = Math.round(weather.main.temp_max) + '&deg;C';
    wind.innerText = weather.wind.speed;
}
        
function showHourly(weather)
{
    //console.log('weather in showHourly', weather);
    let date = new Date();
    //console.log('+weather.timezone_offset-7200', +weather.timezone_offset-7200);
    date.setUTCSeconds(+weather.timezone_offset-7200);
    //console.log('data new = ', date);
    currDay.innerText = days[date.getDay()];
    currTime.innerText = date.toLocaleTimeString();
    currDate.innerText = date.toLocaleDateString();
    let hour = date.getHours();
    for (let i = 1; i<=6; ++i)
    {
        let key = +3*i;
        let time = document.getElementById(`time${i}`);
        time.innerText = `${(+hour+3*i) % 24}:00`;
        let temp = document.getElementById(`temp${i}`);
        temp.innerText = Math.round(weather.hourly[key].temp);
        let wind = document.getElementById(`wind${i}`);
        wind.innerText = weather.hourly[key].wind_speed;
        let pic = document.getElementById(`pic${i}`);
        pic.src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weather.hourly[key].weather[0].icon}.png`;
        let fore = document.getElementById(`foreCast${i}`);
        fore.innerText = weather.hourly[key].weather[0].main;
    }
    search.value = '';
}