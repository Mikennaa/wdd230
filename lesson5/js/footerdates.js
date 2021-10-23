let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent=d.toLocaleDateString('en-UK', options);

function bannerCalc() {

  const d=newDate();
  const today=d.getDay();
  const pancake=document.querySelector(".pfriday");

  if (today==5) {
    pancake.style.display=block;
  }
else {
  pancake.style.display='none';
}
}
bannerCalc();

