import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <div className="app-container">
      <Header />
      <Sidebar />
      <Footer />
    </div>
      
    </>
  );
}

export default App;