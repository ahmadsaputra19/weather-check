async function getWeather() {
    const apiKey = '31461857c1ce18e6a1356116a365f9b2';  // Ganti dengan API key Anda
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('temp').innerText = data.main.temp;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('wind').innerText = data.wind.speed;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
        alert('Error fetching the weather data');
    }
}
