export default class HolbertonCourse{
    constructor(name, length, students){
        this.name - name;
        this.length = length;
        this.students = students;
    }

    //name getter setter
    get name(){
        return this._name;
    }

    set name(NewName){
        if (typeof NewName === 'string'){
            this._name = NewName;
        }
        else {
            throw new TypeError('Name must be a string');
        }
    }

    //length getter setter
    get length(){
        return this._length;
    }

    set length(NewLength){
        if (typeof NewLength === 'number'){
            this._length = NewLength;
        }
        else {
            throw new TypeError('Length must be a number')
        }
    }

    //student getter setter
    

}