
let cat = new Cat('chat', 'feline', '80');

let btnCat = document.querySelector("#btncat");

btnCat.addEventListener("click", function() {
    cat.run(200);
})