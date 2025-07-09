// Introduction to js

console.log("hello js dev");

// variables in js
{
    let fullName = "Aryan Kandpal";
    let rollNo = 16;
    let cgpa = 7.86;
    let isPass = true;
    let back = null;
    let bloodGroup = undefined;

    console.log("Name : ", fullName, "\nRoll No. : ", rollNo, "\nMarks : ", cgpa, "\nPass : ", isPass, "\nBack : ", back, "\nBlood Group : ", bloodGroup);
}

// datatypes in js

{
    // primitive datatypes are of 7 types i.e. Number, String, Boolean, Null, BigInt, Symbol


    let num = 45;
    let str = "Hello";
    let decimal = 46.35;
    let opinion = true;
    let a = null;
    let b = undefined;
    
    console.log("the value is",num,"and is type of",typeof(num));
    console.log("the value is",str,"and is type of",typeof(str));
    console.log("the value is",decimal,"and is type of",typeof(decimal));
    console.log("the value is",opinion,"and is type of",typeof(opinion));
    console.log("the value is",a,"and is type of",typeof(a));
    console.log("the value is",b,"and is type of",typeof(b));

}

{
    // non-primitive datatypes

    const student = {
        fullName : "Aryan Kandpal",
        age : 20,
        course : "BCA",
        cgpa : 7.86,
        isPass : true
    };

    console.log("the obj is \n",student,"\nand is type of",typeof(student))

}