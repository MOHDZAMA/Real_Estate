// const url = 'https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en';
// const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
// const url = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';
// const url = 'https://bayut.p.rapidapi.com/agencies/list?query=patriot&hitsPerPage=25&page=0&lang=en';
// const url = 'https://bayut.p.rapidapi.com/agencies/get-listings?agencySlug=patriot-real-estate-7737&hitsPerPage=25&page=0&lang=en&sort=price-asc&categorySlug=commerical-properties';

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
