var users = [
  {
    name: "이성계",
    id: "taejo",
    password: "qwer1234",
    telnumber: "01011111111",
  },
  {
    name: "이방과",
    id: "jungjong",
    password: "qwer1234",
    telnumber: "01022222222",
  },
  {
    name: "이방원",
    id: "taejong",
    password: "qwer1234",
    telnumber: "01033333333",
  },
];

var userNameElement = document.getElementById("user-name");
var userIdElement = document.getElementById("user-id");
var userPasswordElement = document.getElementById("user-password");
var userPasswordCheckElement = document.getElementById("user-password-check");
var userTelNumberElement = document.getElementById("user-tel-number");
var authNumberElement = document.getElementById("auth-number");

var userNameMessageElement = document.getElementById("user-name-message");
var userIdMessageElement = document.getElementById("user-id-message");
var userPasswordMessageElement = document.getElementById(
  "user-password-message"
);
var userPasswordCheckMessageElement = document.getElementById(
  "user-password-check-message"
);
var userTelNumberMessageElement = document.getElementById(
  "user-tel-number-message"
);
var authNumberMessageElement = document.getElementById("auth-number-message");

var userIdButtonElement = document.getElementById("user-id-button");
var userTelNumberButtonElement = document.getElementById(
  "user-tel-number-button"
);
var authNumberButtonElement = document.getElementById("auth-number-button");
var signUpButtonElement = document.getElementById("sign-up-button");

function userIdInputHandler(event) {
  var userId = event.target.value;

  userIdMessageElement.textContent = "";
  userIdMessageElement.className = "message";
  // if (userId) userIdButtonElement.className = "input-button active";
  // else userIdButtonElement.className = "input-button disable";

  userIdButtonElement.className =
    "input-button " + (userId ? "active" : "disable");
}

function userPasswordInputHandler(event) {
  var pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
  var userPassword = event.target.value;

  userPasswordMessageElement.textContent = "";
  userPasswordMessageElement.className = "message";

  var isMatched = pattern.test(userPassword);
  if (!isMatched && userPassword) {
    userPasswordMessageElement.textContent = "8~13자, 영문, 숫자 포함";
    userPasswordMessageElement.className = "message error";
  }
}
function userPasswordCheckInputHandler(event) {
  var userPasswordCheck = event.target.value;
  var userPassword = userPasswordElement.value;
  var isEqual = userPassword === userPasswordCheck;
  if (isEqual || !userPasswordCheck) {
    userPasswordCheckMessageElement.textContent = "비밀번호가 일치합니다.";
    userPasswordCheckMessageElement.className = "message primary";
  } else {
    userPasswordCheckMessageElement.textContent =
      "비밀번호가 일치하지 않습니다.";
    userPasswordCheckMessageElement.className = "message error";
  }
}

function userIdButtonClickHandler(event) {
  var userId = userIdElement.value;
  if (!userId) return;

  var existedId = users.some(function (item, index) {
    return item.id === userId;
  });
  if (existedId) {
    userIdMessageElement.textContent = "이미 존재하는 ID입니다.";
    userIdMessageElement.className = "message error";
    return;
  } else {
    userIdMessageElement.textContent = "사용가능한 ID입니다.";
    userIdMessageElement.className = "message primary";
  }
}

userIdElement.addEventListener("input", userIdInputHandler);
userPasswordElement.addEventListener("input", userPasswordInputHandler);
userPasswordCheckElement.addEventListener(
  "input",
  userPasswordCheckInputHandler
);
userIdButtonElement.addEventListener("click", userIdButtonClickHandler);
