const apiURL= "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=47c763fdda26aba1774c1074e74ad65c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector("#degree").textContent = jsObject.main.temp.toFixed(0);
        document.querySelector("#skycondition").textContent = jsObject.weather[0].description;
        document.querySelector("#humid").textContent = jsObject.main.humidity;
        document.querySelector("#windspeed").textContent = jsObject.wind.speed.toFixed(0);

        const fah = parseInt(document.querySelector("#degree").textContent);
        const wind = parseInt(document.querySelector("#windspeed").textContent);
        let chill = "";

        if ((fah <= 50) && (wind > 3)) {
            chill = windChill(fah, wind);
        } else {
            chill = "N/A"
        }

        function windChill(fah, wind) {
            let chill =
                35.74 + 0.6215 * fah - 35.75 * Math.pow(wind, 0.16) +
                0.4275 * fah * Math.pow(wind, 0.16);
            return chill.toFixed(0);
        }

        document.querySelector("#wChill").innerHTML = chill;
    });
