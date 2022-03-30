const main = document.querySelector("main")
const divContainer = document.createElement("div")
/*const pokemonDiv = document.createElement("div")

pokemonDiv.innerHTML += `
<figure>
<img src="pokemon-image-url-goes-here.jpg" alt="Pokemon Name Goes Here" />
<figcaption><a href="pokemon.html?pokemon=pokemon-id-goes-here">Pokemon Name Goes Here</a></figcaption>
</figure>
`; */

for (var i = 0; i < 50; i++) {
    const pokemonDiv = document.createElement("div")
    pokemonDiv.classList.add("pokemon-listing")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")
    figcaption.innerHTML = "Pokemon Name Goes Here"
    img.src = "pokemon-image-url-goes-here.jpg" 
    img.alt="Pokemon Name Goes Here" 
    figure.append(img)
    figure.append(figcaption)
    pokemonDiv.append(figure)
    divContainer.append(pokemonDiv)
}

main.append(divContainer)