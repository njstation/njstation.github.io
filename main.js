let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Input your pass:");
  if (myName!=="Jian") {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Jian's Homepage";
  }
}

myButton.onclick = function () {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to Jian's Homepage";
}
