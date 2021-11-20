let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent=d.toLocaleDateString('en-UK', options);

  
const pancake=document.querySelector(".pancakefriday");

  if (d.getDay==5) {
    pancake.style.display='block';
  }

  else {
    pancake.style.display='none';
  }
  

  const lastView = localStorage.getItem('lastView') || today; 
  const displayDate = '';
  const millisecondsToDays = 8640000;
  if (lastView == today) {
      document.querySelector('#visits').textContent = `Last view date: Congrats! It's your first time viiewing!`;
  }
  else {
      displayDate = (lastVisit - today / millisecondsToDays).toFixed(0);
      document.querySelector('#lastView').textContent =  `Last visit: ${displayDate}`;
  }
   localStorage.setItem('lastView', today); 
      