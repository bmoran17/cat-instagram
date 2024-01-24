import React from "react";
import "./sidebar.css"

const Sidebar = () => {
  const topSidebarItems = [ 
    {
      "name": "Home",
      "src": "/images/icons/home-icon.png",
      "alt": "home icon"
    },
    {
      "name": "Search",
      "src": "/images/icons/search-icon.png",
      "alt": "search icon"
    },
    {
      "name": "Explore",
      "src": "/images/icons/compass-icon.png",
      "alt": "explore icon"
    },
    {
      "name": "Reels",
      "src": "/images/icons/reels-icon.png",
      "alt": "reels icon"
    },
    {
      "name": "Messages",
      "src": "/images/icons/messages-icon.png",
      "alt": "messages icon"
    },
    {
      "name": "Notifications",
      "src": "/images/icons/heart-icon.png",
      "alt": "notifications icon"
    },
    {
      "name": "Create",
      "src": "/images/icons/add-new-icon.png",
      "alt": "create icon"
    },
    {
      "name": "Profile",
      "src": "/images/icons/user-profile-photo.png",
      "alt": "profile photo"
    }
  ]

  const bottomSidebarItems = [
    {
      "name": "Threads",
      "src": "/images/icons/threads-icon.png",
      "alt": "threads icon"
    },
    {
      "name": "More",
      "src": "/images/icons/more-icon.png",
      "alt": "more icon"
    }
  ]

  return (
    <div className="sidebar">
      <p className="header">Instagram</p>

      <div className="top-items">
        {topSidebarItems.map((item) => (
          <div className="item-container"> 
            <img className="icon-image" src={item.src} alt={item.src} />
            <p className="name">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="bottom-items">
        {bottomSidebarItems.map((item) => (
          <div className="item-container"> 
            <img className="icon-image" src={item.src} alt={item.src} />
            <p className="name">{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Sidebar;