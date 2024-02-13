
//----------------------- slide ------------------------

const swiper = new Swiper('.swiper', {

  loop: true,

 
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});
// ------------------ end slide ------------
let openShopping = document.querySelector('.fa-shopping-cart ')
let closeShopping = document.querySelector('.close')
let list = document.querySelector('.products')
let listCart = document.querySelector('.listCart')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openShopping.addEventListener('click' , ()=>{
  body.classList.add('side')
  
}) 

closeShopping.addEventListener('click' , ()=>{
  body.classList.remove('side')
  
}) 

const items = [
  {
   id:0,
   img:"img/product-01.jpg",
   title:"Esprit Ruffle Shirt",
   price:16.64,
   amount:1,
  },
  {
    id:1,
    img:"img/product-02.jpg",
    title:"Herschel supply",
    price:35.31,
    amount:1,
   },
   {
    id:2,
    img:"img/product-03.jpg",
    title:"Only Check Trouser",
    price:25.50,
    amount:1,
   },
   {
    id:3,
    img:"img/product-04.jpg",
    title:"Classic Trench Coat",
    price:75.00,
    amount:1,
   },
   {
    id:4,
    img:"img/product-05.jpg",
    title:"Front Pocket Jumper",
    price:34.75,
    amount:1,
   },
   {
    id:5,
    img:"img/product-06.jpg",
    title:"Vintage Inspired Classic",
    price:93.20,
    amount:1,
   },
   {
    id:6,
    img:"img/product-07.jpg",
    title:"Shirt in Stretch Cotton",
    price:52.66,
    amount:1,
   
   },
   {
    id:7,
    img:"img/product-08.jpg",
    title:"Pieces Metallic Printed",
    price:18.96,
    amount:1,

   },
   {
    id:8,
    img:"img/product-09.jpg",
    title:"Converse All Star Hi Plimsolls",
    price:75.00,
    amount:1,

   },
   {
    id:9,
    img:"img/product-10.jpg",
    title:" Femme T-Shirt In Stripe ",
    price:25.85,
    amount:1,

   },
   {
    id:10,
    img:"img/product-11.jpg",
    title:"Herschel supply",
    price:63.16,
    amount:1,

   },
   {
    id:11,
    img:"img/product-12.jpg",
    title:"Herschel supply",
    price:63.15
   },
   {
    id:12,
    img:"img/product-13.jpg",
    title:"T-Shirt with Sleeve",
    price:16.64,
    amount:1,

   },
   {
    id:13,
    img:"img/product-14.jpg",
    title:"Esprit Ruffle Shirt",
    price:18.4,   
     amount:1,

   },
   {
    id:14,
    img:"img/product-15.jpg",
    title:"Mini Silver Mesh Watch",
    price:86.6,
    amount:1,

   },
   {
    id:15,
    img:"img/product-16.jpg",
    title:"Square Neck Back",
    price:29.64,
    amount:1,

   }
]



let parentBox = document.querySelector('.parent-box')
let shopItems = " "
function renderItems(){
  items.forEach(item =>{
    shopItems += `
    <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="img">
      <img src="${item.img}" alt="photo" width="100%">
      <div class="view">
        <a href="#"> Quick View</a>
      </div>
    </div>
    <div class="text2">
      <div class="link">
        <a href="#">${item.title}</a> 
        <div class="cart" data-id="${item.id}">
        <a href="#"><i class="fas fa-shopping-cart" ></i></i></a>
         </div>
      </div>
    
      <p>$${item.price}</p>
    </div>
  </div>
    `
    parentBox.innerHTML = shopItems;
  })
}
renderItems()

let cartItems = []
let cartItemBody = ""
function renderCartItems(){
  cartItemBody = ''
  cartItems.forEach(item =>{
    cartItemBody +=`

    <div class="products">
    <ul class="listCart">
      <li>
        <div>
          <img src="${item.img}" alt="photo">
        </div>
        <div>
          <a href="#">${item.title}</a>
          <br>
          <span><button onclick="updataCartItem('decrease' , ${item.id}) ">-</button> ${item.amount} x 
         ${item.price} = ${item.price * item.amount} <button onclick="updataCartItem('increase' , ${item.id}) ">+</button> </span>
        </div>
        <div >
        <a href="#"onclick=" delateCartItem(${item.id})" ><i class="fa-solid fa-xmark close"  ></i></a>  
      
      </div>
      </li>


    </ul>
  </div>

    `
    document.querySelector('.products').innerHTML = cartItemBody 
  })
  document.querySelector('.cartcount').innerHTML = cartItems.length
}
renderCartItems()


// delate item 

function delateCartItem(id){
  cartItems = cartItems.filter(item => item.id !=id )
  renderCartItems()
  if (cartItems.length == 0) {
    document.querySelector('.products').innerHTML = ""
    
  }
}







let addCartButtons = document.querySelectorAll('.cart')

 addCartButtons.forEach(btn =>{
  btn.addEventListener('click' , e =>{
    let id = btn.dataset.id
    items.find(item =>{
      if (item.id == id) {
        if (cartItems.some(cartItem => cartItem.id == id)) {
          alert ('Product already added')
        }else{
          cartItems.push(item)
          renderCartItems()
        
        }
        
      }
    })
  }
  )
}

)



// up data function

function updataCartItem(action , id){
  cartItems.find(item => {
    if (item.id == id) {
      if (action == 'increase') {
        item.amount += 1
        
      }else{
        if (item.amount > 1) {
          item.amount -=1
        }
      }
      renderCartItems()
    }
  }) 

}