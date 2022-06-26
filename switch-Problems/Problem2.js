io= require('console-read-write');

async function main()
{
    console.log("Enter a day of week");
    
    let n= await io.read();
    
    switch(n)
    {
        case "sunday":
            console.log("sunday");
            break;
        case "monday":
            console.log("monday");
            break;
        case "tuesday":
            console.log("tuesday");
            break;
        case "wednesday":
            console.log("wednesday");
            break;
        case "thrusday":
            console.log("thrusday");
            break;
        case "friday":
            console.log("friday");
            break;
        case "saturday":
            console.log("saturday");
            break;
        default:
            console.log("Please enter correct week day");
    }
}
main();