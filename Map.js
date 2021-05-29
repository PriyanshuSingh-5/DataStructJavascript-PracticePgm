//1. Roll a die,
//find the number between 1 to 6
 //Repeat the Die roll and find the result each time
 //Store the result in a dictionary
 //Repeat till any one of the number has reached 10 times
// Find the number that reached maximum times and the one that was for minimum times
     
let map = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
let valuecount = 0;
while(valuecount < 10){
    let dice = Math.floor(Math.random() * 10) % 6 + 1;
    valuecount = map.get(dice);
    map.set(dice, ++valuecount);
}
console.log(map);
console.log("Minumim dice count:"+Math.min(...map.values()));
console.log("Maximum dice value:"+Math.max(...map.values()));

//2. Program to generate a birth month of 50 individuals
   //between the year 92 & 93. Find all the individuals having birthdays
   //in the same month. Store it to finally print.

   let map2 = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
   // gets count of individual in each month
   for (let i = 1; i <= 50; i++) {
       let month = (Math.floor(Math.random() * 100) % 12) + 1;
       let valueCount = map.get(month);
       map.set(month, ++valueCount);
   }
   console.log("month and count of individuals birthday: ")
   console.log(map);