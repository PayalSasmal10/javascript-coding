const companies = [
  { name: "Google", category: "Product based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product based", start: 1999, end: 2007 },
  { name: "Deloitte", category: "Service based", start: 1989, end: 2010 },
  { name: "MIndtree", category: "Service based", start: 1989, end: 2010 },
];

const ages = [12, 70, 54, 34, 89, 90, 43, 76, 33, 88, 20];

// 1.forEach

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

console.log(
  "ForEachStarting.................................................."
);

//Normal Function
/*companies.forEach(function(company, index){
    console.log(company.name);
});*/

// using arrow function
companies.forEach((company, index) => console.log(company));

console.log("FilterStarting.....................................................................");

//2.filter

for (let f = 0; f < ages.length; f++) {
  if (ages[f] >= 21) {
    console.log(ages[f]);
  }
}

console.log("........................................................................");
ages.forEach((age) => {if(age >= 21) console.log(age)});

console.log("........................................................................");
const fAge = ages.filter((age) => age >= 40);
console.log(fAge);

console.log("........................................................................");

// only need service based company
const cFilter = companies.filter((company) => company.category === "Service based");
console.log(cFilter);

console.log("MapStarting........................................................................");

const mMap = companies.map((company, index) => {return `${company.name} ${company.category}`});
console.log(mMap);

console.log("SortStarting........................................................................");

// sort
const storted = companies.sort((c1,c2) => (c1.start > c2.start) ? 1 : -1);
console.log(storted);

console.log("........................................................................");

const ageStorted = ages.sort((a,b) => (a - b));
console.log(ageStorted);


console.log("ReduceStarting........................................................................");

//reduce

let total = 0;
for (let k=0; k<ages.length;k++){
  total += ages[k]; 
}

console.log(total);

console.log("........................................................................");

const rSum = ages.reduce((age, total=0) => total+age);
console.log(rSum);