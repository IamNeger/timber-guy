let white= document.getElementById("white")
let guyDir="left"
let newgame= document.getElementById("newgame")
let score = document.getElementById("scoren")
let scoren = 0
let cut = false
let guy = document.getElementById("guy")
let treeY = 40
let forest = document.getElementById("forest")
function gameOver() {
white.style.opacity=1    
}
document.onkeydown = function (event) {
    if (event.code == "KeyA") {
        guyDir="left"
        guy.style.transform = "translate(-100%,-50%)"
        console.log(event.code);
    }
    if (event.code == "KeyD") {
        guyDir="right"
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
                console.log(trees[0]);
                if (trees[0].src.includes("tree1") && guyDir=="left") {
                    console.log('you loser');
                    gameOver()
                }
                if (trees[0].src.includes("tree2") && guyDir=="right") {
                    console.log('you loser');
                    gameOver()
                }
                // нужно чтобы новое дерево появлялась в нужном месте
                treeY = treeY - 99
                guy.src = "Untitled-3.png"
                console.log(trees);
                // цикл опускает деревья 
                for (let t of trees) {
                    t.style.transform = "translate(-50%,-" + (t.classList[1] - 99) + "%)"
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
    tree.src = "tree" + Math.floor(Math.random() * 3) + ".png"
    tree.className = "tree " + treeY
    tree.style.transform = "translate(-50%,-" + treeY + "%)"
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