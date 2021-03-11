//used API's:
// https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY
// https://coronavirus-19-api.herokuapp.com/countries/Belgium

class App{
    constructor(){
        this.getData();
    }
    

    getData(){
        fetch("https://coronavirus-19-api.herokuapp.com/countries/Belgium")
        .then(response => response.json())
        .then (data => {
            let cases = data.todayCases;
            this.setAd(cases);
            this.fetchPrice(cases);
        });
    }

    fetchPrice(cases){
        fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY")
        .then(response => response.json())
        .then( data => {
            console.log(data);
            let pound = data.rates.GBP;
            let dollar = data.rates.USD;
            let yen = data.rates.JPY;

            if (cases > 4000) {
                let price = 8.9;
                console.log(cases);
                this.setPrice(cases, price, pound, dollar, yen);
            }
            else{
                let price = 14.95;
                this.setPrice(cases, price, pound, dollar, yen);
            }

        })
        .catch(err => console.error(err));
    }

    setAd(cases){
        if (cases > 4000){
            document.querySelector(".ad").style.backgroundImage = "url(https://media.s-bol.com/RLLj3q3W9LGO/550x412.jpg)";
            document.querySelector(".ad").style.backgroundSize = "contain";
            document.querySelector(".ad").style.backgroundRepeat = "no-repeat";
        }
        else{
            document.querySelector(".ad").style.backgroundImage = "url(https://media.s-bol.com/g2PG1K4qqEL6/497x840.jpg)";
            document.querySelector(".ad").style.marginLeft = "120px";
            document.querySelector(".ad").style.backgroundSize = "contain";
            document.querySelector(".ad").style.backgroundRepeat = "no-repeat";
        }
    }

    setPrice(cases, price, pound, dollar, yen){
        // console.log(cases);
        if (cases > 3000){
            document.querySelector(".title").innerHTML = `Bescherm jezelf en koop nu mondmaskers voor maar € ${price}`;
        }
        else{
            // console.log(cases);
            document.querySelector(".title").innerHTML = `Koop nu 3 partypoppers voor maar € ${price}`;
        }
        
        document.querySelector(".euro").innerHTML = `€ ${price}`;
        document.querySelector(".pound").innerHTML = `£ ${(price*pound).toFixed(2)}`;
        document.querySelector(".dollar").innerHTML = `$ ${(price*dollar).toFixed(2)}`;
        document.querySelector(".yen").innerHTML = `¥ ${(price*yen).toFixed(2)}`;
    }
}
let app = new App();