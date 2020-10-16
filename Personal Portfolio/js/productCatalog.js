let xhttp = new XMLHttpRequest();
let txt = "";
let price = [];

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let productsCat = JSON.parse(this.responseText);

        for (let i=0; i <productsCat.length; i++){
            txt += '<a href ="' + productsCat[i].url +'">';
            txt +="<div class='products' id='" + productsCat[i].ID + "'>" + "Desc: " + productsCat[i].Name;
            txt += "<br>" + "Catergory: " + productsCat[i].Catergory;
            txt += "<p class='currencytext'>" + "Price: ($)" + "</p>" + "<p class = 'price'>" + productsCat[i].Price + "</p>" + "</div>";
            //txt += "<p class = 'price'>" + productsCat[i].Price + "</p>" + "</div>";
            price.push(productsCat[i].Price);
            
        }
        document.getElementById("container").innerHTML = txt;
        let img = document.createElement('img');
        
    }

}
xhttp.open("GET", "productCatalog.json", true);
xhttp.send();
