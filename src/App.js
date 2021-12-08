import NavBar from "./components/NavBar";
import Headings from "./components/Headings";
import AttractiveContainer from "./components/AttractiveContainer";
import Featured from "./components/Featured";
import Post from "./components/Post";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Headings />
      <AttractiveContainer />
      <Featured />
      <Post />
    </div>
  );
}

export default App;
