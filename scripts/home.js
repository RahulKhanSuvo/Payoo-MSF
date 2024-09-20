document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputs("input-add-money");
    const pinNumber = getInputs("add-pin-input");
    if (isNaN(addMoney)) {
      alert("failed to invalid input");
      return;
    }
    if (pinNumber === 1234) {
      const balance = parseFloat(getInnerTextValue("account-balance"));
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
      const p = document.createElement("p");
      p.innerText = `Added ${addMoney}TK. Balance:${newBalance}`;
      document.getElementById("transaction-container").appendChild(p);
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
    if (isNaN(cashOutMoney)) {
      alert("failed to invalid input");
      return;
    }
    if (cashOutPin === 1234) {
      const balance = parseFloat(getInnerTextValue("account-balance"));
      if (cashOutMoney > balance) {
        alert("You do not have enough money");
        return;
      }
      const newBalance = balance - cashOutMoney;
      document.getElementById("account-balance").innerText = newBalance;
      const p = document.createElement("p");
      p.innerText = `Cash out ${cashOutMoney}TK. Balance:${newBalance}`;
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("failed to cashOut");
    }
  });
document.getElementById("add-toggle").addEventListener("click", function () {
  showSectionById("add-money-form");
});
document
  .getElementById("cashOut-toggle")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });
document
  .getElementById("transaction-toggle")
  .addEventListener("click", function () {
    showSectionById("transaction");
  });
