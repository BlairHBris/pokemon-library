const api = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=62"
const ul = document.querySelector("ul")
const spinner = document.querySelector(".spinner")


function addPokemon(pokemon) {
    const li = document.createElement('li')
    const figure = document.createElement('figure')

    figure.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
    <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${pokemon.name}</a></figcaption>
    `

    li.append(figure)
    ul.append(li)
}

fetch(api)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addPokemon(response)
        })
    })


