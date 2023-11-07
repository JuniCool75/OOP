import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
let persons = new Person();
let programStart = async (persons) => {
    do {
        console.log("Welcome Sir");
        let ans = await inquirer.prompt({
            type: "list",
            message: "Would yo like to Talk",
            name: "select",
            choices: ["Self", "Student"],
        });
        if (ans.select == "Self") {
            console.log("hello");
            console.log("How are you");
        }
        if (ans.select == "Student") {
            let ans = await inquirer.prompt({
                type: "input",
                message: "Which Student like to Talk",
                name: "student",
            });
            let student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                let name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello My Name ${name.name}, and I Am Fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I Am ${student.name}, and I Am Fine Thankyou`);
            }
        }
    } while (true);
};
programStart(persons);
