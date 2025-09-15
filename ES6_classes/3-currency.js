export default class Currency{
    constructor(code, name){
        this._symbol = code;
        this._currencyName = name;
    }

// getter setter currency symbol
    get symbol(){
        return this._symbol;
    }

    set symbol(newSymbol){
        this._symbol = newSymbol;
    }

// getter setter currencyName
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
