try {
    let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
    };
    
    document.getElementyById("currentdate2").textContent= new Date().toLocaleDateString("en-US", options);
    } 