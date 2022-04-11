//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let matched = [];
    let dog_arr = Array.from(dog_string);
    let names = Array.from(dog_names);
    let setA = new Set(dog_arr);
    let setB = new Set(names);
    for(let i of setB){
        if(setA.has(i)){
            matched.push(i)
            console.log("Matched dog_name")
        }
        else{
            console.log("No Matches")
        }
    }
}
console.log(findWords());

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
given_arr.splice(1, 1, "even index");
given_arr.splice(3,1,"even index");
given_arr.splice(5,1,"even index");
console.log(given_arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]