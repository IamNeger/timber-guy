let score = document.getElementById("scoren")
let scoren = 0
let cut = false
let guy = document.getElementById("guy")
let treeY = 20
let forest = document.getElementById("forest")
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
            scoren = scoren + 1
            score.innerHTML = "score: " + scoren
            newTree()
            setTimeout(function () {


                let trees = document.getElementsByClassName("tree")
                trees[0].remove()
                // нужно чтобы новое дерево появлялась в нужном месте
                treeY = treeY - 99
                guy.src = "Untitled-3.png"
                console.log(trees);
                // цикл опускает деревья 
                for (let t of trees) {
                    t.style.transform = "translate(-25%,-" + (t.classList[1] - 99) + "%)"
                    // t.classList[1]=(t.classList[1]-99)
                    t.classList.add(t.classList[1] - 99)
                    t.classList.remove(t.classList[1])
                }
                // setTimeout(function () {
                //     guy.src = "timberguy.png"
                //     cut = false
                // }, 500)
                cut = true
            }, 1)
        }
    }
}
function newTree() {
    let tree = document.createElement("img")
    forest.appendChild(tree)
    tree.src = "tree" + Math.floor(Math.random() * 2) + ".png"
    tree.className = "tree " + treeY
    tree.style.transform = "translate(-25%,-" + treeY + "%)"
    treeY = treeY + 99
}
newTree()
newTree()
newTree()
newTree()
newTree()
newTree()
document.onkeyup = function (event) {
    if (event.code == "Space") {
        cut = false
        guy.src="timberguy.png"
    }
}