const keyApi = "1f79e1693391fcda62a5ff8f2104cbef" 
const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const valueInput = document.querySelector('.inputSearch');
const buttonSearch = document.querySelector('.buttonSearch');


async function checkWeather (city) {
    const response = await fetch(urlApi + city + `&appid=${keyApi}`);
    const data = await response.json();
    console.log (data, "data");
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector('.current_city').innerHTML = data.name;
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " км/ч";
    document.querySelector('.vlajnost').innerHTML = data.main.humidity + "%";
}  

buttonSearch.addEventListener('click', () => {
    checkWeather(valueInput.value);
    valueInput.value = "";
} )
checkWeather();

