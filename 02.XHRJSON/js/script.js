window.addEventListener('load', Init);

function Init() {
    let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    let swapiURL = "https://swapi.co/api/people/2";
    // Request(swapiURL, ShowSwapiPerson);
    Request(url, GetCurrency);
}

function Request(url, callback) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            let errStatus = xhr.status;
            let errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
}

function GetCurrency(currency) {
    //console.log(currency);
    let currencyData = {
        usd_uah_buy: currency[0].buy,
        usd_uah_sell: currency[0].sale,
        eur_uah_buy: currency[1].buy,
        eur_uah_sell: currency[1].sale,
        rub_uah_buy: currency[2].buy,
        rub_uah_sell: currency[2].sale,
        btc_usd_buy: currency[3].buy,
        btc_uah_sell: currency[3].sale
    }
    PrintCurrency(currencyData);
}

function PrintCurrency(currencyData) {
    console.log(currencyData);
    table.rows[0].cells[1].textContent=("Купівля");
    table.rows[0].cells[1].style=("font-size: 13px");
    table.rows[0].cells[2].textContent=("Продаж");
    table.rows[0].cells[2].style=("font-size: 13px");
    table.rows[1].cells[0].textContent=("USD");
    table.rows[2].cells[0].textContent=("EUR");
    table.rows[3].cells[0].textContent=("RUB");
    table.rows[4].cells[0].textContent=("BTC");
    table.rows[1].cells[1].textContent=(currencyData.usd_uah_buy);
    table.rows[2].cells[1].textContent=(currencyData.eur_uah_buy);
    table.rows[3].cells[1].textContent=(currencyData.rub_uah_buy);
    table.rows[4].cells[1].textContent=(currencyData.btc_usd_buy);
    table.rows[1].cells[2].textContent=(currencyData.usd_uah_sell);
    table.rows[2].cells[2].textContent=(currencyData.eur_uah_sell);
    table.rows[3].cells[2].textContent=(currencyData.rub_uah_sell);
    table.rows[4].cells[2].textContent=(currencyData.btc_uah_sell);
}

function ShowSwapiPerson(atm) {
    console.log(atm);
}

var root = document.getElementById("root");
var table = document.createElement("table");
table.className = "table-style";
var th = document.createElement("th");
th.className = "th";
th.textContent = ("Курси валют");
table.append(th);
    for(let i=0; i<5; i++){
        var tr = document.createElement("tr");
            for(let i=0; i<3; i++){
                var td = document.createElement("td");
                td.className = "td-style";
                tr.append(td);
            }
        table.append(tr);
    }
root.append(table);