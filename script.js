


















const row = document.querySelector(".row")
const searchInp = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const slSort = document.querySelector(".select-sort")
const slReg = document.querySelector(".select-red")
axios(`https://restcountries.com/v2/all`)
.then((task) => {
    console.log(task.data)
    task.data.map((el) => {
        row.innerHTML += `<div class="col-4 bg-light border border-danger border-3 my-2  text-center py-5" style="border-radius: 15px">
        <img src="${el.flags.svg}" width="300px" height="200px">
        <h1 class="border border-info my-2 --bs-danger-bg-subtle">${el.name}</h1>
        <h3 class="my-2 --bs-danger-bg-subtle"> Столица : ${el.capital}</h3>
        <h2 class="border border-danger --bs-danger-bg-subtle"> Плошадь : ${el.area}КВ<sup>2</sup></h2>
        <h2 class="border border-info my-2 --bs-danger-bg-subtle"> Регион : ${el.region}</h2>
        <h3 class="border border-danger --bs-danger-bg-subtle"> Нациленние : ${el.population}</h3>
        <h3 class="border border-info my-2 --bs-danger-bg-subtle"> <span class="fs-6">Код страны</span> : ${el.numericCode ?el.numericCode :"No"}</h3>
        </div>`
    })
})

let all = null

function task(API){
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) => {
            all = res.data
            get(res.data)
        })
}
task("all")
searchInp.addEventListener("keydown",(e) => {
    if (e.key === "Enter"){
        task(`name/${searchInp.value}`)

    }
})
searchInp.addEventListener("input", (e) => {
    task(`name/${e.target.value}`)
})
searchBtn.addEventListener("click", () => {
    task(`name/${searchInp.value}`)

})


function get(data) {
    window.scroll(0,0)
    row.innerHTML = ""
    data.map((el) => {
        row.innerHTML += `<div class="col-4 bg-light border border-danger border-3 my-2 mx-0.5  text-center py-5" style="border-radius: 15px">
        <img src="${el.flags.svg}" width="100%" height="200px">
        <h1 class="border border-info py-2 my-2 --bs-danger-bg-subtle">${el.name.common}</h1>
        <h3 class="my-3 py-2 --bs-danger-bg-subtle border border-info"><span class="fs-6"> Столица</span>   : ${el.capital}</h3>
        <h2 class="border border-success-subtle py-2 --bs-danger-bg-subtle"> <span class="fs-6">Плошадь</span>   : ${el.area}КВ<sup>2</sup></h2>
        <h2 class="border border-info py-2 my-3 --bs-danger-bg-subtle"> <span class="fs-6">Регион</span>   : ${el.region}</h2>
        <h3 class="border border-danger py-2 --bs-danger-bg-subtle"><span class="fs-6"> Нациленние</span>   : ${el.population}</h3>
        <h3 class="border border-info my-3 py-2 --bs-danger-bg-subtle"> <span class="fs-6">Код страны</span>   : ${el.numericCode ?el.numericCode:"No" }</h3>
        </div>`
    })
}


slSort.addEventListener("change", (e) => {
    const value = e.target.value
    if (value === "population"){
      const result = all.sort((a,b) => {
          return b.population - a.population
      })
        get(result)
    }else if (value === "area"){
        const result = all.sort((a,b) => {
            return b.area - a.area
        })
        get(result)
    }else if (value === "A-Z") {
   const result = all.sort((a,b) =>{
    if (b.name.common[0] > a.name.common[0]) {
        return -1
    }else if (b.name.common[0] < a.name.common[0]){
        return 1
    }
})
        get(result)
    }else if (value === "Z-A"){
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return 1
            }else if (b.name.common[0] < a.name.common[0]){
                return -1
            }
        })
        get(result)

    }
})



slSort.addEventListener("change", (e) => {
    const value = e.target.value
    if (value === "population"){
        const result = all.sort((a,b) => {
            return b.population - a.population
        })
        get(result)
    }else if (value === "area"){
        const result = all.sort((a,b) => {
            return b.area - a.area
        })
        get(result)
    }else if (value === "A-Z") {
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return -1
            }else if (b.name.common[0] < a.name.common[0]){
                return 1
            }
        })
        get(result)
    }else if (value === "Z-A"){
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return 1
            }else if (b.name.common[0] < a.name.common[0]){
                return -1
            }
        })
        get(result)

    }
})





slReg.addEventListener("change", (e) => {
    const regValue = e.target.value
    if (regValue === "asia"){
        const res = all.filter((el)=> {
            return el.region === "Asia"
        })
        get(res)
    }
    else if (regValue === "europe"){
        const res = all.filter((el)=> {
            return el.region === "Europe"
        })
        get(res)
    }
    else if (regValue === "oceania"){
        const res = all.filter((el)=> {
            return el.region === "Oceania"
        })
        get(res)
    }
    else  if (regValue === "africa"){
        const res = all.filter((el)=> {
            return el.region === "Africa"
        })
        get(res)
    }
})
