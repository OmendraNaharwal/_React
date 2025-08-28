import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Createpost from "./components/Createpost";
import Post from "./components/Post";
import {Postlist} from "./components/Postlist";
import { useState } from "react";
import {PostListProvider} from "./store/post-list-store";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab = {setSelectedTab}/>
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
    </PostListProvider>
  );
}

export default App;