export class Toolbox {

// gets a random number 0 --> array.length, given an array

getRandomindex (array){
    return Math.floor( 
        Math.random() * array.length
);
} 

// gets a random intem from an array

 getRandomItem(array) {
    let randomIndex = getRandomindex(array);
    return array[randomIndex];
}

shuffleArray(array) {

    let shuffled = []

    let howManyTimesToPush = array.length

    shuffled.push(array[0]);

    for(let i = 0; i < howManyTimesToPush; i++){
        let randomIndex = this.getRandomItem();
        let removed = array.splice(randomIndex,1) // start, 
        console.log(removed)
        shuffled.push(removed[0])
    }
    return shuffled;
}

}