
let totalAmount = '5000';

function updateBanlance(id, amount) {
    let totalAmount = parseFloat(amount);
    let newAmount = document.getElementById(id).innerText = `${totalAmount.toFixed(2)}`;
    return parseFloat(newAmount);
}

let accountBalance = updateBanlance('account-balance', totalAmount);

document.getElementById('donate-noakhali').addEventListener('click', function () {
    const inputText = document.getElementById('donate-noakhali-field');
    const inputValue = parseFloat(inputText.value);

    let balance = parseFloat(document.getElementById('noakhali-balance').innerText);

    balance += inputValue;
    accountBalance -= inputValue;
    let newBalance = updateBanlance('noakhali-balance', balance);
    let newAmount = updateBanlance('account-balance', accountBalance)
})