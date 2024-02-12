const keyApi = "1f79e1693391fcda62a5ff8f2104cbef" 
const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const valueInput = document.querySelector('.inputSearch');
const buttonSearch = document.querySelector('.buttonSearch');
const containerInfo = document.querySelector('.conteiner-info')
const imageWeather = document.querySelector('.imageWeather')

async function checkWeather (city) {
    const response = await fetch(urlApi + city + `&appid=${keyApi}`);
    
    if (response.status == 400) {
       containerInfo.style.display = 'none';
       console.log(response.status)
    } else {
       const data = await response.json(); 
       console.log (data, "data");
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector('.current_city').innerHTML = data.name;
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " км/ч";
    document.querySelector('.vlajnost').innerHTML = data.main.humidity + "%";
    
    if (data.weather[0].main == "Clear") {
        imageWeather.src = "image/sun.svg";
      } else if (data.weather[0].main == "Rain") {
        imageWeather.src = "image/rain.svg";
      } else if (data.weather[0].main == "Snow") {
        imageWeather.src = "image/snow.svg";
      } else if (data.weather[0].main == "Drizzle") {
        imageWeather.src = "image/rain.svg";
      } else if (data.weather[0].main == "Drizzle") {
        imageWeather.src = "image/rain.svg";
      }
    containerInfo.style.display = "flex";
    }
    
}  

buttonSearch.addEventListener('click', () => {
    checkWeather(valueInput.value);
    valueInput.value = "";
} )
checkWeather();

