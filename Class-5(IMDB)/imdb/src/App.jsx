import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
useState


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [watchlist , setWatchList] = useState([])


  return (
    <>

    
   

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Movies watchlist={watchlist} />} />
          <Route path="/watchlist" element={<WatchList watchList={watchlist} />} />
          <Route path="/mood" element={<MoodSelector />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
