io= require('process');
console.log("Enter a number between 0 and 6 to find weekday");

let input= process.argv[2];

if(input==0)
{
    console.log("Sunday");
}
else if(input==1)
{
    console.log("Monday");
}
else if(input==2)
{
    console.log("Tueday");
}
else if(input==3)
{
    console.log("Wednesday");
}
else if(input==4)
{
    console.log("Thruday");
}
else if(input==5)
{
    console.log("Friday");
}
else if(input==6)
{
    console.log("Saturday");
}
else
{
    console.log("Please enter value between 0 to 6");
}