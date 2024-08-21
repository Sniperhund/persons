import fetchUsers from "./fetchUsers.js"
import { personTemplate } from "./templates.js"

/**
 * @typedef {Object} Person
 * @property {string} image
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {boolean} useMaps
 * @property {number[i]} mapCoords
 */

export default async function renderUsers() {
    const outputContainer = document.querySelector(".grid")

    document.querySelector("#grid").addEventListener("click", (e) => {
        outputContainer.classList.remove("list")
        e.target.classList.add("active")
        document.querySelector("#list").classList.remove("active")
    })

    document.querySelector("#list").addEventListener("click", (e) => {
        outputContainer.classList.add("list")
        e.target.classList.add("active")
        document.querySelector("#grid").classList.remove("active")
    })

    /**
     * @type {Person[]}
     */
    const persons = await fetchUsers()

    persons.forEach((person, i) => {
        outputContainer.insertAdjacentHTML(
            "beforeend",
            personTemplate(person, i)
        )

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
}
