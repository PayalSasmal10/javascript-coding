const n = 4;
let fValue = 0,
  sValue = 1,
  nNextTerm;

console.log("Fibonacci series..........");

for (let i = 1; i <=n; i++) {
  console.log(fValue);
  nNextTerm = fValue + sValue;
  fValue=sValue;
  sValue = nNextTerm;
}
