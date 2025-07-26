// Introduction to js

console.log("\t\t\t\t\thello js dev");

// variables in js
{
    let fullName = "Aryan Kandpal";
    let rollNo = 16;
    let cgpa = 7.86;
    let isPass = true;
    let back = null;
    let bloodGroup = undefined;

    //console.log("Name : ", fullName, "\nRoll No. : ", rollNo, "\nMarks : ", cgpa, "\nPass : ", isPass, "\nBack : ", back, "\nBlood Group : ", bloodGroup);
}

// datatypes in js
{
    {
        // primitive datatypes are of 7 types i.e. Number, String, Boolean, Null, BigInt, Symbol


        let num = 45;
        let str = "Hello";
        let decimal = 46.35;
        let opinion = true;
        let a = null;
        let b = undefined;

        // console.log("the value is",num,"and is type of",typeof(num));
        // console.log("the value is",str,"and is type of",typeof(str));
        // console.log("the value is",decimal,"and is type of",typeof(decimal));
        // console.log("the value is",opinion,"and is type of",typeof(opinion));
        // console.log("the value is",a,"and is type of",typeof(a));
        // console.log("the value is",b,"and is type of",typeof(b));

    }

    {
        // non-primitive datatypes

        const student = {
            fullName: "Aryan Kandpal",
            age: 20,
            course: "BCA",
            cgpa: 7.86,
            isPass: true
        };

        //console.log("the obj is \n",student,"\nand is type of",typeof(student))

    }
}

// Operators
{
    let a = 45;
    let b = 23;
    let c = "45"
    {
        //Arithmetic Operator

        /*
            console.log("\nvalue of a : ",a," and its type is ",typeof(a));
            console.log("value of b : ",b," and its type is ",typeof(b));
            console.log("value of c : ",c," and its type is ",typeof(c));
        */
    }

    {
        //binary operator
        /*
            console.log("Addition : ",a+b);
            console.log("Subtraction : ",a-b);
            console.log("Multiplication : ",a*b);
            console.log("Division : ",a/b);
            console.log("Remainder : ",a%b);
            console.log("exponent : ",a**2);
        */
    }

    {
        //unary operator
        /*
            console.log("post increment : ",a++);
            console.log(a);
            console.log("pre increment : ",++a);
            console.log("post decrement : ",b--);
            console.log(b);
            console.log("pre decrement : ",--b)
        */
    }

    {
        //comparison operator
        /*
            console.log("\na = ",a," and b = ",b," are they equal : ",a==b);
            console.log("a = ",a," and b = ",b," are they not equal : ",a!=b);
            console.log("a = ",a," and c = ",c," are they equal : ",a==c);
            console.log("a = ",a," and c = ",c," are they equal : ",a!=c);
            console.log("\na = ",a," and c = ",c," are they equal : ",a===c);
            console.log("a = ",a," and c = ",c," are they equal : ",a!==c);
            console.log("\na = ",a," and b = ",b," is a is greater than b : ",a>b);
            console.log("a = ",a," and b = ",b," is a is smaller than b : ",a<b);
            console.log("a = ",a," and b = ",b," is a is smaller than & equal to b : ",a<=b);
            console.log("a = ",a," and b = ",b," is a is greater than & equal to b : ",a>=b);
        
        */
    }

    {
        //Logical Operator

        let cond1 = (a === b);
        let cond2 = (a > b);
        /*
            console.log("(a === b) && (a > b) ",cond1 && cond2);
            console.log("(a === b) || (a > b) ",cond1 || cond2);
            console.log("!(a === b)", !(cond1));
        */
    }
}

// conditional statement
{

    let age = 20;
    {
        //if statement

        /*
            if (age<18){
                console.log("you are not eligible.");
            }
            if(age>=18){
                console.log("you are eligible");
            }
        */
    }

    {
        //if-else statement

        let button = "ON";
        /*
            if(button === "ON"){
                console.log("bulb glow");
            }
            else{
                console.log("bulb not glow");
            }
        */
    }

    {
        // else-if statement

        let num1 = 45;
        let op = "=";
        let num2 = 25;
        /*
            if (op === "+"){
                console.log("addition of ",num1," and ",num2," is ",num1+num2);
            }
            else if(op === "-"){
                console.log("Subtraction of ",num1," and ",num2," is ",num1-num2);
            }
            else if(op === "*"){
                console.log("multiplication of ",num1," and ",num2," is ",num1*num2);
            }
            else if(op === "/"){
                console.log("Division of ",num1," and ",num2," is ",num1/num2);
            }
            else{
                console.log("Invalid Input");
            }
        */
    }

    {
        // ternary operator

        let statement = age >= 18 ? "you eligible for driving" : "you not eligible for driving";
        /*
            console.log(statement);
        */
    }

}

// user-input
{

    /*
        let num = prompt("enter a number : ");
    
        if (num % 2 === 0){
            alert("this number is even");
            console.log("even")
        }
        else{
            alert("this number is odd");
            console.log("odd")
        }
    */

}

// Loops
{

    {
        // for loop
/*
        let num = 10;
        for (let i = 1; i <= num; i++) {
            {
                if (i % 2 === 0) {
                    console.log(i)
                }
            }
        }
*/
/*
        let sum = 0;
        for(let i = 1; i<= 5; i++){
            sum += i;
        }
        console.log(sum);
*/

    }

    {
        // While Loop
/*
        let i = 1;
        while(i<=5){
            console.log(i);
            i++;
        }
*/
    }

    {
        // do-while loop
/*
        let i = 1;
        
        do{
  
            console.log(i);
            i++;
        }
        while(i<=5);
*/
    }

    {
        // for-of loop
/*
       let str = "Aryan Kandpal";
        for(let i of str){
            console.log(i);
        }
*/
    }
        //for-in loop
        {
            let   student = {
                Name : "Aryan",
                course : "MCA",
                CGPA : 7.6,
                isPass : true
            };

            for()
        }

}