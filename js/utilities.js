function inputFieldValueById(inputElement) {
    const inputField = document.getElementById(inputElement);
    const newInputItemsString = inputField.value;
    const inputItem = parseInt(newInputItemsString);
    return inputItem;
}

function updatePhoneTotalNumber(newInputItems) {
    const newTotalPrice = newInputItems * 1219;
    const newTotalPriceElements = document.getElementById('total-phone-price');
    newTotalPriceElements.innerText = newTotalPrice;
}

function updateCaseTotalNumber(newInputItems) {
    const newTotalPrice = newInputItems * 59;
    const newTotalPriceElements = document.getElementById('total-case-price');
    newTotalPriceElements.innerText = newTotalPrice;
}

function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalElementString = phoneTotalElement.innerText;
    const currentPhoneTotalElements = parseInt(currentPhoneTotalElementString);
    return currentPhoneTotalElements;
}

function setTextInputById(inputElement, newValue) {
    const textElements = document.getElementById(inputElement);
    textElements.value = newValue;
}

function setTextElementValueById(elementId, value) {
    const subTotalElements = document.getElementById(elementId);
    subTotalElements.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('total-phone-price');
    const currentCaseTotal = getTextElementValueById('total-case-price');


    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount=currentSubTotal+taxAmount;
    setTextElementValueById('final-total',finalAmount);
}
