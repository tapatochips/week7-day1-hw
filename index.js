//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    // loop dog sting, if name is there return matched to console, otherwise return not matches
    // loops
    // For Loop Syntax-- for keyword(counter; condion; incremntation/deincrimentation)
    // Here the ; matters!
    for(i =0; i < dog_names.length; i++){
        console.log(dog_string.search(dog_names[i])>=0?"Matched dog_name": "No Matches")
    }
    }
findWords()
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (let i = 0; i<arr.length; i ++ ){
        if(i % 2 != 0 ){
            arr.splice(i, 1, "even index" )
        }
    }return arr
}
console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//code wars problems but in javascript:
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
function countSheep(num) {
    //mur is the noise sheep make lol, 
    let mur = "";
    for (let wool = 1; wool <= num; wool++) {
      mur += `${wool} sheep...`;
    }
    return mur;
  }
  
  console.log(countSheep(3));

  //https://www.codewars.com/kata/5881460c780e0dd207000084/train/javascript
  function spot(s1, s2) {
    const diff = [];
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diff.push(i);
      }
    }
    return diff;
  }
  console.log(spot("daniel", "daneil"));

  //i know i did 2 pretty easy problems, so im going to throw in another one or 2
  //https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
  function findOdd(arr) {
    const counts = {};
    for (const num of arr) {
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
    for (const [num, count] of Object.entries(counts)) {
      if (count % 2 !== 0) {
        return parseInt(num);
      }
    }
  }



  