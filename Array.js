//1.a Generate 10 random 3 digit number

let numbers = [];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.forEach(p => console.log(p));
let temp = 0;
for(let j = 0; j<10; j++)
{
    for(let i =0;i<10-j;i++)
    {
        if(numbers[i]<numbers[i+1])
        {
            temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }
    }
}
{

//1.b Store 10 random numbers into array    
let num1= Math.floor(Math.random()*1000);
let num2= Math.floor(Math.random()*1000);
let num3= Math.floor(Math.random()*1000);
let num4= Math.floor(Math.random()*1000);
let num5= Math.floor(Math.random()*1000);
let num6= Math.floor(Math.random()*1000);
let num7= Math.floor(Math.random()*1000);
let num8= Math.floor(Math.random()*1000);
let num9= Math.floor(Math.random()*1000);
let num10= Math.floor(Math.random()*1000);
let numArr=[num1,num2,num3,num4,num5,num6,num7,num8,num8,num9,num10];



//1.c Second largest and second smallest without sorting
console.log("second maximum number is : "+numbers[1]+" second min number is "+numbers[numbers.length-2]);

//2. Second largest and second smallest with sorting
console.log("Second largest element is: "+GetSecondLargest(numArr));
console.log("Second minimun number is "+GetSecondMinimum(numArr));
function GetSecondLargest(arr){
    arr.sort(function(a,b){return a-b}); 
           return arr[arr.length-2];  
    }  
    function GetSecondMinimum(arr){
        arr.sort(function(a,b){return a-b});
               return arr[1];  
        }  
    }

//3. Prime factorization
 //Printing the prime factors of a number
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number=Number(number);
let result= new Array();
console.log("Prime factors are: "+GetPrimeFactors(number));
function GetPrimeFactors(num) {
    for (let i = 2; i <= num; i++)
    {
      while (isPrime(i) && num % i === 0) 
      {
         result.push(i);
        num /= i;
      }
    }
    return result;
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0)
       return false;
    }
    return true;
  }

 //4. Sum of three integer adds to Zero 
let arr = [1,-1,2,0,-3];
arr.sort((a,b)=>a-b);
let found=false;
for (let i=0; i<arr.length-1; i++) 
    { 
        let l=i+1;
        let r = arr.length - 1; 
        let x = arr[i]; 
        while (i+1 < r) 
        { 
            if (x + arr[l] + arr[r] == 0) 
            { 
                console.log(x);
                console.log(arr[l]);
                console.log(arr[r]);
                console.log("-----");
                l++; 
                r--; 
                found = true; 
            } 
   
            else if (x + arr[l] + arr[r] < 0) 
                l++; 
  

            else
                r--; 
        } 
    } 
  
    if (found == false) 
        console.log("No such triplets") 
 
  //5. Find digit that are repeated twice like 11,22
  console.log("Numbers with same digits are : ")
for(let i = 1; i<100;i++)
{
    let ones = i%10;
    let tens = (i - ones)/10;
    if(ones == tens)
    console.log(i);
}