function getProducts() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        //document.getElementById("p2").innerHTML = myObj;
        append_json(myObj);

        //callback(myObj);
      }
    };

    ajaxRequest.open(
      "GET",
      "http://127.0.0.1:5500/Personal%20Portfolio/html/productCatalog.json",
      true
    );
    ajaxRequest.send();
    /*fetch(
      "http://127.0.0.1:5500/Personal%20Portfolio/html/productCatalog.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));*/
    function append_json(data) {
      let table = document.getElementById("productData");
      data.forEach(function (object) {
        let tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" +
          object.ID +
          "</td>" +
          "<td>" +
          object.Name +
          "</td>" +
          "<td>" +
          object.Catergory +
          "</td>" +
          "<td>" +
          object.Price +
          "</td>";
        table.appendChild(tr);
      });
    }
  }

  function getProductsEuro(callback) {
    var ajaxRequestEuro = new XMLHttpRequest();
    ajaxRequestEuro.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let myObjEuro = JSON.parse(this.responseText);
        //document.getElementById("p2").innerHTML = myObj;
        append_json(myObjEuro);
      }
    };
    ajaxRequestEuro.open(
      "GET",
      "http://127.0.0.1:5500/Personal%20Portfolio/html/euroProductCat.json",
      true
    );
    ajaxRequestEuro.send();
    function append_json(data) {
      let table = document.getElementById("productData");
      data.forEach(function (object) {
        let tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" +
          object.ID +
          "</td>" +
          "<td>" +
          object.Name +
          "</td>" +
          "<td>" +
          object.Catergory +
          "</td>" +
          "<td>" +
          object.Price +
          "</td>";
        table.appendChild(tr);
      });
    }
  }
