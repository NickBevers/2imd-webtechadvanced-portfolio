//used API's:
// https://api.bol.com/mondkapjesstore/inventory
// https://coronavirus-19-api.herokuapp.com/countries/Belgium

class App{
    constructor(){
        this.getData();
    }

    getData(){
        fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY")
        .then(response => response.json())
        .then( data => {
            console.log(data);
            let pound = data.rates.GBP;
            console.log(pound);
            let dollar = data.rates.USD;
            console.log(dollar);
            let yen = data.rates.JPY;
            console.log(yen);
        })
        .catch(err => console.error(err));

        
        fetch("https://coronavirus-19-api.herokuapp.com/countries/Belgium")
        .then(response => response.json())
        .then (data => {
            let cases = data.todayCases;
            console.log(cases);
            this.setAd(cases);
        });


    }

    setAd(cases){
        if (cases > 3000){
            document.querySelector(".ad").style.backgroundImage = "url(https://media.s-bol.com/RLLj3q3W9LGO/550x412.jpg)";
            document.querySelector(".ad").style.backgroundSize = "contain";
            document.querySelector(".ad").style.backgroundRepeat = "no-repeat";
        }
        else{
            document.querySelector(".ad").style.backgroundImage = "url(https://media.s-bol.com/g2PG1K4qqEL6/497x840.jpg)";
            document.querySelector(".ad").style.backgroundSize = "contain";
            document.querySelector(".ad").style.backgroundRepeat = "no-repeat";
        }
    }
}
let app = new App();