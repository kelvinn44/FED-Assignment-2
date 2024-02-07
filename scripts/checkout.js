let listCart = [];
let checkoutButton = document.querySelector('.buttonCheckout');
checkoutButton.addEventListener('click', function() {
    alert("Congratulations! You've completed the game!");
    listCart = [];
    document.cookie = "listCart=" + JSON.stringify(listCart)
});
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let discountHTML = document.querySelector('.discount');
    let totalQuantity = 0;
    let totalPrice = 0;
    let discount = 0;
    // if has product in Cart
    if(listCart){
        //extracting discount
        if (localStorage.getItem('isLoggedIn') === 'true'){
            $.ajax({
                type: "GET",
                url: "https://fedproject-3bfe.restdb.io/rest/account",
                headers: {
                "Content-Type": "application/json",
                "x-apikey": "65b1b9947d4b3ea75e7e0415",
                },
                success: function (data) {
                let user = data.find(
                    (user) => user.Email == localStorage.getItem('Email') && user.Password == localStorage.getItem('Password')
                );
                if (user) {
                    let ObjID = user._id; // ObjectID
                    let currentScore = user.Score;
                    console.log("User ObjectID:", ObjID);
                    console.log(user.Name);

                    discount = (currentScore * 0.10).toFixed(2)
                    console.log(discount);

                    discountHTML.innerText = '$' + discount;
                } else {
                    console.log("User not found");
                }
                
              
                },
                error: function (error) {
                console.log(error);
                },
            });
        }


        // writing checkout page html
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
                
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
    
}