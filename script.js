const products = document.querySelectorAll('.product button');
const cartList = document.querySelector('#cart ul');
const totalDisplay = document.querySelector('#cart h3');
let total = 0;

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


function updateTotal() {
    totalDisplay.textContent = `Total: ${formatCurrency(total)}`;
}


products.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product'); 
        const productName = productElement.querySelector('h3').textContent; 
        const productPrice = parseFloat(
            productElement.querySelector('p').textContent.replace('R$', '').replace(',', '.')
        ); 
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${formatCurrency(productPrice)}`;
        cartList.appendChild(cartItem);
        total += productPrice;
        updateTotal();
    });
});
updateTotal();
