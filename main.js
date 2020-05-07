console.log("Hello You!")

const container = document.querySelector("#wishList")

document.querySelector("#saveToWishlist").addEventListener("click", event => {
const favoriteThing = document.querySelector("#favoriteThing").value
const purchaseLocation = document.querySelector("#purchaseLocation").value

container.innerHTML += `
<sectioin>
    <h1>${favoriteThing}</h1>
    <div>${purchaseLocation}</div>
</section>
`
})
