let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Cheers " + myName + ", welcome to Jian's Homepage";
  }
}

myButton.onclick = function () {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Cheers " + storedName + ", welcome to Jian's Homepage";
}
