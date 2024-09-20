function getInputs(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInnerTextValue(id) {
  return document.getElementById(id).innerText;
}
function getHidden(id) {
  return document.getElementById(id).classList.add("hidden");
}
function showSectionById(id) {
  getHidden("add-money-form");
  getHidden("cash-out-form");
  getHidden("transaction");
  document.getElementById(id).classList.remove("hidden");
}
