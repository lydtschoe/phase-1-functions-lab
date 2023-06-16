//write the problem I want to solve...(looking for distance from hq in feet using a pick up location)
//what do I want to be returned (the distance in feet), 
//how do I calculate distance in feet with the information? (its blocks*264), 
//how do I get the blocks with the information? (using the first function that calculated distance using blocks),
//what does console.log do for me here???

function distanceFromHqInBlocks (pickUpLocation){ //pickUpLocation is the parameter bc ???
    const hqLocation = 42 //bc hq location is 42 and its a constant bc it doesn't change
       return Math.abs(pickUpLocation - hqLocation);
}
//so the distanceFromHqInBlocks is calculating the distance from pickup to hq and giving me distance in blocks


//to go from blocks to feet know that 1 block = 264
//so the distanceFromHqInFeet is distanceFromHqInBlocks multiplied by 264 which is the amt of feet in 1 block....

function distanceFromHqInFeet (pickUpLocation){ //I'm writing a function to calculate the distanceFromHqInFeet, is it confusing to use pickUpLocation as the parameter? 
    const blocks = distanceFromHqInBlocks(pickUpLocation) 
    const inFeet = blocks * 264
    return inFeet;
}   


//to get distanceTraveledInFeet I need to go from pickup to dropoff 

function distanceTravelledInFeet (pickUpBlock, dropOffBlock){
    const blocksTravelled = Math.abs (dropOffBlock - pickUpBlock)
    const travelledInFeet = blocksTravelled * 264
    return travelledInFeet;
}
//I want to get the distance traveled in feet, I need to know the blocks traveled and multiply it to feet
//to get blocks traveled, i need a function to make the number an absolute which google said was Math.abs and then my two parameters
//my two parameters are a pick up block and a drop off block....
//so if I give my console a pick up block and a drop off block number I'll get the distance traveled in feet....

//using the same pickup and dropoff I want to calculate the price for traveled distance
//information I have:
//400 feet is free
//between 400 and 2000 feet is 2 cents per foot
//between 2000 and 2500 feet its $25
//after 2500 there is a message that says cannot travel that far
//its the if then else thing...

function calculatesFarePrice (start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    let differenceOfTraveled = (distanceInFeet - 400) * 0.02
    
    if (distanceInFeet <= 400){
        console.log ("This Ride Is Free");
        return 0
    }else if (distanceInFeet  > 400 && distanceInFeet < 2000){
        console.log (distanceInFeet * 0.02)
        return differenceOfTraveled 
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        console.log ('$25')
        return 25
    }
    else if (distanceInFeet > 2500){
        console.log ('Cannot Travel That Far')
        return "cannot travel that far"
    }
}
    
   
       
       
