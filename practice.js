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
      -  90-100, A
      -  70-89, B
      -  60-69, C
      -  50-59, D
      -  0-49, F
    */

    let marks = prompt("enter your marks : ");
    let grade;
    marks = Number(marks);

    if (marks >= 90 && marks <= 100){
        grade = "A";
    }
    else if (marks >= 70 && marks <=89){
        grade = "B";
    }
    else if (marks >= 60 && marks <=69 ){
        grade = "C";
    }
    else if (marks >= 50 && marks <= 59 ){
        grade = "D";
    }
    else if (marks >= 0 && marks <= 49 ){
        grade = "F";
    }
    else{
        console.log("Invalid Input!");
    }

    console.log(`According to yours marks ${marks} your grade is ${grade}`);

}