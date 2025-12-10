let obj = {
  a: "banana",
  b: "kiwi",
  c: "watermelon",
  d: "fig",
};

let result = Object.values(obj);
let longWord = result.reduce((acc, curr) =>
  acc.length < curr.length ? acc : curr
);
console.log(longWord);

let xavo = "sovuq";
// if(xavo == "sovuq"){
//   console.log("Kiyin iplos");
// } else{
//   console.log("Bilganini qil");
// }

console.log(xavo == "issiq" ? "🤣" : "kiyin🥶");

// Objectdagi sonlarni 2 barobarga oshirib yangi object yarating
let numberObj = {
  a: 10,
  b: "hi",
  c: 3,
  d: true,
};

let ress = Object.values(numberObj)
let resss = ress.filter((item)=>typeof item == "number");
console.log(resss.map((item)=> item + 2));

console.log("Diyora💕");
