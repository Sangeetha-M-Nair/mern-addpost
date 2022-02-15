import "./App.css";
import PostList from "./PostList";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>
        Mern stack crud applications
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} exact />
          <Route path="/addpost" element={<AddPost />} exact />
          <Route path="/editpost" element={<EditPost />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
