let openCookieModal = document.querySelector(".cookie")
let openNewsModal = document.querySelector(".news")

let exitCookieModal = document.querySelector(".exitCookie")
let exitNewsModal = document.querySelector(".exitNews")


openCookieModal.addEventListener("click", function(event) {
    document.querySelector(".cookieModal").setAttribute("style", "")
    document.querySelector("body").setAttribute("style", `background-color: #656565`)
    document.querySelector("footer").setAttribute("style", "opacity: 0.5;")
})

exitCookieModal.addEventListener("click", function(event) {
    document.querySelector(".cookieModal").setAttribute("style", "visibility: hidden;")
    document.querySelector("body").setAttribute("style", `background-color: white`)
    document.querySelector("footer").setAttribute("style", "opacity: 1;")
})


openNewsModal.addEventListener("click", function(event) {
    document.querySelector(".newsModal").setAttribute("style", "")
    document.querySelector("body").setAttribute("style", `background-color: #656565`)
    document.querySelector("footer").setAttribute("style", "opacity: 0.5;")
})

exitNewsModal.addEventListener("click", function(event) {
    document.querySelector(".newsModal").setAttribute(
        "style", 
        "visibility: hidden;"
    )
    document.querySelector("body").setAttribute("style", `background-color: white`)
    document.querySelector("footer").setAttribute("style", "opacity: 1;")
})