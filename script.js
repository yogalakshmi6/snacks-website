// // Navbar
//   let menu = document.querySelector('#menu-icon');
//   let navbar = document.querySelector('.navbar');

//   menu.onclick = () => {
//       navbar.classList.toggle('active');
//   }

//   window.onscroll = () => {
//       navbar.classList.remove('active');
//   }
//   // Dark Mode
//   let darkmode = document.querySelector('#darkmode');

//   darkmode.onclick = () => {
//       if(darkmode.classList.contains('bx-moon')){
//           darkmode.classList.replace('bx-moon','bx-sun');
//           document.body.classList.add('active');
//       }else{
//           darkmode.classList.replace('bx-sun','bx-moon');
//           document.body.classList.remove('active');
//       }
//   }

//   // Scroll Reveal
//   const sr = ScrollReveal ({
//       origin: 'top',
//       distance: '40px',
//       duration: 2000,
//       reset: true
//   });


//   sr.reveal(`.home-text, .home-img,
//               .about-img, .about-text,
//               .box, .s-box,
//               .btn, .connect-text,
//               .contact-box`, {
//       interval: 200
//   })
let cart = [];
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - ${item.price}`;
    cartItems.appendChild(listItem);
    totalPrice += item.price;
  });

  totalElement.textContent = `Total: ${totalPrice.toFixed(2)}`;
}
function abc()
{
    alert(totalElement.textContent);
    cartItems.innerHTML='';
    totalElement.textContent='';

}