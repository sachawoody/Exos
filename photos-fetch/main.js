fetch(
    `https://picsum.photos/v2/list?page=1`
).then(
    response => response.json()
).then(
    json => {
        console.log(json.length)
        let photos = []
        for (let i = 0; i < 4; i++) {
            photos.push(json[random(json)])
        }
        createCarte(photos)
    }
).catch(
    err => console.log(err)
)


function random(json) {
    const random = Math.floor(Math.random() * json.length);
    return random;
}

function createCarte(photos) {
    console.log(photos[0])
    let sectionSelector = document.querySelector("section")

    for (let i = 0; i < photos.length; i++) {
        let articleInsert = document.createElement("article")
        articleInsert.setAttribute("id", `article${i}`)
        sectionSelector.prepend(articleInsert)
        
        let articleSelector = document.querySelector(`#article${i}`)

        let divInsert = document.createElement("div")
        divInsert.setAttribute("id", `div${i}`)
        articleSelector.prepend(divInsert)
        let divSelector = document.querySelector("div")
        let paraInsert = document.createElement("p")
        let buttonInsert = document.createElement("button")
        buttonInsert.textContent = "Visit"
        paraInsert.textContent = photos[i].author
        divSelector.append(paraInsert)
        divInsert.append(buttonInsert)
        

        let imgInsert = document.createElement("img")
        articleSelector.append(imgInsert)
        let imageSelector = document.querySelector("img")
        imageSelector.setAttribute("id", `img${i}`)
        // let newImageSize = `https://picsum.photos/id/${i}/350/300`
        imageSelector.setAttribute("src", photos[i].download_url)
        imageSelector.setAttribute("style", "width: 350px;height: 300px;")

    }
}