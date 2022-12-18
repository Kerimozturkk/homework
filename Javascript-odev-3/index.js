let btnContainer = document.querySelector(".btn-container");
let sectionCenter = document.querySelector(".section-center");


function filterBtnCreator(btnName){
    let fBtn = document.createElement("button");
    fBtn.classList.add("btn","btn-outline-dark","btn-item");
    fBtn.setAttribute("data-id",`${btnName}`);
    fBtn.textContent = `${btnName}`;
    return fBtn;
}

btnContainer.append(filterBtnCreator("All"));
btnContainer.append(filterBtnCreator("Korea"));
btnContainer.append(filterBtnCreator("Japan"));
btnContainer.append(filterBtnCreator("China"));


let allBtn = document.querySelector('[data-id="All"]');
let koreaBtn = document.querySelector('[data-id="Korea"]');
let japanBtn = document.querySelector('[data-id="Japan"]');
let chineBtn = document.querySelector('[data-id="China"]');





allBtn.addEventListener("click",function(){
    sectionCenter.innerHTML = "";
    menu.forEach(item => {
        sectionCenter.append(cardCreator(item));
    });
});

koreaBtn.addEventListener("click",function(){
    choicer("Korea");
});

japanBtn.addEventListener("click",function(){
    choicer("Japan");
});

chineBtn.addEventListener("click",function(){
    choicer("China");
});



function cardCreator({title,price,img,desc}){
    let menuItems = document.createElement("div");
    menuItems.classList.add("menu-items","col-lg-6","col-sm-12");

    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",`${img}`);
    cardImg.setAttribute("alt",`${title}`);
    cardImg.classList.add("photo");


    let menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");

    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");

    let menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.textContent = desc;

    
    let h4Title = document.createElement("h4");
    h4Title.textContent = title;

    let cardPrice = document.createElement("h4");
    cardPrice.classList.add("price");
    cardPrice.textContent = price;

    menuTitle.append(h4Title);
    menuTitle.append(cardPrice);

    menuInfo.append(menuTitle);
    menuInfo.append(menuText);

    menuItems.append(cardImg);
    menuItems.append(menuInfo);

    return menuItems;
}



function choicer(food){
    koreaFood = menu.filter(item => item.category == "Korea");
    japanFood = menu.filter(item => item.category == "Japan");
    chinaFood = menu.filter(item => item.category == "China");

    switch(food){
        case "Korea":
            sectionCenter.innerHTML = "";
            koreaFood.forEach(item => {
                sectionCenter.append(cardCreator(item));
            });
            break;
        case "Japan":
            sectionCenter.innerHTML = "";
            japanFood.forEach(item => {
                sectionCenter.append(cardCreator(item));
            });
            break;
        case "China":
            sectionCenter.innerHTML = "";
            chinaFood.forEach(item => {
                sectionCenter.append(cardCreator(item));
            });
            break;
        default:
            alert("Undefined Operation");
    }
}
