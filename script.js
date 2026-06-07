const button = document.querySelector("button");
const result = document.getElementById("weather-result");
const cityInput = document.getElementById("city");

const apiKey = "403ef1e47e2bf3b9d25a8806587beb26";

button.addEventListener("click", async function () {

    const city = cityInput.value;

    if (city === "") {
        result.textContent = "Please enter a city name";
        return;
    }

    result.textContent = "Loading weather...";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            result.textContent = "City not found";
            return;
        }

        result.innerHTML = `
            <h3>${data.name}</h3>
            <p> Temperature: ${data.main.temp}°C</p>
            <p> Weather: ${data.weather[0].main}</p>
            <p> Humidity: ${data.main.humidity}%</p>
        `;

    } catch (error) {

        result.textContent = "Error fetching weather data";

    }

});