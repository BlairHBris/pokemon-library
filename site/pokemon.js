const pokemon = document.querySelector("#pokemon")
const spinner = document.querySelector(".spinner")
const pokemonDetails = document.querySelector("#pokemon-details")
const ul = document.querySelector("ul")

function addPokemon(pokemon) {
    const div = document.createElement("div")
    div.innerHTML = `
    <figure>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
    <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${pokemon.name}</a></figcaption>
    </figure>
    `
    pokemonDetails.append(div)
}

function addAbilities(pokemon) {
    const li = document.createElement("li")

    li.innerHTML = `
    <span class="ability-name">${pokemon.name}</span>
    <br>
    <span class="ability-short-description">${pokemon.effect_entries[1].short_effect}</span>
    `
    ul.append(li)

}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)

fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        addPokemon(parsedResponse)
        const abilitiesRequests = parsedResponse.abilities
            .map(parsedResponse => parsedResponse.ability.url)
            .map(url => {
                return fetch(url).then(response => response.json())
            })
        return Promise.all(abilitiesRequests)
    }).then(parsedResponses =>{
        console.log(parsedResponses)
        spinner.classList.add("hidden")
        parsedResponses.forEach(parsedResponse => {
            addAbilities(parsedResponse)
    })
})





