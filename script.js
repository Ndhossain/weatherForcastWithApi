function cityName() {
    let city = document.getElementById('inputcityName').value;
    if (city == '') {
        return 'Dhaka';
    } else {
        return city;
    }
}

const city = document.getElementById('cityName');
const weather = document.getElementById('weatherTemp');
const weatherType = document.getElementById('weatherType');
const imgIcon = document.getElementById('img')



function apiCall() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName()}&appid=278542422e1cc8b31a0e7fae20c3bbdc&units=metric`)
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;
            const cityWeather = data.main.temp;
            const weathertype = data.weather[0].main;
            const imgURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            city.innerText = cityName;
            weather.innerText = cityWeather;
            weatherType.innerText = weathertype;
            imgIcon.setAttribute('src', imgURL);
        })
}
