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
  }
  
