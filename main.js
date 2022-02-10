let dec = document.getElementById("dec")
let inc = document.getElementById("inc")
let reset = document.getElementById("reset")
let num = document.getElementById("num")
let count = 0

num.textContent = count

dec.addEventListener("click", event => {
    let numb = --count
    num.textContent = numb
    if (numb > 1) {
        num.style.color = "red";
    }
    if (numb < 0) {
        num.style.color = "blue";
    }
    if (numb = 0) {
        num.style.color = "black";
    }
})
inc.addEventListener("click", event => {
    let numb = ++count
    num.textContent = numb
    if (numb > 1) {
        num.style.color = "red";
    }
    if (numb < 0) {
        num.style.color = "blue";
    }
    if (numb = 0) {
        num.style.color = "black";
    }
})
reset.addEventListener("click", event => {
    let numb = 0
    num.textContent = numb
    if (numb > 1) {
        num.style.color = "red";
    }
    if (numb < 0) {
        num.style.color = "blue";
    }
    if (numb = 0) {
        num.style.color = "black";
    }
})