let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}


document.querySelector(
    "#lastModified").textContent=`Last Modification:${document.lastModified}`;
)
