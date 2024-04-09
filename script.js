let cut = false
let guy = document.getElementById("guy")
document.onkeydown = function (event) {
    if (event.code == "KeyA") {
        guy.style.transform = "translate(-100%,-50%)"
        console.log(event.code);
    }
    if (event.code == "KeyD") {
        guy.style.transform = "translate(0%,-50%) scaleX(-1)"
        console.log(event.code);
    }
    if (event.code == "Space") {
        if (cut == false) {
            guy.src = "Untitled-3.png"
            setTimeout(function () {
                guy.src = "timberguy.png"
                cut=false
            }, 500)
            cut = true
        }
    }
}