//reverse string
// function reverse(str) {
//   let reverse = "";
//   for (char of str) {
//     reverse = char + reverse;
//   }
//   return reverse;
// }

// console.log(reverse("yallah ya"));

// -- using building functions --

// function reverse(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverse("yallah ya"));

// function reverseInt(n) {
//   return (reverse = n.toString().split("").reverse().join(""));
// }
// console.log(reverseInt(51));

// find the max char

function maxChar(str){
    const charMap = {}
    for(let char of str){
        if(charMap[char]){
            charMap[char ]=charMap[char]+1
        }else{
            charMap[char] = 1
            
        }
    }
}
