const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=47c763fdda26aba1774c1074e74ad65c&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('#currently').textContent = jsObject.weather[0].description;
        document.getElementById('#current-temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('#humidity').textContent = jsObject.main.humidity;
        document.getElementById('#wind-speed').textContent = jsObject.wind.speed.toFixed(0);
        
        const temp = parseFloat(document.querySelector('#current-temp').textContent);
        const wind = parseFloat(document.querySelector('#wind-speed').textContent);
        let wchill;

        if (temp <= 50 && wind > 3) {
        wchill = windChill(temp, wind);
   
        }
        else {
         wchill = `N/A`;
        } 

        function windChill(temp, wind){
        let wchill = 35.74 + (temp * 0.6215) 
        - (35.75 * Math.pow(wind, 0.16)) 
        + (0.4275 * temp * Math.pow(wind, 0.16));
        return wchill.toFixed(0);
        }

        document.querySelector('#wind-chill').innerHTML = wchill;
        
    });

    const foreapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=47c763fdda26aba1774c1074e74ad65c&units=imperial";

    fetch(foreapiURL)
        .then((response) => response.json())
        .then((jsObject) => {
    
            const hourmark = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
            const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let day = 0;
            
            time.forEach(forecast => {
                let thedate = new Date(forecast.dt_txt);
                const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
                const desc = forecast.weather[0].description;
                document.querySelector(`#day${day + 1}`).textContent = weekdays[thedate.getDay()];
                document.querySelector(`#dtemp${day + 1}`).textContent = forecast.main.temp.toFixed(0) + "°F";
                document.querySelector(`#img${day+1}`).setAttribute('src', imagesrc);
                document.querySelector(`#img${day+1}`).setAttribute('alt', desc);
                day++;
    
            });
        });