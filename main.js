let outer = document.getElementById(`outer`);
let form = document.getElementById(`form`);
form.addEventListener(`submit`, async function (a) {
    a.preventDefault();
    let cityname = document.getElementById(`input`).value;
    let error = document.getElementById(`error`);
    let key = `c3319f74724309ac5b0a8683f6fa0e7d`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
    let show = document.getElementById(`show`);
    let humid = document.getElementById(`humid`);
    let wind = document.getElementById(`wind`); // Declare wind element
    let rain = document.getElementById(`rain`); // Declare rain element
    let temp = document.getElementById(`temp`);
    let cityElement = document.getElementById(`city`); // Renamed from 'location'
    let icon1 = document.getElementById(`icon1`);
    let icon2 = document.getElementById(`icon2`);
    let icon3 = document.getElementById(`icon3`);
    let container=document.getElementById(`cont`)

    if (cityname == ``) {
        error.innerHTML = "PLEASE ENTER THE CITY NAME....";
    } else {
        error.innerHTML = ``;
        let response = await fetch(api);
        response = await response.text();
        let result = JSON.parse(response);

        humid.innerHTML = "Humidity:" + `<box-icon id="cloud" name='cloud' animation='burst' color='#ffffff' ></box-icon>` + result.main.humidity + `%`;
        wind.innerHTML = "Wind:" + `<box-icon id="speed" name='wind' animation='tada' color='#ffffff' ></box-icon>` + result.wind.speed + `m/s`;
        rain.innerHTML = "Pressure:" + `<box-icon id="pressure" name='water' animation='burst' color='#ffffff' ></box-icon>` + result.main.pressure + `torr`;
        let celsiusTemperature = (result.main.temp - 273); // Declare celsiusTemperature variable
        temp.innerHTML = celsiusTemperature.toFixed(2) + `&degC`;

        cityElement.innerHTML = result.name; // Updated variable name
        icon1.innerHTML=`<box-icon class="icons" name='landscape' animation='flashing' flip='horizontal' color='#ffffff' ></box-icon>`
    }
});