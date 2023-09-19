function inputFieldValueById(inputElement){
    const inputField=document.getElementById(inputElement);
    const newInputItemsString=inputField.value;
    const inputItem=parseInt(newInputItemsString);
    return inputItem;
}
function setTextInputById(inputElement,newValue){
    const textElements=document.getElementById(inputElement);
    textElements.value=newValue;

}
function updateCaseTotalNumber(newInputItems){
    const newTotalPrice=newInputItems * 1219;
    const newTotalPriceElements=document.getElementById('total-price');
    newTotalPriceElements.innerText=newTotalPrice;
}
