let carts=document.querySelectorAll('.add-cart');


let products = [
    {
        name: 'Maniac',
        tag: 'kids1',
        price: 799,
        inCart: 0,
        id: 1
    },
    {
        name: 'H&M',
        tag: 'kids2',
        price: 599,
        inCart: 0
    },
    {
        name: 'StyleStone',
        tag: 'kids3',
        price: 2999,
        inCart: 0
    },
    {
        name: 'Wish Karo',
        tag: 'kids4',
        price: 2999,
        inCart: 0
    },
    {
        name: 'GERUA',
        tag: 'w1',
        price: 1999,
        inCart: 0
    },
    {
        name: 'STREET 9',
        tag: 'w2',
        price: 1699,
        inCart: 0
    },
    {
        name: 'STREET 9',
        tag: 'w3',
        price: 1499,
        inCart: 0
    },
    {
        name: 'RARE',
        tag: 'w4',
        price: 2099,
        inCart: 0
    },
    {
        name: 'Roadster',
        tag: 'm1',
        price: 1099,
        inCart: 0
    },
    {
        name: 'HRX by Hrithik Roshan',
        tag: 'm2',
        price: 999,
        inCart: 0
    },
    {
        name: 'Calvin Klein Jeans',
        tag: 'm3',
        price: 1559,
        inCart: 0
    },
    {
        name: 'Kook N Keech Marvel',
        tag: 'm4',
        price: 999,
        inCart: 0
    },
]



for (let i=0; i<carts.length;i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}



function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart span').textContent = productNumbers+1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart =1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
   let cartCost = localStorage.getItem('totalCost');
   
  console.log("My cartCost is", cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost+product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}
// for(var i=0;i<productsInCart.length; i++) {
//     var button = productsInCart[i];
//     button.addEventListener('click', function(event){
//         var buttonClicked = event.target;
//         buttonClicked.parentNode.parentNode.parentNode.childNodes[1].remove();
//     })
// }


function decreaseNumber() {
    
    
        
    
}
function increaseNumber() {
    let inCart = localStorage.getItem("productsInCart");
    inCart = JSON.parse(inCart);
    console.log(inCart);
    inCart+=1;
    inCart = JSON.parse(inCart);
    console.log(inCart);
}

for (let i=0; i<carts.length;i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
// const deleteTask = (e) => {
//     if (!e) e = window.event;
//     const targetID = e.target.getAttribute("name");
//     const type = e.target.tagName;
//     const removeTask = state.taskList.filter(({ id }) => id !== targetID);
//     state.taskList = removeTask;
// };
 
    

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            // productContainer.innerHTML += `
            // // <div class="product" style="border-bottom:4px solid lightgrey">
            // // <input type="button" class="remove-item" value="X" /><i class="far fa-times-circle icon"></i>
            // // <img src="./assests/${item.tag}.png" class="image-thumbnail" style="height:170px; width:150px; padding:5px;">
            // // <span>${item.name}</span>
            // // <span  style="margin-left:4rem; ">&#x20B9; ${item.price}.00</span>
            // // <span style="margin-left:17rem; ">
            // // <i class="fas fa-minus"></i><span style="margin-left:1rem;">${item.inCart}</span>
            
            // // </span>
            // // <span style="margin-left:1rem;">
            // // <i class="fas fa-plus"></i>
            // // </span>
            // // <span style="margin-left:13rem;">
            // // &#x20B9; ${item.inCart * item.price}.00
            // // </span>
            // // </div>
            productContainer.innerHTML += `
            <div class="container-fluid">
        <div class="row">
        <div class="col-md-10 col-11 mx-auto">
        <div class="row mt-5 gx-3">
        <!-- left side div -->
        <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
        <div class="card p-4">
        
        <div class="row">
        <!-- cart images div -->
        <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
        <img src="./assests/${item.tag}.png" class="img-fluid" alt="cart img">
        </div>
            <div class="col-md-7 col-11 mx-auto px-4 mt-2">
    <div class="row">
    <!-- product name  -->
    <div class="col-6 card-title">
    <h1 class="mb-4 product_name">${item.name}</h1>
    
    </div>
            <div class="col-6">
    <ul class="pagination justify-content-end set_quantity" style="margin-top:50%;">
    <li class="page-item" >
    <button class="page-link " onclick="decreaseNumber('textbox','itemval')">
    <i class="fas fa-minus"></i> </button>
    </li>
    <li class="page-item" style="width:35px"><span style="margin-left:1rem;">${item.inCart}</span>
    </li>
    <li class="page-item">
    <button class="page-link" onclick="increaseNumber('textbox','itemval')"> <i class="fas fa-plus"></i></button>
    </li>
    </ul>
    </div>
    <div class="row">
    <div class="col-8 d-flex justify-content-between remove_btn" id="rmv">
    <button class="btn" ><i class="fas fa-trash-alt"></i> REMOVE ITEM</button>
    </div>
    <div class="col-4 d-flex justify-content-end price_money">
    <h5><span id="itemval">&#x20B9; ${item.price}</span></h5>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    
                  
            `;
        });

        // productContainer.innerHTML += `
        //     <div class="cartTotalContainer">
        //         <h4 class="cartTotalTitle">
        //         Cart Total
        //         </h4>
        //         <h4 class="cartTotal">
        //         &#x20B9; ${cartCost}.00
        //         </h4>
        // `;
        productContainer.innerHTML += `
        <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-10 mt-md-5">
    <div class="right_side p-3 shadow bg-white">
    <h2 class="product_name mb-5">Total Amount</h2>
    <div class="price_indiv d-flex justify-content-between">
    <p>Product amount</p>
    <p><span id="product_total_amt">&#x20B9; ${cartCost}.00</span></p>
    </div>
    <button class="btn btn-primary text-uppercase align-item-center">Checkout</button>
    `
    }
}

onLoadCartNumbers();
displayCart();