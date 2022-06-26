io= require('console-read-write');

async function main()
{
    console.log("Press 1 for converting feet to inch\nPress 2 for converting inch to feet\nPress 3 for converting feet to meter\nPress 4 for converting meter to feet");
    
    let n= parseInt(await io.read());
    switch(n)
    {
        
        case 1:
            console.log("Enter feets to be converted to inches");
            let feet= parseInt(await io.read());
            
            console.log("inches: "+feet*12);
            break;
        
        case 2:
            console.log("Enter inches to be converted to feet");
            let inches= parseInt(await io.read());
            
            console.log("feet: "+inches/12);
            break;
        
        case 3:
            console.log("Enter meters to be converted to feet");
            let meters= parseInt(await io.read());
            
            console.log("feet: "+meters*3.28084);
            break;
        
         case 4:
            console.log("Enter feets to be converted to meters");
            let feets= parseInt(await io.read());
            
             console.log("meters: "+feets/3.28084);
             break;
        
        default:
            console.log("Please enter corrct input");
            break;
    }
}
main();