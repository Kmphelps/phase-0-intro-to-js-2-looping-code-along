// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
    function wrapGifts(gifts) {
        for (let i = 0; i < gifts.length; i++) {
            console.log(`Wrapped ${gifts[i]} and added a bow!`);
        }
        
        return gifts;
    }
        
    wrapGifts(gifts);



let names = ["Lisa", "Kaitlin", "Jan"];
let str = "surprise";

    function writeCards(names, str) {
        let cardArray = [];
        for (let i = 0; i < names.length; i++) {
           cardArray.push(`Thank you, ${names[i]}, for the wonderful ${str} gift!`);
            
        }
        
        return cardArray;
    }

    //let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function countDown(integer) {
        while (integer >= 0) {
          console.log(integer);
          integer--;
        } 
    }

    countDown(10);

