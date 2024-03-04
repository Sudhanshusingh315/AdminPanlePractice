import "./App.css";
import Home from "./components/page/home/Home";
import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </>
  );
}

export default App;
