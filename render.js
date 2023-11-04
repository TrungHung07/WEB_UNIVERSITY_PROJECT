

var data=[
    {
        "number":"1",
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "number":"2",
        "image":"./image/acer predator.webp",
        "title":"Laptop gaming Acer Predator Helios Neo PHN16 71 779X",
        "price":"39.990.000",
        "category":"ACER"
    },
    {
        "number":"3",
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    }
    ,
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    },
    {
        "image":"image/laptopASUS_zenbook14.webp",
        "title":"Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price":"24.990.000",
        "category":"ASUS"
    }
]



    
        // let mainContainer = document.getElementById("myData");
        for (let i = 0; i < data.length; i++) {
            let div = `
            <div class="product" id="${data[i].category}">
                <img src="${data[i].image}">
                <div class="des-contaner">
                    <div class="title">${data[i].title}</div>
                    <div class="price"><span>${data[i].price}<span><span>đ</span></div>
                    <div class="cart_button"><ion-icon name="cart-outline"></ion-icon></div>
                </div>
            <div>
            `
            document.querySelector('.products').innerHTML+=div;
        }
    


