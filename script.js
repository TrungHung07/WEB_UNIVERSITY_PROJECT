const slides=document.getElementsByClassName('slide');
let slideIndex=1;


const showslide=function(currentIndex){
if(currentIndex<1){
    slideIndex=slides.length;
}
if(currentIndex>=slides.length){
    slideIndex=1;
}
for(let i =0 ;i<slides.length;i++){
    slides[i].style.display ="none";
}
slides[slideIndex-1].style.display="block";
}

const goPrev=function(){
    showslide(slideIndex--);
}

const goNext=function(){
    showslide(slideIndex++);
}

showslide(slideIndex);

const product_button = document.querySelector('#product-button');
// const section_p2=document.querySelector('.section-p2');


// product_button.addEventListener("click",function(){
//     section_p2.classList.add('pop-up');
// })


const addtocartButton =document.getElementById('addtocart');
const addtocart_container = document.getElementsByClassName('addtocart-container')[0];
addtocartButton.addEventListener('click',function(){
    addtocart_container.display='block';
})

