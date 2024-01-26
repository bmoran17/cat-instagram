import React from "react";
import "./stories.css";


const Stories = () => {
  const storiesProfiles = [ 
    {
      "name": "cat1",
      "photo": "/images/stories-profile-photos/cat-looking-at-toy.jpg",
    },
    {
      "name": "cat2",
      "photo": "/images/stories-profile-photos/cat-running.jpg",
    },
    {
      "name": "cat3",
      "photo": "/images/stories-profile-photos/cat-sitting-down.jpg",
    },
    {
      "name": "cat4",
      "photo": "/images/stories-profile-photos/cat-wrapped-in-blanket.jpg",
    },
    {
      "name": "cat5",
      "photo": "/images/stories-profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat6",
      "photo": "/images/stories-profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat7",
      "photo": "/images/stories-profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat8",
      "photo": "/images/stories-profile-photos/gray-cat-laying-down.jpg",
    },
    {
      "name": "cat1",
      "photo": "/images/stories-profile-photos/sphynx-cat.jpg",
    },
    {
      "name": "cat2",
      "photo": "/images/stories-profile-photos/sphynx-cat.jpg",
    },
    {
      "name": "cat3",
      "photo": "/images/stories-profile-photos/sphynx-cat.jpg",
    }
  ]

  const handleRightScroll = (e) =>{
    document.querySelector(".stories-container").scrollLeft += 200;
    e.preventDefault()
  }

  const handleLeftScroll = (e) =>{
    document.querySelector(".stories-container").scrollLeft -= 200;
    e.preventDefault()
  }

  return (
    <div className="stories-parent-container">
      <div id="left">
        <button className="scroll-btn" onClick={handleLeftScroll}>{"<"}</button>
      </div>
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
      <div id="right">
        <button className="scroll-btn" onClick={handleRightScroll}>{">"}</button>
      </div>
    </div>
  )
}

export default Stories;