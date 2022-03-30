const main = document.querySelector("main")
const ul = document.querySelector("ul")

for (var i = 0; i < 50; i++) {
    const li = document.createElement("li")
    li.classList.add("pokemon-listing")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")
    figcaption.innerHTML = "Pokemon Name Goes Here"
    img.src = "pokemon-image-url-goes-here.jpg" 
    img.alt="Pokemon Name Goes Here" 
    figure.append(img)
    figure.append(figcaption)
    li.append(figure)
    ul.append(li)
}

main.append(divContainer)