
io= require('console-read-write');

async function main()
{
    let checkForTriplet;
    console.log("Enter first number")
    let number1= parseInt(await io.read())
    console.log("Enter second number");
    let number2 = parseInt(await io.read())
    console.log("Enter thirsd number");
    let number3 = parseInt(await io.read())
    if((number1 + number2 + number3) == 0){
        console.log("Sum of three numbers is 0")
    }
    else{
        console.log("Sum of three numbers is not 0")
    }
}
main()