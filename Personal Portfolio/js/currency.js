function currency(){
    let selector = document.getElementById("currency-selector").value;
    let list = document.getElementsByClassName("price");
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
            let usd = price[i] * 0.74;
            list[i].innerHTML = usd.toFixed(2);
}
    }
    if (selector == "EURO") {
        let euro;
        for (let i = 0; i < list.length; i++){
            currencytext[i].innerHTML = "Price : EURO";
            let euro = price[i] * 0.63;
            list[i].innerHTML = euro.toFixed(2);
}
    }
}
