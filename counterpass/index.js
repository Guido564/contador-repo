// document.getElementById("count").innerText = 5;

let count = 0;

let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let resetEl = document.getElementById("reset-btn");


function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let conteo = " " + count + " - "
    saveEl.textContent += conteo
}

save()

function reset(){
    count -= count;
    countEl.innerText = count;
}

reset()

