const keyApi = "1f79e1693391fcda62a5ff8f2104cbef" 
const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin&appid=${keyApi}`

async function checkWeather () {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log (data, "data")
    document.querySelector('.temp').innerHTML = data.main.temp;
    document.querySelector('.current_city').innerHTML = data.name;
}  
checkWeather();