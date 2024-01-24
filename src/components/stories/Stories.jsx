import React from "react";
import "./stories.css";


const Stories = () => {
  const storiesProfiles = [
    {
      "name": "cat1",
      "photo": "/images/profile-photos/cat-looking-at-toy.jpg",
    },
    {
      "name": "cat2",
      "photo": "/images/profile-photos/cat-running.jpg",
    },
    {
      "name": "cat3",
      "photo": "/images/profile-photos/cat-sitting-down.jpg",
    },
    {
      "name": "cat4",
      "photo": "/images/profile-photos/cat-wrapped-in-blanket.jpg",
    },
    {
      "name": "cat5",
      "photo": "/images/profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat6",
      "photo": "/images/profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat7",
      "photo": "/images/profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat8",
      "photo": "/images/profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat1",
      "photo": "/images/profile-photos/sphynx-cat.jpg",
    },
    {
      "name": "cat2",
      "photo": "/images/profile-photos/sphynx-cat.jpg",
    },
    {
      "name": "cat3",
      "photo": "/images/profile-photos/sphynx-cat.jpg",
    }
  ]

  const handleRightScroll = () =>{
    const right = document.querySelector(".stories-container");
    right.scrollBy(200,0);
  }

  const handleLeftScroll = () =>{
    const left = document.querySelector(".stories-container");
    left.scrollBy(-200,0);
  }


  return (
    <div className="stories-parent-container">
      <button className="left-btn scroll-btn" onClick={handleLeftScroll}>{"<"}</button>
      <div className="stories-container">
        {storiesProfiles.map((profile) => (
          <div className="story-container-gradient">
            <div className="story-container">
              <img className="profile-photos" src={profile.photo} alt="cat" />
              
              <p className="profile-names">{profile.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="right-btn scroll-btn" onClick={handleRightScroll}>{">"}</button>
    </div>
  )
}

export default Stories;