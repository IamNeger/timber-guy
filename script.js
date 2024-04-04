let putin = document.getElementById("putin")
let canplay = false
let reactionTimeout
let miliInterval
let bigdiv
let reacshin = document.getElementById("reacshin")
let tablo = document.getElementById("tablo")
let score = 0
let timer = document.getElementById("timer")
let time = 60
let speed = document.getElementById("speed")
let modal = document.getElementById("modal")
let ammo = 10
reacshin.onclick = function (event) {
    ammo = 10
    score = 9999999999999999999999999999999999999999999999999999999
    event.preventDefault()
    timer.innerHTML = "время: " + 0
    tablo.innerHTML = "счет: " + 0
    modal.style.opacity = 0
    bigdiv = document.createElement("div")
    document.body.appendChild(bigdiv)
    bigdiv.classList.add("bigdiv")
    reaction()
    bigdiv.onclick = function (event) {
        if (score > time) {
            score = time
            tablo.innerHTML = "счет: " + score
        }
        ammo = ammo - 1
        if (ammo == 0) {
            clearTimeout(reactionTimeout)
            modal.style.opacity = 1
            bigdiv.remove()
            canplay = false
        }
        event.preventDefault()
        bigdiv.style.backgroundColor = "white"
        //стопит время
        clearInterval(miliInterval)
        if (canplay) {
            canplay = false
            reaction()
        }
    }
}
function reaction() {
    reactionTimeout = setTimeout(() => {
        canplay = true
        bigdiv.style.backgroundColor = "lime"
        time = 0
        //интервал запускает мили секунды
        miliInterval = setInterval(() => {
            //добовляется время
            time++
            timer.innerHTML = "время: " + time
        }, 1)
        if (time > 0) {
        }
        //рандомная задержка
    }, Math.random() * 4000 + 1000);
}
speed.onclick = function (event) {
    event.preventDefault()
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
    time = putin.value || 60
    putin.style.display="none"
    score = 0
    tablo.innerHTML = "счет: " + score
    createCircle()
    let timeInterval = setInterval(() => {
        console.log(1);
        time = time - 1
        if (time < 1) {
            clearInterval(timeInterval)
            modal.style.opacity = 1
            modal.style.pointerEvents = "auto"
            putin.style.display="block"
        }
        timer.innerHTML = "время: " + time
    }, 1000);
}
function createCircle() {
    // делает елемент дива(создают круг)
    let circle = document.createElement("div")
    // добавляет диву класс серкл 
    circle.classList.add("circle")
    // добовлял серкл в боди
    document.body.appendChild(circle)
    // нужно для того чтобы кружочки появлялись на рандомном расстоянии
    circle.style.left = Math.random() * (window.innerWidth - 50) + "px"
    circle.style.top = Math.random() * (window.innerHeight - 50) + "px"
    circle.onclick = function (event) {
        circle.remove()
        if (time > 0) {
            createCircle()
        }
        clearTimeout(circleTimeout)
        //+ одно очко
        score = score + 1
        tablo.innerHTML = "счет: " + score
    }
    let circleTimeout = setTimeout(() => {
        circle.remove()
        if (time > 0) {
            //создает кружочки
            createCircle()
        }
    }, 2000);
}