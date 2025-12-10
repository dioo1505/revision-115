let obj = {
  a: "banana",
  b: "kiwi",
  c: "watermelon",
  d: "fig",
};

let result = Object.values(obj);
let longWord = result.reduce((acc, curr) => acc.length < curr.length ? acc : curr);
console.log(longWord);


let xavo = "sovuq"
// if(xavo == "sovuq"){
//   console.log("Kiyin iplos");
// } else{
//   console.log("Bilganini qil");
// }

console.log(xavo == "issiq" ? "🤣" : "kiyin🥶");
