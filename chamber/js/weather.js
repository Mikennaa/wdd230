const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83241,us&appid=47c763fdda26aba1774c1074e74ad65c&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#temp").textContent = jsObject.main.temp.toFixed(0);
    document.querySelector("#desc").textContent =
      jsObject.weather[0].description;
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
    document.querySelector(
      "#wspeed"
    ).textContent = jsObject.wind.speed.toFixed(0);

    const tempF = document.querySelector("#temp").textContent;
    const wind = document.querySelector("#wspeed").textContent;
    let chill = "";
    if (tempF <= 50 && wind > 3) {
      chill = windChill(tempF, wind);
    } else {
      chill = `N/A`;
    }
    function windChill(tempF, wind) {
      let chill =
        35.74 + 0.6215 * tempF - 35.75 * Math.pow(wind, 0.16) + 0.4275 * tempF * Math.pow(wind, 0.16);
      return chill.toFixed(0);
    }
    document.querySelector("#wchill").innerHTML = chill;
  });
const castURL = "https://api.openweathermap.org/data/2.5/weather?zip=83241,us&appid=47c763fdda26aba1774c1074e74ad65c&units=imperial";

fetch(castURL)
  .then((response) => response.json())
  .then((jsfObject) => {
    const list = jsfObject["list"];
    const threeDay = list.filter((list) => list.dt_txt.includes("18:00:00"));
    console.log(threeDay);
    threeDay.forEach((threeDay) => {
      let castInfo = document.createElement("div");
      let castDay = document.createElement("div");
      let castDiv = document.createElement("div");
      let imgIcon = document.createElement("img");
      let castTemp = document.createElement("div");
      let span = document.createElement("span");

      let dayName = new Date(threeDay.dt_txt).toLocaleString("en-us", {
        weekday: "short",
      });

      castDay.innerHTML = `${dayName}`;
      castTemp.innerHTML = `${threeDay.main.temp.toFixed(0)}`;
      span.innerHTML = `°F`;
      castDay.className = "days";
      castDiv.className = "daysweather";
      imgIcon.setAttribute(
        "src",`https://openweathermap.org/img/w/${threeDay.weather[0].icon}.png`
      );
      imgIcon.setAttribute(
        "alt",`Icon showing ${threeDay.weather[0].description}`
      );
      castInfo.appendChild(castDay);
      castInfo.appendChild(castDiv);
      castDiv.appendChild(imgIcon);
      castDiv.appendChild(castTemp);
      castTemp.appendChild(span);
      document.querySelector("div.forecast").appendChild(castInfo);
    });
  });
