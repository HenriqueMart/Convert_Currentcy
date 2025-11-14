let inputUser, optionConvert, convertValue, convert;

//Valores de câmbio
let USD = 5.29;
let EUR = 6.14;
let JPY = 0.034;
let ARS = 0.038;
let CNY = 0.74;


function onConvertValue(optionConvert, convertValue) {
    try{
        convert = inputUser.value * convertValue;
        document.querySelector("#content_convert p").innerHTML = `${CurrencyBRL(convert.toFixed(2)).replace("R$", "")} Reais`;
        document.querySelector("#content_convert h2").innerHTML = `${optionConvert} 1 =  ${CurrencyBRL(convertValue.toFixed(2))} Reais`;
    }catch(error){
        alert("Ocorreu um erro: " + error.message);
    }0
}

function CurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
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
            onConvertValue(optionConvert, USD);
        break;
        case "EUR":
            onConvertValue(optionConvert, EUR);
        break;
        case "JPY":
            onConvertValue(optionConvert, JPY);
        break;
        case "ARS":
            onConvertValue(optionConvert, ARS);
        break;
        case "CNY":
            onConvertValue(optionConvert, CNY);
        break;
        default:
            alert("Opção inválida");
    } 
})