let flag = true;
function convertToUpperCase() {
  handleSpaces();
  alertMsg("Text Converted to Upper Case");
  textArea.value = textArea.value.toUpperCase();
}
function convertToLowerCase() {
  handleSpaces();
  alertMsg("Text Converted to Lower Case");
  textArea.value = textArea.value.toLowerCase();
}

function handleSpaces() {
  alertMsg("Extra Spaces Removed");
  let newText = textArea.value.split(" ").filter((ele) => {
    if (ele != "" || ele != " ") {
      return ele;
    }
  });
  textArea.value = newText.join(" ");
}

function capatlizeWord(sentence) {
  handleSpaces();
  alertMsg("Text Converted to Camel Case");
  textArea.value = textArea.value
    .split(" ")
    .map((ele) => {
      return ele[0].toUpperCase() + ele.substring(1);
    })
    .join(" ");
}
const copyText = async () => {
  handleSpaces();
  alertMsg("Text Copied To ClipBoard");
  await navigator.clipboard.writeText(textArea.value);
};
const reversed = () => {
  handleSpaces();
  alertMsg("Sentence Reversed");
  textArea.value = textArea.value.split("").reverse("").join("");
};
function alertMsg(msg) {
  alertMsgBox.style.display = "block";
  alertMsgBox.innerHTML = msg;
  setTimeout(() => {
    alertMsgBox.style.display = "none";
  }, 2000);
}
function enableDarkMode(e) {
  let darkButtons = Array.from(buttons);
  if (e.target.checked) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#eee";
    navbar.classList.remove("bg-light");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("bg-secondary");
    navbar.classList.add("navbar-secondary");
    textArea.style.backgroundColor = "#777";
    textArea.style.color = "#EEE";
    for (let item of buttons) {
      item.classList.remove("btn-info");
      item.classList.add("btn-secondary");
    }
  } else {
    let lightButtons = Array.from(buttons);
    document.body.style.backgroundColor = "#eee";
    document.body.style.color = "#333";
    navbar.classList.remove("bg-secondary");
    navbar.classList.remove("navbar-secondary");
    navbar.classList.add("bg-light");
    navbar.classList.add("navbar-light");
    textArea.style.backgroundColor = "#EEE";
    textArea.style.color = "#777";
    for (let item of lightButtons) {
      item.classList.remove("btn-secondary");
      item.classList.add("btn-info");
    }
  }
}
function count() {
  let countWords = textArea.value.split(" ").length;
  let timeRequired = (countWords * 0.004).toFixed(3);
  wordCount.innerText = `Number Of Words: ${countWords}`;
  timeCount.innerText = `Time Required To Read: ${timeRequired} minutes`;
}
const btn1 = document.getElementsByClassName("btn1")[0];
const btn2 = document.getElementsByClassName("btn2")[0];
const btn3 = document.getElementsByClassName("btn3")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const btn5 = document.getElementsByClassName("btn5")[0];
const btn6 = document.getElementsByClassName("btn6")[0];
const wordCount = document.getElementById("wordCount");
const timeCount = document.getElementById("timeCount");
const alertMsgBox = document.getElementById("alertMsgBox");
const darkMode = document.getElementById("flexSwitchCheckDefault");
const textArea = document.getElementById("textInput");
const navbar = document.getElementsByClassName("navbar")[0];
const textContainer = document.getElementById("textContainer");
const buttons = textContainer.getElementsByTagName("button");

btn1.addEventListener("click", convertToUpperCase);
btn2.addEventListener("click", convertToLowerCase);
btn3.addEventListener("click", handleSpaces);
btn4.addEventListener("click", capatlizeWord);
btn5.addEventListener("click", copyText);
btn6.addEventListener("click", reversed);
darkMode.addEventListener("change", enableDarkMode);
textArea.addEventListener("input", count);
