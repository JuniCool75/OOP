import inquirer from "inquirer";

class Student{
    name: string
    constructor(n:string){
            this.name=n

    }
}
        class Person {
           students: Student[]=[]
            
           addStudent(obj:Student){
                this.students.push(obj)

    }
}

let persons = new Person();

let programStart = async (persons: Person) => {
do{

    console.log("Welcome Sir");

    let ans = await inquirer.prompt({
        type:"list",
        message: "Would yo like to Talk",
        name:"select",
        choices: ["Self" , "Student"],
    });

if  (ans.select == "Self") {
        console.log("hello");
        console.log("How are you");
    }
if(ans.select == "Student"){
        let ans = await inquirer.prompt({
                type: "input",
                message: "Which Student like to Talk",
                name: "student",
        });

        let student = persons.students.find(val => val.name == ans.student)
    if(!student){
        let name = new Student(ans.student)
        persons.addStudent(name)

        console.log(`Hello My Name ${name.name}, and I Am Fine`);
        console.log(persons.students);
        }

        if(student){
            console.log(`Hello I Am ${student.name}, and I Am Fine Thankyou`);
        } 
    }
}while(true)
};

programStart(persons);