const temp = parseFloat(document.querySelector('.temp').textContent);
const wind = parseFloat(document.querySelector('.windspeed').textContent);
let windc;

if (temp <= 50 && wind > 3) {
    windc = windChill(temp, wind);
   
}
else {
    windc = `N/A`;
} 

function windChill(temp, wind){
        let f = 35.74 + (temp * 0.6215) 
        - (35.75 * Math.pow(wind, 0.16)) 
        + (0.4275 * temp * Math.pow(wind, 0.16));
        return f.toFixed(0);
    }

document.querySelector('.windchill').innerHTML = `${wchill}°F`;
