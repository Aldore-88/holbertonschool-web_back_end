export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

[Symbol.toPrimitive](data) {
    if (data === 'number') {
        return this._size;
    }
    if (data === 'string') {
        return this._location;
    }
    return this.toString();
    }
}