let mapformonth= new Map();
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
for(let i = 1; i <= 50 ; i++)
{
    let month= Math.floor(Math.random() * 12) % 12;
    if(!mapformonth.has(monthArray[month]))
    {
        var arrayForElements= new Array();
        arrayForElements.push(i);
        mapformonth.set(monthArray[month],arrayForElements);
    }
    else
    {
        arrayForElements= mapformonth.get(monthArray[month]);
        arrayForElements.push(i);
        mapformonth.set(monthArray[month],arrayForElements);
    }
}
console.log(mapformonth);
for(let key of mapformonth.keys())
{
    let array1= mapformonth.get(key);
    let noOfElements= array1.length;
    console.log(noOfElements + " employees have birthday in " + key);
}