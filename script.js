// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "f7679b05da64cc00a4723c0e8afd241b",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}


const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress' , (event) => {

    if(event.keyCode == 13) { 
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value)
    document.querySelector('.weather-body').style.display = "block";
    }
});



// Get Weather Report

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    //this unit metrics is for degree celcius unit.
    .then(weather =>  weather.json()
    ).then(showWeatherReport);

}

//show Weather report

function showWeatherReport(weather) {
 console.log(weather);

  let city =document.getElementById('city');
 city.innerText =`${weather.name}, ${weather.sys.country}`;

 let temperature =document.getElementById('temp');
 temperature.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;

 let weatherType = document.getElementById ('weather');
 weatherType.innerText = `${weather.weather[0].main}`;

 let date = document.getElementById('date');
 let todayDate = new Date();
 date.innerText = dateManage(todayDate);

 if(weatherType.textContent == "Clear") {
     document.body.style.backgroundImage = "url('images/sunny clearr.jpg')";
 } else if(weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = "url('images/cloudy.jpg')";
} else if(weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url('images/rainyy.jpg')";
} else if(weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = "url('images/snowy.jpg')";
} else if(weatherType.textContent == "Smoke") {
    document.body.style.backgroundImage = "url('images/smoky.jpg')";
} else if(weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = "url('images/smoky.jpg')";
} else if(weatherType.textContent == "Thunderstorm") {
    document.body.style.backgroundImage = "url('images/storm.jpg')";
}
}


// Date manage

function dateManage(dateArg) {

    let days =["Sunday","Monday" , "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}) ${year}` ;
}