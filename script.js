const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
cityName.textContent = cityName.textContent.toLowerCase();
const cityTemp = document.getElementById("city-temp");
const cityTime = document.getElementById("city-time");

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=&q=${cityName}&aqi=yes`
    );
    return await promise.json();
};

button.addEventListener("click", async () => {
    const value =  input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    console.log(result);
});