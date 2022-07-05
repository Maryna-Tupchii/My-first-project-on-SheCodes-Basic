function supportUkraine() {
  let name = prompt("What is your name?");
  let country = prompt("Where are you from, " + name + "?");
  alert("Thank you, " + name + ". Your support is appriciated!");
}
let supportButton = document.querySelector("button");
supportButton.addEventListener("click", supportUkraine);
