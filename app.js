const display = document.getElementById('display');

// Adiciona números ou operadores ao visor
function appendToDisplay(input) {
  display.value += input;
}

// Limpa tudo
function clearDisplay() {
  display.value = "";
}

// Deleta o último caractere
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Realiza o cálculo
function calculate() {
  try {
    // eval() interpreta a string como código matemático
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
    setTimeout(clearDisplay, 1500); // Limpa o erro após 1.5s
  }
}