let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent=d.toLocaleDateString('en-UK', options);

  
  const lastVisit = localStorage.getItem('lastVisit') || today; 
  const millisecondsToDays = 86400000;
  if (lastVisit == today) {
      document.querySelector('#visits').textContent = `Last view: Congrats! It's your first time viewing!`;
  }
  else {
      displayDate = (lastVisit - today / millisecondsToDays).toFixed(0);
      document.querySelector('#visits').textContent = `Last view: ${displayDate}`;
  }
   localStorage.setItem('lastVisit', today); 
      