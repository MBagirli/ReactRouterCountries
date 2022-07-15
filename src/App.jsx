import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Region from "./Pages/Region";
import CountryDetails from "./Pages/CountryDetails";
import Default from "./UI/Default";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/:CountryId" element={<Region />} />
        <Route path="/:CountryId/:DetailsId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
