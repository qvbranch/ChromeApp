const weatherBox = document.querySelector("#weather");

const API_KEY = "fb8a4236f3683e96a468a9b252147228";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}°`;
        city.innerText = data.name;

        const icon = data.weather[0].icon;
        img_tag = document.createElement('img');
        img_tag.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        img_tag.className = `classIcon`;
        weatherBox.prepend(img_tag);
    });
    
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);