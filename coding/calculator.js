// exports.calculate

var expression = "+ 3 4";
// console.log(expression);

function calculate(expression) {
  // console.log(expression);
  const expressionOperands = expression.split(" ");
  const expressionArray = [];
  let operator = [];
  for (let i = 0; i < expressionOperands.length; i++) {
    // console.log(expressionOperands[i]);
    let expressionOperand = expressionOperands[i];
    console.log("number", expressionOperand);
    if (!isNaN(expressionOperand)) {
      console.log("check number or not", isNaN(expressionOperand));
      expressionArray.push(Number(expressionOperand));
      console.log("nan", expressionArray);
    } else {
      operator.push(expressionOperand);
    }
  }
  const operands2 = expressionArray.pop();
  const operands1 = expressionArray.pop();
  const testOperator = operator.pop();

  console.log("operands", testOperator);
  const traditionExpression = `${operands1} ${testOperator} ${operands2}`;
  expressionArray.push(traditionExpression);
  console.log("tra", traditionExpression);

  console.log("before Pop", expressionArray);
  
  return eval(expressionArray.pop());
}

console.log(calculate(expression));
