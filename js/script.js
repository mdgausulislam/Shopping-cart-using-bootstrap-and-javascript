document.getElementById('btn-plus').addEventListener('click',function(){
    // console.log('click plus');
    const previousInputItems=inputFieldValueById('input-field');
    const newInputItems= previousInputItems+1;
    setTextInputById('input-field',newInputItems);
    const newTotalPrice=newInputItems * 1219;
    const newTotalPriceElements=document.getElementById('total-price');
    newTotalPriceElements.innerText=newTotalPrice;

    // const inputField=document.getElementById('input-field');
    //     const newInputItemsString=inputField.value;
    //     const previousInputItems=parseInt(newInputItemsString);
    //     const newInputItems= previousInputItems+1;
    //     inputField.innerText=newInputItems;
})

document.getElementById('btn-minus').addEventListener('click',function(){
    const previousInputItems=inputFieldValueById('input-field');
    const newInputItems= previousInputItems-1;
    setTextInputById('input-field',newInputItems);
   
})