let inputUser, optionConvert, convertValue, convert;

function onConvertValue(){
    document.querySelector("#content_convert h2").innerHTML = `${optionConvert} 1 = R$ ${convertValue.toFixed(2)}`;
}

window.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    inputUser = document.querySelector("input[type='text']")
    inputUser.value = inputUser.value.replace(hasCharactersRegex, '');
});


window.addEventListener("submit", (evento) => {
    evento.preventDefault();
    optionConvert = document.querySelector("select").value;
    
    switch (optionConvert) {
        case "US":
            convertValue = 5.29;
        break;
        case "EUR":
            convertValue = 6.14;
        break;
        case "JPY":
            convertValue = 0.034;
        break;
        case "ARS":
            convertValue = 0.038;
        break;
        case "CNY":
            convertValue = 0.74;
        break;
        default:
            alert("Opção inválida");
    }
    onConvertValue();
    convert = inputUser.value * convertValue;
    document.querySelector("#content_convert p").innerHTML = `R$ ${convert.toFixed(2)} Reais`;
})
