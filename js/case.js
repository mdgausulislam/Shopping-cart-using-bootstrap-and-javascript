document.getElementById('case-btn-plus').addEventListener('click',function(){
    const previousInputItems=inputFieldValueById('case-input-field');
    const newInputItems= previousInputItems+1;
    setTextInputById('case-input-field',newInputItems);
    updateCaseTotalNumber(newInputItems);
    calculateSubTotal()
})

document.getElementById('case-btn-minus').addEventListener('click',function(){
    const previousInputItems=inputFieldValueById('case-input-field');
    const newInputItems= previousInputItems-1;
    setTextInputById('case-input-field',newInputItems);  
    updateCaseTotalNumber(newInputItems);
    calculateSubTotal();
})