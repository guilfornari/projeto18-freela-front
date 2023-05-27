import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/meteors" element={<MeteorsPage />} />
          <Route path="/meteors/:idMeteorite" element={<MeteoritePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

