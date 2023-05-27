import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamCalendar from "./pages/TeamCalendar";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamId" element={<TeamCalendar />} />
        {/* <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/meteors" element={<MeteorsPage />} />
          <Route path="/meteors/:idMeteorite" element={<MeteoritePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

