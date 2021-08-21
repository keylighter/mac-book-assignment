

//storage ,memory,delivery feature cost calculate 

function updateFeature(feature, price) {
    const featureCost = document.getElementById(feature + '-cost');

    featureCost.innerText = price;
    calculateTotal();
}

//applying the promocode and get final price

const promoButton = document.getElementById('promo-button');
promoButton.addEventListener('click', function () {
    let totalPrice = document.getElementById('total-price');
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const subTotal = document.getElementById('sub-total');
    if (promoInputValue == 'stevekaku') {
        totalPrice = parseInt((subTotal.innerText * 80) / 100);

        console.log(totalPrice);

        document.getElementById('total-price').innerText = totalPrice;
        promoInput.value = '';
    }

})

//calculate subtotal cost

function calculateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const subTotal = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);

    document.getElementById('sub-total').innerText = subTotal;

}

// delivery  calculate 

document.getElementById('fast-delivery').addEventListener('click', function () {

    updateFeature('delivery', 20);
})
document.getElementById('late-delivery').addEventListener('click', function () {

    updateFeature('delivery', 0);

})

// storage calculation 

document.getElementById('small-storage').addEventListener('click', function () {
    updateFeature('storage', 0)
})
document.getElementById('medium-storage').addEventListener('click', function () {
    updateFeature('storage', 100);
})
document.getElementById('large-storage').addEventListener('click', function () {
    updateFeature('storage', 180);
})

//memory  calculate

document.getElementById('small-memory').addEventListener('click', function () {
    updateFeature('memory', 0);
})

document.getElementById('medium-memory').addEventListener('click', function () {
    updateFeature('memory', 180);
})























/* // delivery cost calculate

document.getElementById('fast-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');

    deliveryCost.innerText = 20;
})
document.getElementById('late-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');

    deliveryCost.innerText = 0;
})

//storage cost calculate

document.getElementById('small-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
})
document.getElementById('medium-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
})
document.getElementById('large-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
})

//memory cost calculate

document.getElementById('small-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
})

document.getElementById('medium-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
}) */