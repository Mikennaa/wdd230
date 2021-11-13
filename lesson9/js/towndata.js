const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const area = towns.filter((towns) => towns.name === 'Preston' || towns.name === 'Fish Haven' || towns.name ===  'Soda Springs');
        area.forEach(area => {
            let towninfo = document.createElement('section');
            let bioinfo = document.createElement('div');
            let townName = document.createElement('h2');
            let motto = document.createElement('motto');
            let founded = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            towninfo.innerHTML = `<span class="towninfogrid></span>`;
            townName.innerHTML = `<span class="info">${area.name}</span>`;
            motto.innerHTML= `<span class="info">${area.motto}</span>`;
            founded.innerHTML= `<span class="info">Year Founded: ${area.yearFounded}</span>`;
            pop.innerHTML= `<span class="info">Population: ${area.currentPopulation}</span>`;
            rain.innerHTML= `<span class="info">Annual Rain Fall: ${area.averageRainfall}</span>`;
            image.setAttribute('src', `images/${area.photo}`);
            image.setAttribute('alt', `${area.name}`);
            

            towninfo.appendChild(section);
            bioinfo.appendChild(townName);
            bioinfo.appendChild(motto);
            bioinfo.appendChild(founded);
            bioinfo.appendChild(pop);
            bioinfo.appendChild(rain);
            towninfo.appendChild(image);

            document.querySelector('div.towns').appendChild(towninfo);
        });
    });