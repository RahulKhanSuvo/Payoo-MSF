document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "../index.html";
});
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = parseFloat(
      document.getElementById("input-add-money").value
    );
    const pinNumber = document.getElementById("add-pin-input").value;
    if (pinNumber === "1234") {
      const balance = parseFloat(
        document.getElementById("account-balance").innerText
      );
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money");
    }
  });
