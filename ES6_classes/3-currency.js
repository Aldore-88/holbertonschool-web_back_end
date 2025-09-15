export default class Currency{
    constructor(code, name){
        this._symbol = code;
        this._currencyName = name;
    }

// getter setter currency symbol
    get code(){
        return this._code;
    }

    set code(newSymbol){
        this._code = newSymbol;
    }

// getter setter currencyName
    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    displayFullCurrency(){
        return (`${this._currencyName} (${this._symbol})`);
    }
}
