function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
    const sel = document.querySelector('#selected')
    const selbr= document.querySelector('#selectbrowser');
    sel.style.display="block";
    sel.textContent=selbr.value;
}