let result = document.getElementById("result");

function clearScreen() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
  if (result.value === "") {
    result.value = "0";
  }
}

function display(value) {
  if (result.value === "0") {
    result.value = value;
  } else {
    result.value += value;
  }
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}

let totalPercentage;
function percentage(per) {
  let finalLength = 0;
  let myString = result.value.toString();
  for (let i = myString.length; i > 0; i--) {
    if (
      myString[i] == "+" ||
      myString[i] == "-" ||
      myString[i] == "*" ||
      myString[i] == "/"
    ) {
      finalLength = i;
      break;
    }
  }

  let slicedString = myString.substr(0, finalLength);

  let symbolSliced = myString[finalLength];

  let otherSlicedString = myString.substr(finalLength + 1, myString.length);

  let slicedSum = eval(slicedString);

  console.log(symbolSliced);
  if (symbolSliced == "+") {
    totalPercentage = slicedSum + (slicedSum * otherSlicedString) / 100;
  } else if (symbolSliced == "-") {
    totalPercentage = slicedSum - (slicedSum * otherSlicedString) / 100;
  } else if (symbolSliced == "*") {
    totalPercentage = (slicedSum * otherSlicedString) / 100;
  } else {
    totalPercentage = slicedSum / (otherSlicedString / 100);
  }

  result.value = totalPercentage;
}

// Expressing the most recent operator entered to overwrite/ update the previous operator entered mistakenly or intentionally.
function display(value) {
  const operators = ["+", "-", "*", "/", "."];
  const lastOperator = result.value.slice(-1);

  if (operators.includes(lastOperator) && operators.includes(value)) {
    result.value = result.value.slice(0, -1) + value;
  } else {
    if (result.value === "0") {
      result.value = value;
    } else {
      result.value += value;
    }
  }
}
