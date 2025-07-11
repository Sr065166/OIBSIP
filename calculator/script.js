const display = document.getElementById('display');
let answer = '';

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  if (display.value) {
    if (display.value.startsWith('-')) {
      display.value = display.value.slice(1);
    } else {
      display.value = '-' + display.value;
    }
  }
}

function useAns() {
  display.value += answer;
}

function calculate() {
  try {
    answer = eval(display.value);
    display.value = answer;
  } catch (error) {
    display.value = 'Error';
  }
}
