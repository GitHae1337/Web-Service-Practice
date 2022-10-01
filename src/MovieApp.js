import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";

export default function MovieApp() {
  return (
    <Router>
      {/* Routes는 주어진 Route, 즉 URL을 보면서 찾고 찾으면 해당 Component Render함 */}
      <Routes>
        {/*Home으로 가는 Route "/"이고, 해당 Route, 즉 URL에 있는 사람에게 Home Component 보여줌*/}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />

        {/* :id가 변화하는 값이라 이걸 useParams로 받음 */}
        <Route path="/movie/:id" element={<Detail />} />

        <Route path="/hello" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
}
