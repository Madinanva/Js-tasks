// task1
var array = [11, 12, 13, 14],
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) {
    p *= array[i];
}
console.log('Product :  ' + p);


// task2
function Calculate() {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    alert(`Cavab : ${x * y}`)
}
console.log(Calculate())


// task3
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides`);
    }
}


//   task4
class Student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        if (marks < 0 || marks > 100) {
            alert("Invalid Marks");
        }
        else {
            this.marks = marks;
        }
    }
}