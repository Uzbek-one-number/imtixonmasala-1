const inputEl = document.querySelector(".input");
const h1El = document.querySelector("#h1");
const btnEl = document.querySelector("#btn");
// let a = alert("Raqam kiritish taqiqlangan");
btnEl.addEventListener("click", (e) => {
    e.preventDefault()


    h1El.innerHTML = inputEl.value.split("").reverse().join("").trim();


    if (inputEl.value === typeof Number) {
        let a = alert("aaa");
        inputEl.value !== h1El.value;
    }
    else if (inputEl.value === typeof String) {
        h1El.innerHTML = inputEl.value.split("").reverse().join("").trim();
        typeof inputEl.value
    }


    inputEl.value = "";
})


