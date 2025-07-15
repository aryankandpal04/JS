// Practice

{
    //Q1 Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
/*
    let num = prompt("enter a number : ");
    num = Number(num);
    if (num % 5 === 0){
        alert(`this number ${num} is multiple by 5`);
        console.log(`this number ${num} is multiple by 5`);
    }
    else{
        alert(`this number ${num} is not multiple by 5`);
        console.log(`this number ${num} is multiple by 5`);
    }
*/
}

{
    /*
    Q2 Write a code which can give grades to students according to their scores.
      -  80-100, A
      -  70-89, B
      -  60-69, C
      -  50-59, D
      -  0-49, F
    */

    let marks = prompt("enter your marks : ");
    marks = Number(marks);

    if(marks === 100 && marks <=80){
        console.log("A");
    }

    else if(marks >= 70 && marks <= 89){
        console.log("B");
    }

    else if(marks >= 60 && marks <= 69){
        console.log("C")
    }

    else if(marks >= 50 && marks <= 59){
        console.log("D");
    }

    else if (marks === 0 && marks <= 49){
        console.log("F");
    }

    else{
        console.log("Invalid Input!");
    }

}