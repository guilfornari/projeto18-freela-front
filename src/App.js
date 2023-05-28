import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamCalendar from "./pages/TeamCalendar";
import CityFlights from "./pages/CityFlights";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamId" element={<TeamCalendar />} />
        <Route path="/city/:cityId" element={<CityFlights />} />
        {/*<Route path="/meteors" element={<MeteorsPage />} />
          <Route path="/meteors/:idMeteorite" element={<MeteoritePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

