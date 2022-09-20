// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocal) {
    if (pickupLocal > 42) {
        return pickupLocal - 42;
    } 
      else {
        return 42 - pickupLocal;
      }
    }

function distanceFromHqInFeet(currentBlock) {
    //distanceFromHqInBlocks(blocksInFeet);

    let blocksInFeet = distanceFromHqInBlocks(currentBlock);
    return blocksInFeet * 264;
}

function distanceTravelledInFeet(start, destination) {
    if ( start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock)

    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        return (distance - 400) * .02;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}