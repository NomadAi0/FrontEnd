// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListing from "./components/JobListings/dashboard.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobListing />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
