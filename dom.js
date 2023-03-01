const user = document.querySelector(".user")


axios(`https://jsonplaceholder.typicode.com/users`)
    .then((us) => {
        console.log(us.data)
        us.data.map((el) => {
            user.innerHTML += `<div class="col-2 mx-2 border border-danger shadow-lg p-3  my-5 bg-body-tertiary rounded " style="width: 500px">
        <img src= "./img/3d.png" alt="" class="" width="180px" height="200px" style="margin-left: 110px" >
<h1 class="text-center text-danger border border-primary py-1 fs-3"><span class="fs-5">имя</span> : ${el.name}</h1>
<h2 class="text-center text-primary-emphasis border border-primary py-1 fs-3"><span class="fs-5">почта</span> : ${el.email}</h2>
<h3 class="text-center text-primary-emphasis border border-primary py-1 fs-3"><span class="fs-5">Веб-сайт</span> : ${el.website}</h3>
<h3 class="text-center text-primary-emphasis border border-primary py-1 fs-3"><span class="fs-5">адрес</span> : ${el.address.city}</h3>
<a href="tel:1" class="text-center text-danger border border-primary py-1" style="margin-left: 160px;"><span class="fs-5">тел</span> : ${el.phone}</a>
</div>`
        })
    })

