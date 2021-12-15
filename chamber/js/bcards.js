const requestURL = 'https://mikennaa.github.io/wdd230/chamber/data/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = jsonObject['businesses']
        for (let i = 0; i < businesses.length; i++) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            h3.textContent = businesses[i].name + ' ';
            card.appendChild(h3);
            document.querySelector('div.bcards').appendChild(card);
  
            let address = document.createElement('p');
            address.textContent = 'Address: ' + businesses[i].address;
            card.appendChild(birthDay);
            document.querySelector('div.bcards').appendChild(card);

            let phone = document.createElement('p');
            phone.textContent = 'Phone Number: ' + businesses[i].phone;
            card.appendChild(place);
            document.querySelector('div.bcards').appendChild(card);

            let email = document.createElement('p');
            phone.textContent = 'Email: ' + businesses[i].email;
            card.appendChild(place);
            document.querySelector('div.bcards').appendChild(card);

            let website = document.createElement('p');
            phone.textContent = 'Website: ' + businesses[i].website;
            card.appendChild(place);
            document.querySelector('div.bcards').appendChild(card);

            let image = document.createElement('img');
            image.setAttribute('src', businesses[i].imageurl);
            image.setAttribute('alt', businesses[i].name + ' ' + businesses[i].address + ' - ' + businesses[i].phone + ' - ' + businesses[i].email + ' - ' + businesses[i].website + ' - ' + businesses[i].order);
            card.appendChild(image);
            document.querySelector('div.bcards').appendChild(card);
        }
    }); 