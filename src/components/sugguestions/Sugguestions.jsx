import React from "react";
import "./sugguestions.css";

const Suggestions = () => {
  const friendSugguestions = [
    {
      "photo": "/images/suggestions-profile-photos/cat-green-eyes.jpg",
      "username": "cat12",
      "description": "Suggested for you"
    },
    {
      "photo": "/images/suggestions-profile-photos/cheshire-cat.jpg",
      "username": "cat13",
      "description": "Followed by cattt15"
    },
    {
      "photo": "/images/suggestions-profile-photos/grey-cat.jpg",
      "username": "cat14",
      "description": "New to Instagram"
    },
    {
      "photo": "/images/suggestions-profile-photos/orange-cat.jpg",
      "username": "cat15",
      "description": "Suggested for you"
    },
    {
      "photo": "/images/suggestions-profile-photos/shorthair-cat.jpg",
      "username": "cat16",
      "description": "Suggested for you"
    }
  ]

  return (
    <div className="suggestions-container">

      <div className="switch-container">
        <img className="account-profile-photo" src="/images/suggestions-profile-photos/cheshire-cat.jpg" alt="cat"/>
        <div className="account-info">
          <p className="username">loki_the_cat</p> 
          <p className="name">Loki Moran</p>
        </div>
        <p className="switch-text">Switch</p>
      </div>

      <div className="suggestions-header-container">
        <p className="header">Suggested for you</p>
        <p className="see-all">See All</p>
      </div>

      {friendSugguestions.map((suggestion) => (
        <div className="friend-suggestion">
          <img className="suggestion-profile-photo" src={suggestion.photo} alt=""/>
          <div className="suggestion-info-container"> 
            <p className="suggestion-username">{suggestion.username}</p>
            <p className="suggestion-description"> {suggestion.description}</p>
          </div>
          <div className="follow-text">Follow</div>
        </div>
      ))}

      <div className="extra-container">
        <div className="line1">About · Help · Press · API · Jobs · Privacy · Terms ·</div>
        <div className="line2">Locations · Language · Meta Verified</div>
        <div className="copyright">&#169; 2024 INSTAGRAM FROM META</div>
      </div> 
    </div>
  )
}

export default Suggestions;