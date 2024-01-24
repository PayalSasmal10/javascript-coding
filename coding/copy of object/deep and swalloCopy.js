let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

// shallow copy
let b = ingredients_list;
// b[1].list = ['rice'];
console.log(ingredients_list);
console.log(b);

// lets create a deep copy
let c = JSON.parse(JSON.stringify(ingredients_list));
console.log(c);
c[1].list = ["chicken", "flour", "water"];
console.log(c);
console.log(ingredients_list);

// 1 deep copy
let d = Object.assign([], ingredients_list);
console.log(d);
d[1].list = ['eggs', 'cake', 'water'];
console.log(d);
console.log(ingredients_list);