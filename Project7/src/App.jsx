import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { PostListProvider } from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container d-flex">
        <Sidebar />
        <div className="content flex-grow-1">
          <Header />
          <main className="container-fluid">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;