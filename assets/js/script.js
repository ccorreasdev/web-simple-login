const registerBtn = document.querySelector("#register-btn");
const loginBtn = document.querySelector("#login-btn");
const loginRegisterLayout = document.querySelector("#login-register-layout");

registerBtn.addEventListener("click", (e) => {
  console.log("Hola");
  const scrollValue =
    loginRegisterLayout.scrollWidth - loginRegisterLayout.clientWidth;
  loginRegisterLayout.scrollTo({
    left: scrollValue,
    behavior: "smooth",
  });
});

loginBtn.addEventListener("click", (e) => {
  console.log("Hola");
  const scrollValue =
    loginRegisterLayout.scrollWidth - loginRegisterLayout.clientWidth;
  loginRegisterLayout.scrollTo({
    left: 0,
    behavior: "smooth",
  });
});

loginRegisterLayout.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault();
  }
});
