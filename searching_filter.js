
function filterProduct(value){
    let buttons=document.querySelectorAll(".filter-button");
    buttons.forEach(function(button){

        if(value==button.innerText){
            console.log(button);
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    var cards=document.querySelectorAll(".product");
    cards.forEach(function(card){
        if(value=="ALL" ){
            // card.classList.remove("hide");
            card.style.display='block';
        }
        else{
            if(card.id==value ){
                // card.classList.remove("hide");
                card.style.display='block';
            }
            else{
                // card.classList.add("hide");
                card.style.display='none';
            }
        }
    })

}


var searching_button=document.querySelector('.searching-button');
var searching_input=searching_button.parentElement.querySelector('input');

function searching_method(){
    var cards=document.querySelectorAll(".product");

    var elements=document.querySelectorAll(".title");
    
    var search_input=searching_button.parentElement.querySelector("input").value;
    console.log(cards,elements,search_input);
    elements.forEach(function(element,index){
        if(element.innerText.toLowerCase().includes(search_input.toLowerCase())){
            // cards[index].classList.remove("hide");
            cards[index].style.display="block";
            
        }
        else{
            // cards[index].classList.add("hide");
            cards[index].style.display="none";
        }
    })
    
}
searching_input.addEventListener('input',searching_method);
searching_button.addEventListener("click",searching_method);


/////////////////////////////////////////////////
