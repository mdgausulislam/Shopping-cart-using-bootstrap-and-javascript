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