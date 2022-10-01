import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";

export default function App() {
  return (
    <Router>
      {/* Routes는 주어진 Route, 즉 URL을 보면서 찾고 찾으면 해당 Component Render함 */}
      <Routes>
        {/*Home으로 가는 Route "/"이고, 해당 Route, 즉 URL에 있는 사람에게 Home Component 보여줌*/}
        <Route path="/" element={<Home />} />
        {/* <Route path="/">{<Home />}</Route> */}
      </Routes>
    </Router>
  );
}
