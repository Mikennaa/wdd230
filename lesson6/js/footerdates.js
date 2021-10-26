let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent=d.toLocaleDateString('en-UK', options);

function bannerpopup() {

  const d=new Date();
  const today=d.getDay();
  const pancake=document.querySelector(".pancakefriday");

  if (today==5) {
    pancake.style.display='block';
  }

  else {
    pancake.style.display='none';
  }
  }
  bannerpopup();

