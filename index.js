var button = document.querySelector(".but");
let input = document.querySelector("#text-input");
let output = document.querySelector(".output");

// const constructURL = (text) => {
//   return (
//     "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" +
//     "?" +
//     "text=" +
//     text
//   );
// };

// button.addEventListener("click", Callbackfunction);

// function Callbackfunction() {
//   console.log("click");
//   console.log(input.value);

//   fetch(constructURL(input.value))
//     .then((res) => res.json())
//     .then((response) => console.log(response.content.text));
// }

const radious = [1, 2, 3, 4];

const area = (rad) => Math.PI*rad*rad;
const Diameter = (rad) => 2*rad;
const circumference = (rad) => 2*Math.PI*rad;

const calcuate = (radious, logic) => {
  let output = [];

  for (let i = 0; i < radious.length; i++) {
    output.push(logic(radious[i]));
  }

  return output;
};


console.log(calcuate(radious,area));
console.log(calcuate(radious,Diameter));
console.log(calcuate(radious,circumference));
