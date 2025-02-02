const bars = document.querySelector("#bars")
const links = document.querySelector(".links")
const logo = document.querySelector("#logo")

logo.addEventListener("click", () => {
    window.location.reload()
})
bars.addEventListener("click", () => {
    links.classList.toggle("active")
    console.log("hello")
})