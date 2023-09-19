document.getElementById('case-btn-plus').addEventListener('click',function(){
    // console.log('click plus');
    const previousInputItems=inputFieldValueById('case-input-field');
    const newInputItems= previousInputItems+1;
    setTextInputById('case-input-field',newInputItems);
    updateCaseTotalNumber(newInputItems)

    // const inputField=document.getElementById('input-field');
    //     const newInputItemsString=inputField.value;
    //     const previousInputItems=parseInt(newInputItemsString);
    //     const newInputItems= previousInputItems+1;
    //     inputField.innerText=newInputItems;
})

document.getElementById('case-btn-minus').addEventListener('click',function(){
    const previousInputItems=inputFieldValueById('case-input-field');
    const newInputItems= previousInputItems-1;
    setTextInputById('case-input-field',newInputItems);  
    updateCaseTotalNumber(newInputItems);
})