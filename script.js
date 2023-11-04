let http=new XMLHttpRequest();
//open json file
http.open('get','data.json',true);
//send the request: 
http.send();




/////////////////////////////////////////////
   


/////////////////////////////////////////////////////////////////

http.onload=function(){
    if(this.readyState==4 && this.status==200){

        let products=JSON.parse(this.responseText);
        let output="";
        let product_container=document.querySelector(".products");
        for(let item of products){
            output=`
        
            <div class="product" id="${item.category}">
                <img src="${item.image}">
                <div class="des-contaner">
                    <div class="title">${item.title}</div>
                    <div class="price"><span>${item.price}<span><span>đ</span></div>
                    <div class="cart_button"><ion-icon name="cart-outline"></ion-icon></div>
                </div>
            <div>
            `
        
        product_container.innerHTML+=output;
    }
    var cards=document.querySelectorAll(".product");
    // console.log(cards);
    cards.forEach(function(card){
        card.classList.add("hide");
    })

    filterProduct("ALL");
    
    }
    
}    





//-----------------------PAGINATION------------------------------/
