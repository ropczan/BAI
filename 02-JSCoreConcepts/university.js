names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let resultArray = [];
        for(let item of this.names){
            if(item.charAt(0) === letter.toUpperCase()){
                resultArray.push(item);
            }
        }
        return new Students(resultArray);
    }

    sort() {
        let resultArray = Array.from(this.names).sort();
        return new Students(resultArray);
    }

    get() {
        return new Students(this.names);
    }

    getFirst(n) {
        let resultArray = [];
        for(let i = 0; i < n; i++){
            resultArray.push(this.names[i]);
        }
        return new Students(resultArray);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



