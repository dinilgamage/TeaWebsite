let items_ordered;


//get references to interactive elements
let txtOutput = document.getElementById("output");
let loyaltypoints = localStorage.getItem("Loyalty");

//add eventlistners and handlers
let btnAddToCart = document.querySelector(".addtocart");
btnAddToCart.addEventListener("click", AddtoCart);

let btnAddToFav = document.querySelector(".addtofav");
btnAddToFav.addEventListener("click",AddToFav);

let btnAddToFav1 = document.getElementById("addtofav1");
btnAddToFav.addEventListener("click",AddToFav);
let btnAddToFav2 = document.getElementById("addtofav2");
btnAddToFav.addEventListener("click",AddToFav);
let btnAddToFav3 = document.getElementById("addtofav3");
btnAddToFav.addEventListener("click",AddToFav);

let btnOrderFav = document.getElementById("orderfav");
btnOrderFav.addEventListener("click",OrderFav);

let btnLoyaltyPoint = document.getElementById("loyaltypoint");
btnLoyaltyPoint.addEventListener("click",LoyaltyPoint);

function AddtoCart (){
    location.reload()
}

var count = 0;
btnAddToCart.onclick = function (){
    count++;
    txtOutput.innerHTML = count;
}

function LoyaltyPoint(){
     
    if (items_ordered>=3){
        loyaltypoints= loyaltypoints + (items_ordered * 20)
        
    }
    else{
        loyaltypoints = loyaltypoints
    }
    localStorage.setItem("Loyalty" , loyaltypoints)
    alert(`You currently have ${loyaltypoints} !`);
}

function AddToFav(){
    if (btnAddToFav1.addEventListener("click")) {
        localStorage.setItem("fav" , "Gems and Jewelry")
    }
    else if (btnAddToFav2.addEventListener("click")){
        localStorage.setItem("fav" , "Cinnamon Sticks")
    }
    else if (btnAddToFav3.addEventListener("click")){
        localStorage.setItem("fav" , "Antiques")
    }
}