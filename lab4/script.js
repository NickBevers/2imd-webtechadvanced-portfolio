class App{
    constructor(){
        this.getData();
        this.setAd();
    }

    getData(){
        fetch("https://api.exchangeratesapi.io/latest?")
        .then(response => response.json())
        .then( data => console.log(data) )
        .catch(err => console.error(err));
    }

    setAd(){
        // https://api.bol.com/mondkapjesstore/inventory
        // https://coronavirus-19-api.herokuapp.com/countries/Belgium
    }
}
let app = new App();