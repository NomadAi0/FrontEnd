// import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import JobListing from "./components/JobListings/dashboard.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<JobListing />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;