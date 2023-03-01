const breeds = document.querySelector(".breeds")
const breedsImg = document.querySelector(".breed-img")


function fetchAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => {
                breeds.innerHTML += `<button class="breeds-btn btn btn-success m-1 ">${el}</button>`
            })
        })
        .then(() => getBtn())
}

fetchAll()


function getBtn() {
    const button = document.querySelectorAll(".breeds-btn")
    button.forEach(btn => {
        btn.addEventListener("click", () => {
            fetchImg(btn.innerHTML)
        })
    })

}

function fetchImg(name) {
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => {
            breedsImg.innerHTML = `<img src="${res.data.message}">`
        })
}
