elementList = document.querySelectorAll('.menu-burger')

for (let i  = 0; i <= elementList.length; i++) {
    elementList[i].addEventListener("click", function(e) {
        e.preventDefault()
        document.querySelector('.header').classList.toggle("active")
        document.querySelector('body').classList.toggle("active")
    })
}

