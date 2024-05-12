let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let input = document.querySelector("#name");
    alert("Hi! "+input.value+" thanks to submit")
})

