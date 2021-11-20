const apiURL= "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=47c763fdda26aba1774c1074e74ad65c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wspeed').textContent = jsObject.wspeed.toFixed(0);
        
        const temp = parseFloat(document.querySelector('#temp').textContent);
        const wind = parseFloat(document.querySelector('#wspeed').textContent);
        let windChill;

        if (temp <= 50 && wind > 3) {
        windChill = wchill(temp, wind);
   
        }
        else {
         windChill = `N/A`;
        } 

        function wChill(temp, wind){
        let f = 35.74 + (temp * 0.6215) 
        - (35.75 * Math.pow(wind, 0.16)) 
        + (0.4275 * temp * Math.pow(wind, 0.16));
        return f.toFixed(0);
        }

        document.querySelector('.wChill').innerHTML = `${windChill}°F`;
        
    });

  const weathercastURL= "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=47c763fdda26aba1774c1074e74ad65c&units=imperial"
  fetch(weathercastURL)
    .then((response) => response.json())
    .then((jsfObject) => {
      const list = jsfObject["list"];
      const fiveDays = list.filter((list) => list.dt_txt.includes("18:00:00"));
      fiveDays.forEach((fiveDays) => {
        let castInfo = document.createElement("div");
        let castDay = document.createElement("div");
        let castDiv = document.createElement("div");
        let imgIcon = document.createElement("img");
        let castTemp = document.createElement("div");
        let span = document.createElement("span");
        let foreDate = new Date(fiveDays.dt_txt);
        let dayName = new Date(foreDate).toLocaleString("en-us", {
          weekday: "short",
        });
  
        castDay.innerHTML = `${dayName}`;
        castTemp.innerHTML = `${fiveDays.main.temp.toFixed(0)}`;
        span.innerHTML = `°F`;
        castDay.className = "days";
        castDiv.className = "daysweather";
        imgIcon.setAttribute(
          "src",
          `https://openweathermap.org/img/w/${fiveDays.weather[0].icon}.png`
        );
        imgIcon.setAttribute("alt", `${fiveDays.weather[0].disc}`);
        castInfo.appendChild(castDay);
        castInfo.appendChild(castDiv);
        castDiv.appendChild(imgIcon);
        castDiv.appendChild(castTemp);
        castTemp.appendChild(span);
        document.querySelector("div.forecast").appendChild(castInfo);
      });
    });
