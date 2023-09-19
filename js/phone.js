document.getElementById('btn-plus').addEventListener('click', function () {
    const previousInputItems = inputFieldValueById('input-field');
    const newInputItems = previousInputItems + 1;
    setTextInputById('input-field', newInputItems);
    updatePhoneTotalNumber(newInputItems);
    calculateSubTotal();

})

document.getElementById('btn-minus').addEventListener('click', function () {
    const previousInputItems = inputFieldValueById('input-field');
    const newInputItems = previousInputItems - 1;
    setTextInputById('input-field', newInputItems);
    updatePhoneTotalNumber(newInputItems);
    calculateSubTotal();
})
