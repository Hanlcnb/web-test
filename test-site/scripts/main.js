let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/头像1.jpg") {
      myImage.setAttribute("src", "images/messi.jpg");
    } else {
      myImage.setAttribute("src", "images/头像1.jpg");
    }
  };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("title");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = 
        "Mozilla 酷毙了，" + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function () {
    setUserName();
};
