var userIdElement = document.getElementById("user-id");
var userPasswordElement = document.getElementById("user-password");
var MessageElement = document.getElementById("message");
var signInButtonElement = document.getElementById("sign-in-button");

function onSignInButtonClickHandler(event) {
  var userId = userIdElement.value;
  var userPassword = userPasswordElement.value;

  if (userId !== "qwer1234" || userPassword !== "1234") {
    MessageElement.textContent = "아이디 또는 비밀번호가 틀립니다.";
    return;
  } else {
    alert("로그인 성공!");
    MessageElement.textContent = "";
  }
}
function userIdKeyPressHandler(event) {
  if (event.key === "Enter") {
    userPasswordElement.focus();
  }
}

function userPasswordKeyPressHandler(event) {
  if (event.key === "Enter") {
    onSignInButtonClickHandler(event);
  }
}
signInButtonElement.addEventListener("click", onSignInButtonClickHandler);
userIdElement.addEventListener("keypress", userIdKeyPressHandler);
userPasswordElement.addEventListener("keypress", userPasswordKeyPressHandler);
