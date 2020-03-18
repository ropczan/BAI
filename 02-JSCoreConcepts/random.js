let getRandomNumberFromTheRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let func = () => {
    let array = [];
    while(array.length < 10) {
        array.push(getRandomNumberFromTheRange(5,20));
    }
    return console.log(array);
};

func();