const pokemon = document.querySelector("#pokemon")
const spinner = document.querySelector(".spinner")

function addPokemon(pokemon) {
    const li = document.createElement('li')
    const figure = document.createElement('figure')

    figure.innerHTML = `
    <a href="pokemon.html?pokemon=${pokemon.name}">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
    </a>
    `

    li.append(figure)
    ul.append(li)
}