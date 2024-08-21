export const personTemplate = (person, i) =>
    `<article>
        <div class="background">
            ${
                person.useMaps
                    ? `<div id="map-${i}" style="width: 100%; height: 100%; border-radius: 30px 30px 0 0;"></div>`
                    : ``
            }
        </div>
        <img class="photo" src="${person.image}" alt="Image" />
        <div class="text">
            <h2>${person.name}</h2>
            <p>${person.username}</p>
            <p class="email">${person.email}</p>
            <a href="#">se website</a>
        </div>
    </article>`
