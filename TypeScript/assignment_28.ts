// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Japan",
    "Australia",
    "Brazil",
    "China",
    "Pakistan"
];

console.log("List of countries:");
countries.forEach(country => console.log(country));
