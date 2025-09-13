export default class Currency{
    constructor(symbol, currencyName){
        this.symbol = symbol;
        this.currencyName = currencyName;
    }

// getter currency symbol
    get symbol(){
        return this._symbol;
    }

    set symbol(newSymbol){
        this._symbol = newSymbol;
    }

// getter currencyName
    get currencyName(){
        return this._currencyName;
    }

    set currencyName(name){
        this._currencyName = name;
    }

    displayFullCurrency(){
        return (`${this._currencyName} (${this._symbol})`);
    }
}
