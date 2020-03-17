 class Parents{
     constructor(){
         this.fathername = "Schwerznegger"
     }
 }
class Child extends Parents{
    constructor(name){
        super();
        this.name = name ;
    }

    getFullName(){
        return this.name + " "+ this.fathername;
    }
}

const baby= new Child("Arnold");
console.log(baby.getFullName());
