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
    get students(){
        return this._students;
    }

    set students(NewStudents){
        if (!Array.isArray(NewStudents)){
            throw new TypeError('Students must be an array');
        }
        if (!NewStudents.every(student => typeof student === 'string')){
            throw new TypeError('All students must be strings');
        }
        this._students = NewStudents;
    }
}