let cut = false
let guy = document.getElementById("guy")
let treeY=20
let forest=document.getElementById("forest")
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
            let trees=document.getElementsByClassName("tree")
            trees[0].remove()
            guy.src = "Untitled-3.png"
            setTimeout(function () {
                guy.src = "timberguy.png"
                cut=false
            }, 500)
            cut = true
        }
    }
}
function newTree() {
let tree=document.createElement("img")
forest.appendChild(tree)
tree.src="tree"+Math.floor(Math.random()*2)+".png"
tree.className="tree"
tree.style.transform="translate(-25%,-"+treeY+"%)"
treeY=treeY+99
}
newTree()
newTree()
newTree()
newTree()
newTree()
newTree()