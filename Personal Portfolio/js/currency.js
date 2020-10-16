function currency(){
    let selector = document.getElementById("currency-selector").value;
    let list = document.getElementById("price");
    let currencytext = document.getElementsByClassName("currencytext");

    if (selector == "SGD") {
        for (let i = 0; i < list.length; i++){
            currencytext[i].innerHTML = "Price : SGD";
            let sgd = price[i];
            list[i].innerHTML = sgd;
        }
    }
    if (selector == "USD") {
        let usd;
        for (let i = 0; i < list.length; i++){
            currencytext[i].innerHTML = "Price : USD";
            let usd = price[i] * 1.25;
            list[i].innerHTML = usd;
}
    }
}
