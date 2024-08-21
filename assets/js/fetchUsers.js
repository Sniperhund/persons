export default async function fetchUsers() {
    return await fetch("/assets/data/persons.json").then((response) =>
        response.json()
    )
}
