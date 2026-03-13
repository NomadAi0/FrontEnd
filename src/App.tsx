// import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import JobListing from "./components/JobListings/dashboard.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";
import TrafficGrowthJD from "./components/JobListings/TrafficGrowthJD.tsx";
import GTA6LeakGP from "./components/JobListings/GTA6LeakGP.tsx";
import PageTracker from "./analytics/PageTracker.tsx";
import WarBlog from "./components/NewsBlog/war.tsx";
import GTA6CodeLeak from "./components/NewsBlog/GTA6CodeLeak.tsx";
import AdOptOutBanner from "./components/AdOptOutBanner";
import CBSERickRoll from "./components/NewsBlog/CbseRickRoll.tsx";
import DataEntryACRT from "./components/JobListings/dataentryACRT.tsx";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AdOptOutBanner />
        <PageTracker />
        <Routes>
          <Route path="/" element={<JobListing />} />
          <Route path="/Home/JobDescription" element={<TrafficGrowthJD />} />
          <Route path="/gta6-leak" element={<GTA6LeakGP />} />
          <Route path="/war-blog" element={<WarBlog />} />
          <Route path="/gta6-code-leak" element={<GTA6CodeLeak />} />
          <Route path="/cbse-rick-roll" element={<CBSERickRoll />} />
          <Route path="/data-entry-acrt" element={<DataEntryACRT />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
