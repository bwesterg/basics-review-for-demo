const companies = [
    {name: "Company 1", category: "Finance", start: 1981, end: 2003},
    {name: "Company 2", category: "Retail", start: 1992, end: 2008},
    {name: "Company 3", category: "Auto", start: 1999, end: 2007},
    {name: "Company 4", category: "Retail", start: 1989, end: 2010},
    {name: "Company 5", category: "Technology", start: 2009, end: 2014},
];

const ages = [33, 12, 20, 16, 5];

    // for(let i = 0; i < companies.length; i++) {
    //     console.log(companies[i])
    // }

// forEach 

// companies.forEach(function(company) {
//     console.log(company)
// }); 
// filter 

let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}

console.log(canDrink)
// map 
// sort 
// reduce 

