/*
Generator function is a special function in js. it returns a iteraion called generator.
Generator function uses yield kyeword to iterate
*/

function* startingFn() {

  for (let i = 0; i < 6; i++) {
    yield i;
  }
}

const it = startingFn();
for (const item of it) {
  console.log(item);
}
