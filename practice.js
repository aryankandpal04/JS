// Practice

{
    //Q1 Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
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
    
}