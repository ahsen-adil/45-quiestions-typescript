//39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"lahore, pakistan"
//call your functipon with at least three city_country pairs, and print te value thet's returned.

function cityCountry(city: string, country: string): string {
    const formattedString = `"${city.toLowerCase()}, ${country.toLowerCase()}"`;
    return formattedString;
  }
  const lahorePakistan = cityCountry("Lahore", "Pakistan");
  const tokyoJapan = cityCountry("Tokyo", "Japan");
  const londonEngland = cityCountry("London", "England");
  console.log(lahorePakistan);
  console.log(tokyoJapan);  
  console.log(londonEngland); 
  