import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./Components/ScrollToTop";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/home";
import Pathfinder from "./Pages/Pathfinder";
import PathfinderQuestions from "./Pages/PathfinderQuestions";
import PathfinderResults from "./Pages/PathfinderResults";
import FocusPal from "./Pages/FocusPal";
import Ideafit from "./Pages/Ideafit";
import FutureRadar from "./Pages/FutureRadar";
import EduMatch from "./Pages/EduMatch";
import NotFound from "./Pages/NotFound";
import TermsOfService from "./Pages/TermsOfService";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pathfinder" element={<Pathfinder />} />
            <Route path="/pathfinder/questions" element={<PathfinderQuestions />} />
            <Route path="/pathfinder/results" element={<PathfinderResults />} />
            <Route path="/focuspal" element={<FocusPal />} />
            <Route path="/ideafit" element={<Ideafit />} />
            <Route path="/futureradar" element={<FutureRadar />} />
            <Route path="/edumatch" element={<EduMatch />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
