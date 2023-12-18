const productPrices = {
    "water": 1.00,
    "bread": 2.50,
    "apple": 1.20,
    "pizza": 8.00
};

function calculateTotal() {
    // Get input values
    let waterAmount = parseInt(document.getElementById("water").value) || 0;
    let breadAmount = parseInt(document.getElementById("bread").value) || 0;
    let appleAmount = parseInt(document.getElementById("apple").value) || 0;
    let pizzaAmount = parseInt(document.getElementById("pizza").value) || 0;

    // Calculate individual prices
    let waterPrice = waterAmount * productPrices["water"];
    let breadPrice = breadAmount * productPrices["bread"];
    let applePrice = appleAmount * productPrices["apple"];
    let pizzaPrice = pizzaAmount * productPrices["pizza"];

    // Calculate total amount and total price
    let totalAmount = waterAmount + breadAmount + appleAmount + pizzaAmount;
    let totalPrice = waterPrice + breadPrice + applePrice + pizzaPrice;

    // Update the display for each product
    updateDisplay("waterRow", "Water", waterAmount, waterPrice);
    updateDisplay("breadRow", "Bread", breadAmount, breadPrice);
    updateDisplay("appleRow", "Apple", appleAmount, applePrice);
    updateDisplay("pizzaRow", "Pizza", pizzaAmount, pizzaPrice);

    
}

// Function to update the display for a product
function updateDisplay(rowId, product, amount, price) {
    let row = document.getElementById(rowId);
    if (amount > 0) {
        row.innerHTML = `${product} - Amount: ${amount}, Price: $${price.toFixed(2)}`;
    } else {
        row.innerHTML = ""; // Clear the content if the amount is 0
    }
}


function resetOutcome() {
    document.getElementById("water").value = 0;
    document.getElementById("bread").value = 0;
    document.getElementById("apple").value = 0;
    document.getElementById("pizza").value = 0;

    document.getElementById("waterRow").innerHTML = "";
    document.getElementById("breadRow").innerHTML = "";
    document.getElementById("appleRow").innerHTML = "";
    document.getElementById("pizzaRow").innerHTML = "";
    
  }