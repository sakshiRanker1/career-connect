import "./App.css";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from "./components/PostJob";
import SaveJobs from "./components/SaveJobs";
import Discussion from "./components/Discussion";
import ErrorPage from "./components/ErrorPage";
import ApplyJobs from "./components/ApplyJobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/career-connect/">
            <Route index element={<Home />} />
            <Route path="/career-connect/home" element={<Home />} />
            <Route path="/career-connect/jobs" element={<Jobs />} />
            <Route path="/career-connect/post-job" element={<PostJob />} />
            <Route path="/career-connect/apply-jobs" element={<ApplyJobs />} />
            <Route path="/career-connect/saved-job" element={<SaveJobs />} />
            <Route path="/career-connect/discussion" element={<Discussion />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
