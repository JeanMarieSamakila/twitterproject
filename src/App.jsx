import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Tweet from "./Tweet";
import Post from "./post";
import Post3 from "./Post3";
import Trends from "./Trends";
import React from "react";
import Profile from "./Profile";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <div className=" flex justify-center mt- mb-8 ">
        <div id="container1" className=" w-1/5 h-screen space-x-2">
          <div className="p-6">
            {/* <Routes>
              <Route path="/profil" element= {<Profile/>} />
            </Routes> */}
            <Link>
              <Sidebar src="images/Twitter.svg" />
            </Link>
            <Link to="/Home">
              <Sidebar src="images/Home-Fill.svg" name="Home" />
            </Link>
            <Link>
              <Sidebar src="images/Explore.svg" name="Explore" />
            </Link>
            <Link>
              <Sidebar src="images/Notifications.svg" name="Notification" />
            </Link>
            <Link>
              <Sidebar src="images/Messages.svg" name="Messages" />
            </Link>
            <Link>
              <Sidebar src="images/Bookmarks.svg" name="Bookmarks" />
            </Link>
            <Link>
              <Sidebar src="images/Lists.svg" name="Listes" />
            </Link>
            
            <Link to="/Profil">
              <Sidebar src="images/Profile.svg" name="Profile" />
            </Link>
            <Link>
              <Sidebar src="images/More.svg" name="More" />
            </Link>
          </div>
          <section className=" text-white font-bold">
            <button className="justify-center ml-5 bg-blue-500 rounded-3xl h-12 w-48">
              Tweet
            </button>
          </section>
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
        <div className="w-2/5 border-l border-r">
          
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profil" element={<Profile />} />
          </Routes>
          {/* <Profile /> */}
        </div>
        <div className=" w-1/5 h-screen p-4">
          <div class=" bg-gray-900 flex w-50 h-10 rounded-3xl border-solid border-black p-2 ">
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
