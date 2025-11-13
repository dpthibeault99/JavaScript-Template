import { Toolbox } from "./code2.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");


let myFavoriteletters = ["a","b","c"];

// gets a random number 0 --> array.length, given an array

function getRandomindex (array){
    return Math.floor( 
        Math.random() * array.length
);
} 

// gets a random intem from an array

function getRandomItem(array) {
    let randomIndex = getRandomindex(array);
    return array[randomIndex];
}

// let counts = [0,0,0]



for(let i = 0; i <100; i++){
//     let randomindex = getRandomindex(myFavoriteletters);
//     counts[randomindex] = counts [randomindex]


// console.log(counts);
// ^^^ This code never worked ^^^

//  console.log(Toolbox.getRandomItem(myFavoriteletters));
// }

// console.log(Toolbox);


// let shuffled = Toolbox.shuffledArray(myFavoriteletters)
// console.log(shuffled)

// let hexArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
// let getRandomCharacter () {
    
//     "#"+ Math.random(hexArray)+ Math.random(hexArray)+ Math.random(hexArray)+ Math.random(hexArray)+ Math.random(hexArray)+ Math.random(hexArray)
// ^^^ Also never worked ^^^

getRandomColor () {

    let color = "#";

    let chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

    for(let i = 0; i <6; i++)

        color += this.getRandomColor(chars)

    // let char1 = this.getRandomItem(chars);

    colors +=char1;

    return color;


}