// import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import JobListing from "./components/JobListings/dashboard.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";
import TrafficGrowthJD from "./components/JobListings/TrafficGrowthJD.tsx";
import GTA6LeakGP from "./components/JobListings/GTA6LeakGP.tsx";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<JobListing />} />
          <Route path="/Home/JobDescription" element={<TrafficGrowthJD />} />
          <Route path="/gta6-leak" element={<GTA6LeakGP />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
