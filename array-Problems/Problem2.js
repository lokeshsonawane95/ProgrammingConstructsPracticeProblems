//declaration of array
let randomNumberArray= new Array();
//array length is 10
while(randomNumberArray.length<10)
{
    //generating random numbers
    randomNumber= Math.floor(Math.random()*1000);
    //if number is greater than 99 and less than 1000
    if(randomNumber>=100 && randomNumber<=999)
    {
        randomNumberArray.push(randomNumber);
    }
}
console.log(randomNumberArray.sort())
console.log("Second Smallest number is : " + randomNumberArray[1])
console.log("Second Largest number is : " + randomNumberArray[randomNumberArray.length - 2])