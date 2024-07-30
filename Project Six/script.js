const apiKey = "67a4197708c8e5350a4bb0e299e4ee68";
const form = document.querySelector('.weatherApp');
const cityInput = document.querySelector('.cityInput');
const main = document.querySelector('.main');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            if (weatherData) {
                displayWeatherInfo(weatherData);
            } else {
                alert("Could not find city");
            }
        } catch {
            alert("Enter a valid City name");
        }
    } else {
        alert("Enter a valid City name");
    }
});

async function getWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error("City not found"); // Throw an error to be caught in the catch block
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    // Destructuring data
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
    
    // Clear previous content and show the main content
    main.style.display = "flex";

    // Update and set content for each element
    document.getElementById('city').textContent = city;
    document.getElementById('temperature').textContent = `${temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('description').textContent = description;
    document.getElementById('weatherEmojis').textContent = getWeatherEmoji(id);
}

function getWeatherEmoji(weatherID) {
    // Mapping weather IDs to emojis
    const emojiMap = {
        800: '☀', // Clear sky
        801: '🌤', // Few clouds
        802: '⛅', // Scattered clouds
        803: '☁', // Broken clouds
        804: '☁', // Overcast clouds
        500: '🌦', // Light rain
        501: '🌧', // Moderate rain
        502: '🌧', // Heavy intensity rain
        503: '🌧', // Very heavy rain
        504: '🌧', // Extreme rain
        511: '🌨', // Freezing rain
        600: '❄', // Snow
        601: '❄', // Snow showers
        602: '❄', // Heavy snow
        611: '🌨', // Sleet
        612: '🌨', // Shower sleet
        701: '🌫', // Mist
        721: '🌫', // Haze
        731: '🌪', // Dust
        741: '🌫', // Fog
        751: '🌫', // Sand
        761: '🌫', // Dust
        762: '🌫', // Ash
        771: '🌫', // Squall
        781: '🌪', // Tornado
        200: '⛈', // Thunderstorm
        201: '⛈', // Thunderstorm
        202: '⛈', // Thunderstorm
        210: '⛈', // Thunderstorm
        211: '⛈', // Thunderstorm
        212: '⛈', // Thunderstorm
        221: '⛈', // Thunderstorm
        230: '⛈', // Thunderstorm
        231: '⛈', // Thunderstorm
        232: '⛈'  // Thunderstorm
    };
    return emojiMap[weatherID] || '☁'; // Default to cloudy emoji if ID not found
}
