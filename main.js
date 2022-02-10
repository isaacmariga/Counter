let dec = document.getElementById("dec")
let inc = document.getElementById("inc")
let reset = document.getElementById("reset")
let num = document.getElementById("num")
let count = 0

num.textContent = count

dec.addEventListener("click", event => {
    let numb = --count
    num.textContent = numb
})
inc.addEventListener("click", event => {
    let numb = ++count
    num.textContent = numb
})
reset.addEventListener("click", event => {
    let numb = 0
    num.textContent = numb
})

alert(count)

if (count > 1) {
    num.style.color = "red";
}
if (numb < 0) {
    num.style.color = "blue";
}
if (numb = 0) {
    num.style.color = "black";
}