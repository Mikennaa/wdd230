const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets']
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);
  
            let birthDay = document.createElement('p');
            birthDay.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            card.appendChild(birthDay);
            document.querySelector('div.cards').appendChild(card);

            let place = document.createElement('p');
            place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            card.appendChild(place);
            document.querySelector('div.cards').appendChild(card);

            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' +prophets[i].order);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });