// const url = 'https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en';
// const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
// const url = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';
// const url = 'https://bayut.p.rapidapi.com/agencies/list?query=patriot&hitsPerPage=25&page=0&lang=en';
// const url = 'https://bayut.p.rapidapi.com/agencies/get-listings?agencySlug=patriot-real-estate-7737&hitsPerPage=25&page=0&lang=en&sort=price-asc&categorySlug=commerical-properties';

// const fetchdata = async () => {
// const url =
// "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020";
// const options = {
// method: "GET",
// headers: {
// "X-RapidAPI-Key": "daef5ef785msha0b5f99402cc0b3p1f4d7djsn054165e0daf7",
// "X-RapidAPI-Host": "bayut.p.rapidapi.com",
// },
// };
//
// try {
// const response = await fetch(url, options);
// const result = await response.json();
// console.log(result.hits);
// } catch (error) {
// console.error(error);
// }
// };
import React from "react";

import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
