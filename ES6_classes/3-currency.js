export default class Currency{
    constructor(symbol, currencyName){
        this.symbol = symbol;
        this.currencyName = currencyName;
    }
    
    get symbol(){
        return this._symbol;
    }

    set symbol(newSymbol){
        this._symbol = newSymbol;
    }

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