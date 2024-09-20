document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputs("input-add-money");
    const pinNumber = getInputs("add-pin-input");
    if (pinNumber === 1234) {
      const balance = parseFloat(getInnerTextValue("account-balance"));
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money");
    }
  });
document
  .getElementById("cashout-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutMoney = getInputs("input-cashout-money");
    const cashOutPin = getInputs("cashout-pin-input");
    if (cashOutPin === 1234) {
      const balance = parseFloat(getInnerTextValue("account-balance"));
      const newBalance = balance - cashOutMoney;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });
