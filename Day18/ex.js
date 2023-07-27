// Read the countries API using fetch and print the name of country, capital, languages, population and area.
// const countries = async () => {
//   try {
//     const response = await fetch("https://restcountries.com/v2/all");
//     const result = await response.json();
//     result.map((country) => console.log(country));
//     // {console.log({country: country.name,capital:country.capital,languages:country.languages,population:country.population,area:country.area})})
//   } catch (err) {
//     console.log("HEHE HE Y",err);
//   }
// };

// countries();

// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//total weight of cats
// const cats = async () => {
//   try {
//     const response = await fetch("https://api.thecatapi.com/v1/breeds");
//     const result = await response.json();
//     let sum = 0;
//     result.map((cat) => {
//       sum += parseFloat(cat.weight.metric.split("-")[0]);
//     });
//     console.log(sum);
//     return sum;
//   } catch (err) {
//     console.log(err);
//   }
// };

// cats();
//largest area
// const countries = async () => {
//   try {
//     const response = await fetch("https://restcountries.com/v2/all");
//     const result = await response.json();
//     let largestCountries = result.sort(
//       (a, b) => b.area - a.area
//     );
//     largestCountries = largestCountries.splice(0, 10);
//     let finalResults = largestCountries.map((country) =>
//       console.log({
//         name: country.name,
//         area: country.area,
//         population: country.population,
//       })
//     );
//     return finalResults;
//     // {console.log({country: country.name,capital:country.capital,languages:country.languages,population:country.population,area:country.area})})
//   } catch (err) {
//     console.log("HEHE HE Y", err);
//   }
// };

// countries();

//total number of languages
const countries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v2/all");
    const result = await response.json();

    
    let languagesArr = [];
    result.forEach((country) => {
      country.languages.forEach((language) => {
        if (languagesArr.indexOf(language.name) === -1) {
          languagesArr.push(language.name);
        }
      });
    });
    
    console.log(languagesArr.length);
    // {console.log({country: country.name,capital:country.capital,languages:country.languages,population:country.population,area:country.area})})
  } catch (err) {
    console.log("HEHE HE Y", err);
  }
};

countries();
