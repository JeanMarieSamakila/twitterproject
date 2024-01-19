import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Tweet from "./Tweet";
import Post from "./post";
import Post3 from "./Post3";
import Trends from "./Trends";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profil";

function App() {
  return (
    <>
      <div className="bg-black flex justify-center">
        <div id="container1" className=" w-1/5 h-screen border space-x-2">
          <div className="p-6">
            <Sidebar src="images/Twitter.svg" />
            <Sidebar src="images/Home-Fill.svg" name="Home" />
            <Sidebar src="images/Explore.svg" name="Explore" />
            <Sidebar src="images/Notifications.svg" name="Notification" />
            <Sidebar src="images/Messages.svg" name="Messages" />
            <Sidebar src="images/Bookmarks.svg" name="Bookmarks" />
            <Sidebar src="images/Lists.svg" name="Listes" />
            <a
              href="https://twitter.com/SamakilaM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sidebar src="images/Profile.svg" name="Profile" />
            </a>
            <Sidebar src="images/More.svg" name="More" />
          </div>
          <div className=" text-white font-bold">
            <button className="bg-blue-500 rounded-3xl h-12 w-32 ml-6">Tweet</button>
          </div>
          <div id="test" className="flex space-x-5">
            <img src="images/Profile-Photo.svg" alt="" />
            <div>
              <h2 className="font-bold m-2 text-white">Bradley Ortiz</h2>
              <p className="text-white">@bradley_</p>
              <img src="images/Private.svg" alt="" />
              <img src="images/More-2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-2/5 border-b border-t">
          <Header />
          <Tweet />
          <Post />
          <Post3 />
          {/* <Profile/> */}
        </div>
        <div className=" w-1/5 h-screen border-t border-b border-l border-r p-4">
          <div class=" bg-gray-900 flex w-80 h-10 rounded-3xl border-solid border-black p-2 ">
            <div>
              <img className="w-6" src="images/Search.svg" alt="" />
            </div>
            <div>
              <input
                className=" bg-gray-900 w-28 h-6"
                type="text"
                placeholder="Serach Twitter"
              />
            </div>
          </div>
          <Trends />
        </div>
      </div>
    </>
  );
}

export default App;
