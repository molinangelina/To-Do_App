//============ Exercise #1 ============//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
function findWords(){
    let dog_names = ["Max","HAS","PuRple","dog"];
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";

    if (dog_names.some(name => dog_string.includes(name))) {
        console.log("Matched dog_name");
    }
    else {
        console.log("No Matches");
    }
}; // returns "Matched dog_name"

console.log(findWords());
/* 
returns undefined, idk how to fix it. 
Ik it's bc nothing is being passed in the function 
but idk what to pass in when everything I need is already in the code block
*/

// Another solution that doesn't return undefined but doesn't use "console.log "No Matches"" either.
function findWords2(dog_string2, dog_names2) {
    // syntax: for (variable ; condition(how long do u want this to run for) ; incrementor) { codeblock }
    for (let i = 0; i != dog_names2.length; i++) {
       let dog_name2 = dog_names2[i];
       if (dog_string2.indexOf(dog_name2) != - 1) {
         return "Matched " + dog_name2;
       }
    }
    return "No Matches"; 
}

let match = findWords2("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"]);
console.log(match);

//Call method here with parameters

//============ Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvens(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(arr.splice(i, 1, 'even index'));
        }
      }
};

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));


// soluton that works but it's not a function
let a_list = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

// iterate from last element to first
for (let i = a_list.length - 1; i >= 0; i--) {
  // remove element if index is odd
  if (i % 2 == 0)
  a_list.splice(i, 1, 'even index');
}
console.log(a_list);


//======== CODE WARS ========

// link: https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
//======= Problem #1 =======
function multiply(a, b){
    return a * b;
  }
console.log(multiply(2,2))

// link: https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
//======= Problem #2 =======
function greet() {
    return "hello world!";
}
console.log(greet())