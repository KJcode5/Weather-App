//test
console.log("Welcome to my Weather App");

//create object for storing the functions and variables that will be necessary for using the API
//Get API key so you can access the weather data

let weather = {
    "apiKey": "36d755af0e6e80423f11491bb310f6d3",
    fetchWeather: function (city) {
        fetch(
            "https:api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    }, 
    //Displaying Results
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "The weather in " + name + " is:";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

//Making the search bar work
document.querySelector(".search button")
.addEventListener("click", function () {
    //automatically get the content of the search bar, and search for it
    weather.search();
});


// Reference - https://www.youtube.com/watch?v=WZNG8UomjSI

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=36d755af0e6e80423f11491bb310f6d3

