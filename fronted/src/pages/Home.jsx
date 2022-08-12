import React, { useRef, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import images from '../constants/images';
import { Pins, SideBar, UserProfile } from '../components';

function Home() {

  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});
  const scrollRef = useRef(null);

  const userInfo = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : localStorage.clear();
  // const user = {
  //   _id: userInfo.googleId,
  //   _type: 'user',
  //   username: userInfo.name,
  //   image: userInfo.imageUrl
  // }

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col transaction-height duration-75 ease-out'>
      <div className="hidden md:flex flex-initial h-screen hide-scrollbar">
        <SideBar />
      </div>
      <div className="md:hidden flex flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggle(true)} />
          <Link to="/">
            <img src={images.logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`user-profile/${userInfo?.googleId}`}>
            <img src={userInfo?.imageUrl ?? images.favicon} alt="profile" className="w-8" />
          </Link>
        </div>
      </div>
      <div className='flex-grow'>
        {toggle && (
          <div className='fixed top-0 bottom-0 left-0 w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in p-4 bg-cover'
          style={{backgroundImage: `url(${images.bgWhite})`}}>
            <div className='w-full flex items-center'>
              <HiX className='cursor-pointer w-8 h-8 mx-2 my-2 text-gray-700' onClick={() => setToggle(false)} />
            </div>
            <ul className='flex flex-col'>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={`link-${item}`} className='m-4 cursor-pointer flex justify-end'>
                  <a href={`#${item}`} className='text-base uppercase font-medium text-gray-500 ml-auto' onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
          <Routes>
            <Route path="/user-profile/:userId" element={<UserProfile />} />
            <Route path="/*" element={<Pins user={user && user} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home