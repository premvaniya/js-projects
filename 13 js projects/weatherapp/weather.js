const apikey = "eb36a75717de191eac774f6086c1035d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function checkWeather() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value;

    fetch(`${apiurl}${city}&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = `${data.main.temp}℃`;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

// Initial weather check with a default city (you might want to add a default city)
checkWeather();