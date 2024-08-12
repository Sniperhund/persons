/**
 * @typedef {Object} Person
 * @property {string} image
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {boolean} useMaps
 * @property {number[i]} mapCoords
 */

/**
 * @type {Person[]}
 */
const persons = [
    {
        image: "https://picsum.photos/200",
        name: "Lucas Täkker",
        username: "lucasskt",
        email: "not@sharing.lol",
    },
    {
        image: "https://picsum.photos/200",
        name: "Lucas Täkker",
        username: "lucasskt",
        email: "not@sharing.lol",
        useMaps: true,
        mapCoords: [56.44917, 9.4303],
    },
    {
        image: "https://picsum.photos/200",
        name: "Lucas Täkker",
        username: "lucasskt",
        email: "not@sharing.lol",
    },
    {
        image: "https://picsum.photos/200",
        name: "Lucas Täkker",
        username: "lucasskt",
        email: "not@sharing.lol",
        useMaps: true,
        mapCoords: [60.44917, 11.4303],
    },
    {
        image: "https://picsum.photos/200",
        name: "Lucas Täkker",
        username: "lucasskt",
        email: "not@sharing.lol",
    },
    {
        image: "https://picsum.photos/200",
        name: "Lucas Täkker",
        username: "lucasskt",
        email: "not@sharing.lol",
        useMaps: true,
        mapCoords: [56.46407, 9.44836],
    },
]

const outputContainer = document.querySelector("#grid")

persons.forEach((person, i) => {
    const personArticle = document.createElement("article")

    personArticle.innerHTML = `
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
        </div>`

    outputContainer.appendChild(personArticle)

    if (person.useMaps) {
        if (!person.mapCoords) {
            console.error(`Map coords is undefined for: ${person.name}`)
            return
        }

        var map = L.map(`map-${i}`, {
            center: person.mapCoords,
            zoom: 14,
            zoomControl: false,
            doubleClickZoom: false,
            dragging: false,
        })

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 14,
            detectRetina: true,
        }).addTo(map)
    }
})
