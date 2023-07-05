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
console.log(b);

// 1 deep copy
