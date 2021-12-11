let d = new Date();
document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}


function myFunction() {
    var x = document.lastModified;
    document.getElementById("modified").innerHTML = x;
}
