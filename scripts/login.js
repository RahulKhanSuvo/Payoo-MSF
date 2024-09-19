function getInputs(id) {
  return document.getElementById(id).value;
}
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const number = getInputs("number-input");
    const pin = getInputs("pin-input");
    if (pin === "1234" && number === "012345678") {
      window.location.href = "home.html";
    } else {
      alert("failed to login please provide right info");
    }
  });
