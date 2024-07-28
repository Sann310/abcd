let items = [];

function setRandomPrice() {
    var accessory = document.getElementById('accessory').value;
    var priceInput = document.getElementById('price');
    var prices = {
        "Car Stereo": getRandomPrice(2000, 5000),
        "GPS Navigation": getRandomPrice(3000, 6000),
        "Seat Covers": getRandomPrice(500, 1500),
        "Floor Mats": getRandomPrice(300, 1000),
        "Car Alarm": getRandomPrice(1000, 3000)
    };

    priceInput.value = prices[accessory];
}

function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function addItem() {
    var accessory = document.getElementById('accessory').value;
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    items.push({ accessory, price, quantity });

    displayItems();
}

function displayItems() {
    var itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = '';
    items.forEach((item, index) => {
        itemsDiv.innerHTML += 
            `<p>${index + 1}. ${item.accessory} - ${item.price} THB x ${item.quantity}</p>`;
    });
}

function calculateVAT() {
    var vatRate = 0.07;
    var totalPrice = 0;
    var totalVAT = 0;

    items.forEach(item => {
        var itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        totalVAT += itemTotal * vatRate;
    });

    document.getElementById('result').innerHTML = 
        'Total Price: ' + totalPrice.toFixed(2) + ' THB<br>' + 
        'Total VAT (7%): ' + totalVAT.toFixed(2) + ' THB<br>' + 
        'Total Price including VAT: ' + (totalPrice + totalVAT).toFixed(2) + ' THB';
}
