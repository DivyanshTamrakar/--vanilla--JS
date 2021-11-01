var button = document.querySelector(".but");
let input = document.querySelector("#text-input");




button.addEventListener("click", Callbackfunction);



function Callbackfunction() {
  console.log("click");
  console.log(input.value)
}
