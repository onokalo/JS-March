class Account {
    constructor (number, cash, currency) {
        this.number = number;
        this.cash = cash;
        this.currency = currency;
    }

    withdrawal(){
        this.cash += cash;
    }
    
    depositing(){
        this.cash -= cash;
    }

    ShowAccount(){
        console.log("Number: ",this.number, "Cash: ",this.cash, "Currency: ",this.currency)
    }
}

module.exports = Account;