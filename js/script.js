function getInputText(inputId){
    const inputText = document.getElementById(inputId);
    const inputTextValue = inputText.value;
    inputText.value = '';
    return inputTextValue;
     
}

function getInputNumber (inputId){
    const inputNumber = document.getElementById(inputId);
    const inputNumberString = inputNumber.value;
    const inputNumberInteger = parseFloat(inputNumberString);
    inputNumber.value = '';
    return inputNumberInteger;
}
function getTextNumber (textId){
    const textNumber = document.getElementById(textId);
    const textNumberString = textNumber.innerText;
    const textNumberInteger = parseFloat(textNumberString);
    return textNumberInteger;
}
