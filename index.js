let result = document.getElementById("result");

function display(value) {
  if (result.value === "0") {
    result.value = value;
  } else {
    result.value += value;
  }
}

function clearScreen() {
  result.value = "0";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
  if (result.value === "") {
    result.value = "0";
  }
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}

function percentage(percentageValue) {
  let currentValue = parseFloat(result.value);
  if (!isNaN(currentValue) && currentValue !== 0 && !isNaN(percentageValue)) {
    let percentageAmount = currentValue * (percentageValue / 100);
    result.value = currentValue + percentageAmount;
  }
}
