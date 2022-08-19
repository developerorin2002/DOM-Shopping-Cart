
const cart = [];


function display (cart) {
    let totalPrice = 0;
    const tableBody = document.getElementById('products-cart');
    tableBody.innerHTML = ' ';
    
    for (let i = 0; i<cart.length; i++) {
        const productName = cart[i].productName;
        const productPrice = cart[i].productPrice;
        totalPrice = totalPrice + productPrice;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${productName}</td>
        <td>${productPrice}</td>
        `
        tableBody.appendChild(tr);
    };

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${cart.length}</th>
        <td>Total Price : </td>
        <td>${totalPrice}</td>
    
    `
    tableBody.appendChild(tr)
}


function addToCart (element) {
    // access product Name 
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productPrice);
    const allProduct = {
        productName : productName,
        productPrice : parseFloat(productPrice)
    };
    // push in array to show how product are added to display 
    cart.push(allProduct);
    // console.log(cart.length);
    // display total product
    document.getElementById('total-products').innerText = cart.length;
    display(cart);
}