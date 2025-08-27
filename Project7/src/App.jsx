import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Createpost from "./components/Createpost";
import Post from "./components/Post";
import Postlist from "./components/Postlist";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        {selectedTab === "Home" ? (
          <Postlist />
        ) : (
          <Createpost />
        )}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;