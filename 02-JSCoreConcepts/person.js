class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = () => {
        return `${this.firstName} ${this.lastName.toUpperCase()}`;
    };

    getInitials = () => {
        return `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}.`;
    };
}

let Nowak = new Person('Jan','Nowak');
let Ropek = new Person('Bartek','Ropek');

console.log(Nowak.getFullName());
console.log(Nowak.getInitials());
console.log(Ropek.getFullName());
console.log(Ropek.getInitials());