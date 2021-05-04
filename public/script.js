const contents = document.querySelectorAll(".contentdetail");
const cards = document.querySelectorAll(".card");

for(let content of contents){
    const buttom = content.querySelector(".buttom");

    buttom.addEventListener("click", function(){
        const selector = content.querySelector(".selector");
        if(selector.classList.contains("active")){
            selector.classList.remove("active");
            buttom.textContent = "ESCONDER";
        }else{
            selector.classList.add("active");
            buttom.textContent = "MOSTRAR";
        }
    })
}

for(let card of cards){
    card.addEventListener("click", function(){
        const id = card.getAttribute('id');
        window.location.href= `/recipe/${id}`;
    })
}