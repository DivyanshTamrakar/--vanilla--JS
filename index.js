var button = document.querySelector(".but");
let input = document.querySelector("#text-input");
let output = document.querySelector(".output")



button.addEventListener("click", Callbackfunction);


function Callbackfunction() {
  console.log("click");
  console.log(input.value)
  output.innerText = input.value
}
