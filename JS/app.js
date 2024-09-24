
let totalAmount = '5000';

const historyElement = document.getElementById('history');
const donateContainer = document.getElementById('donate-container');

function addHistory(taka, title) {

    const newDiv = document.createElement('div');
    newDiv.className = "border-2 boreder-grary-200 rounded-xl bg-white mt-5 p-5 space-y-2";

    newDiv.innerHTML = `
        <p class="text-2xl font-bold"> ${taka} <span> Taka </span> <span> ${title} </span> </p>
        <p class="text-lg text-gray-400"> ${new Date()}</p>
     `

    historyElement.insertBefore(newDiv, historyElement.firstChild);

}

// addHistory(500, 'feni-title');

function updateBanlance(id, amount) {
    let totalAmount = parseFloat(amount);
    let newAmount = document.getElementById(id).innerText = `${totalAmount.toFixed(2)}`;
    return parseFloat(newAmount);
}

function inputValidation(inputValue, accountBalance) {

    if (inputValue.length == 0) {
        alert('Invalid Input!');
        return true;
    }

    for (let x of inputValue) {
        if (isNaN(x)) {
            alert('Invalid Input!');
            return true;
        }
    }

    if (inputValue < 0) {
        alert('Invalid Input!');
        return true;

    }
    else if (inputValue > accountBalance) {
        alert("don't have sufficient balance!");
        return true;
    }
    else {
        return false;
    }
}


let accountBalance = updateBanlance('account-balance', totalAmount);

const donateNoakhali = document.getElementById('donate-noakhali');
donateNoakhali.addEventListener('click', function () {
    const inputText = document.getElementById('donate-noakhali-field');


    if (inputValidation(inputText.value, accountBalance)) {
        document.getElementById('donate-noakhali-error').classList.remove('hidden');
        inputText.value = '';
        return;
    }

    const inputValue = parseFloat(inputText.value);

    let balance = parseFloat(document.getElementById('noakhali-balance').innerText);

    balance += inputValue;
    accountBalance -= inputValue;
    let newBalance = updateBanlance('noakhali-balance', balance);
    let newAmount = updateBanlance('account-balance', accountBalance)

    const title = document.getElementById('noakhali-title').innerText;

    addHistory(inputValue, title);

    document.getElementById('donate-noakhali-error').classList.add('hidden');
    document.getElementById('my_modal_1').showModal();
    inputText.value = '';
})

const donateFeni = document.getElementById('donate-feni');
donateFeni.addEventListener('click', function () {
    const inputText = document.getElementById('donate-feni-field');


    if (inputValidation(inputText.value, accountBalance)) {
        document.getElementById('donate-feni-error').classList.remove('hidden');
        inputText.value = '';
        return;
    }

    const inputValue = parseFloat(inputText.value);

    let balance = parseFloat(document.getElementById('feni-balance').innerText);

    balance += inputValue;
    accountBalance -= inputValue;
    let newBalance = updateBanlance('feni-balance', balance);
    let newAmount = updateBanlance('account-balance', accountBalance);

    const title = document.getElementById('feni-title').innerText;

    addHistory(inputValue, title);

    document.getElementById('donate-feni-error').classList.add('hidden');
    document.getElementById('my_modal_1').showModal();

    inputText.value = '';
})

const donateQuotaMovement = document.getElementById('donate-quota-movement');
donateQuotaMovement.addEventListener('click', function () {
    const inputText = document.getElementById('donate-quota-movement-field');

    if (inputValidation(inputText.value, accountBalance)) {
        document.getElementById('donate-quota-error').classList.remove('hidden');
        inputText.value = '';
        return;
    }

    const inputValue = parseFloat(inputText.value);

    let balance = parseFloat(document.getElementById('quota-movement-balance').innerText);

    balance += inputValue;
    accountBalance -= inputValue;
    let newBalance = updateBanlance('quota-movement-balance', balance);
    let newAmount = updateBanlance('account-balance', accountBalance);

    const title = document.getElementById('quota-title').innerText;

    addHistory(inputValue, title);

    document.getElementById('donate-quota-error').classList.add('hidden');
    document.getElementById('my_modal_1').showModal();

    inputText.value = '';
})



const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');

historyBtn.addEventListener('click', function () {

    historyBtn.classList.remove('text-gray-500');
    historyBtn.classList.add('bg-primary');

    donationBtn.classList.remove('bg-primary');
    donationBtn.classList.add('text-gray-500');

    historyElement.classList.remove('hidden');
    donateContainer.classList.add('hidden');

})

donationBtn.addEventListener('click', function () {
    donationBtn.classList.add('bg-primary');
    donationBtn.classList.remove('text-gray-500');

    historyBtn.classList.add('text-gray-500');
    historyBtn.classList.remove('bg-primary');

    historyElement.classList.add('hidden');
    donateContainer.classList.remove('hidden');
})