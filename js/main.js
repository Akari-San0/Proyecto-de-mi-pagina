// Cart Open Close //
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeIcon = document.querySelector('#close-cart');
//open Cart//
cartIcon.onclick = () => {
    cart.classList.add("active")
};
//  Close Cart//
closeIcon.onclick = () => {
    cart.classList.remove("active")
};1