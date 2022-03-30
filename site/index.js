const api = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
const main = document.querySelector("main")
const ul = document.querySelector("ul")

fetch(api)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let pokemons = data;

        pokemons.map(function (pokemon) {
            let li = document.createElement('li')
            let figure = document.createElement('figure')
            let img = document.createElement('img')
            let figcaption = document.createElement('figcaption')

            figcaption.innerHTML = `${pokemon.name}`
            img.src = pokemon.url
            img.alt = `${pokemon.name}`

            figure.append(img)
            figure.append(figcaption)
            li.append(figure)
            ul.append(li)
        })
    })
    .catch(function (error) {
        console.log(error);
    })

/*for (var i = 0; i < 50; i++) {
    const li = document.createElement("li")
    li.classList.add("pokemon-listing")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")
    figcaption.innerHTML = "Pokemon Name Goes Here"
    img.src = "pokemon-image-url-goes-here.jpg"
    img.alt = "Pokemon Name Goes Here"
    figure.append(img)
    figure.append(figcaption)
    li.append(figure)
    ul.append(li)
}

*/

