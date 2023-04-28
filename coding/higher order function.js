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

console.log("ForEachStarting..................................................");

//Normal Function
/*companies.forEach(function(company, index){
    console.log(company.name);
});*/


// using arrow function
companies.forEach((company, index) => console.log(company));




