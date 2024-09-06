// task-1
var arr=['red','green','blue','yellow','orange'];
for(var index in arr){
 console.log( "index of "+arr[index]+" = "+index)}
// task-2
 var animals = ['cat','dog','rabbit','elephant','lion'];
 for(var animal of animals){console.log(animal);}
// // task-3
  var numbers=[2,4,6,8,10];let sum=0;let i=0;
 while(i < numbers.length){ sum=sum+numbers[i];i++;}
 console.log(sum);
// task-4
const arr4 = [1, 2, 3, 4, 5];let j= arr4.length - 1;
var s="";
do {
    s=s+arr4[j] + " "; j--; } 
    while (j>= 0);console.log(s);
// // task-5
var num5 = [3, 6, 9, 12, 15, 18];var k = 0;let l = 0;
do {
    if (num5[l]%2==0) { k += num5[l]; }
    l++; } while (l < num5.length); 
console.log(k);
// // task-6
var arr6=['a', 'b', 'c', 'd', 'e'];
var n = arr6.length - 1;
 space=" ";while(n >= 0){
    space= space+arr6[n]+" ";
    n--;
}console.log(space)
