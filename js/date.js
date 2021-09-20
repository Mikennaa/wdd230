ndate= new Date();
nyear= ndate.getFullYear();
nmonth= ndate.getMonth() + 1;
date= ndate.getDate();
document.getElementById("date").innerHTML= nmonth + "/" + date + "/" + nyear;