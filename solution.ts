//Problem 1
const filterEvenNumbers  = (numbers : number[]) : number[] => {
  return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//problem2

const reverseString =(str : string) : string => {

    return str.split("").reverse().join("");
}
reverseString("typescript");



//Problem3
type StringOrNumber  = string | number;


const checkType = (input : StringOrNumber) : string => {
    if(typeof input === "string"){
        return "String";
    }else{
        return "Number";
    }
}

checkType("Hello");
checkType(42);




//Problem 4



const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");




//Problem 5

interface Book {
    title : string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus =(book: Book)=>{
    return  {
        ...book,
        isRead: true
    };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
};


toggleReadStatus(myBook);


//Problem 6
class Person {
    name: string;
    age : number;
    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string,age:number, grade:string){
        super(name,age);
        this.grade = grade;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");


student.getDetails();



//Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}


getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);




