///blank class declare
// class Student{

// }
// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);


///create constructor
// class Student{
//     constructor(){
//         this.id= 1;
//         this.name = "Jannat";
//     }
// }
//const student1 = new Student();
//const student2 = new Student();
//console.log(student1, student2);

// declare dynamic constructor
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "DNS";
    }
}
const student3 = new Student(1, "Hasib");
const student4 = new Student(2, "Salam");
console.log(student3, student4);
