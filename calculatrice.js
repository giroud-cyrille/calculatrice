let operation = "";
let operators = ['/', '*', '-', '+'];

$(document).ready(function() {
    $(".touche").click(onClickNumber);
    $(".clear").click(clear);
    $(".result").click(calcul);
});

function onClickNumber() {

    if(operators.includes(this.innerHTML) && operation.length == 0) {
        alert("Impossible d'utiliser un opérateur en premiere entrée");
        return;
    }

    if(operators.includes(operation.charAt(operation.length - 1)) && operators.includes(this.innerHTML)) {
        operation = operation.slice(0, operation.length - 1);
    }

    operation += this.innerHTML;
    $(".resultat").html(operation);
}

function clear() {
    operation = "";
    $(".resultat").html("");
}

function calcul() {
    let separatr = [];
    let result = 0;
    let operator;

    for (var i = 0; i < operation.length; i++) {
        if(operators.includes(operation[i])) {
            separatr = operation.split(operation[i]);
            operator = operation[i];
        }
      }

      switch(operator){
          case '+':
              result = parseInt(separatr[0],10) + parseInt(separatr[1], 10);
              break;
          case '-':
            result = parseInt(separatr[0],10) - parseInt(separatr[1], 10);
              break;
          case '/':
            result = parseInt(separatr[0],10) / parseInt(separatr[1], 10);
              break;
          case '*':
            result = parseInt(separatr[0],10) * parseInt(separatr[1], 10);
              break;
        
      }

      $(".resultat").html(result);
      operation = result.toString();
}