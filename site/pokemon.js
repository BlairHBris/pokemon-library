const pokemon = document.querySelector("#pokemon")
const spinner = document.querySelector(".spinner")
const ul = document.querySelector("ul")

function addPokemon(pokemon) {
    console.log(pokemon)
    const li = document.createElement('li')
    const figure = document.createElement('figure')

    figure.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
    <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${pokemon.name}</a></figcaption>
    `

    li.append(figure)
    ul.append(li)
}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)

fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        addPokemon(parsedResponse)
        spinner.classList.add("hidden")
    })