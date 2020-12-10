document.querySelector('#bottom').style.display = "none";
document.querySelector('#inputarea').style.display = "none";
document.querySelector('#last').style.display = "none";

let thumbarea = document.querySelector('div#thumb-bar');

for (i = 1; i <= 5; i++) {
    thumbarea.innerHTML += `<img class="img" src="images/pic${i}.jpg">`
}

const submit = document.querySelector('button')
submit.addEventListener('click', checkText)
submit.addEventListener('click', clear)


thumbarea.addEventListener("mouseover", e => {
let x = document.querySelector('#bottom');
let y = document.querySelector('#inputarea');
let z = document.querySelector('#last');
if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
    }
imageChange = e.target.src;
bigImage = document.querySelector('.bigimage img');
bigImage.src = imageChange;
})


function clear () {
    let x = document.querySelector('input#effect')
    x.value = ""
    x.setAttribute("placeholder", "")
}


function checkText () {
    let userInput = document.querySelector('input#effect').value
    if (userInput == "blur") {
        bigImage = document.querySelector('.bigimage img').innerText
        console.log(bigImage)
    } else {
        alert("Invalid input!");
    }
}