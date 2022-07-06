function supportUkraine() {
  let name = prompt("What is your name?");
  if (name.length) {
    alert("Thank you, " + name + ". Your support is appriciated!");
  } else {
    alert(`Please, enter your name!`);
  }
}
let supportButton = document.querySelector("button");
supportButton.addEventListener("click", supportUkraine);
