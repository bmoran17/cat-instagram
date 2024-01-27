import React from "react";
import "./posts.css";

const Posts = () => {
  const postsInfo = [
    {
      "username":"cat_01",
      "profilePhoto":"images/profile-photos/cat-looking-at-toy.jpg",
      "likes": 45,
      "caption": "MEOWWWWWWWW",
      "photoPosted": "images/posted-photos/cat-with-closed-eyes.jpg",
      "comments": 89,
      "timePosted": "• 24m"
    },
    {
      "username":"cat_02",
      "profilePhoto":"images/profile-photos/cat-running.jpg",
      "likes": 164,
      "caption": "MEOWWWWWWWW",
      "photoPosted": "images/posted-photos/cat-with-flower-collar.jpg",
      "comments": 5,
      "timePosted": "• 1h"
    },
    {
      "username":"cat_03",
      "profilePhoto":"images/profile-photos/cat-sitting-down.jpg",
      "likes": 3,
      "caption": "MEOWWWWWWWW",
      "photoPosted": "images/posted-photos/kitten-smelling-flower.jpg",
      "comments": 23,
      "timePosted": "• 2h"
    },
    {
      "username":"cat_04",
      "profilePhoto":"images/profile-photos/cat-wrapped-in-blanket.jpg",
      "likes": 796,
      "caption": "MEOWWWWWWWW",
      "photoPosted": "images/posted-photos/pink-blue-eyed-cat.jpg",
      "comments": 90,
      "timePosted": "• 3d"
    },
    {
      "username":"cat_05",
      "profilePhoto":"images/profile-photos/gray-cat-laying-down.jpg",
      "likes": 40,
      "caption": "• MEOWWWWWWWW",
      "photoPosted":"images/posted-photos/seated-cat.jpg",
      "comments": 3,
      "timePosted": "• 1w"
    }
  ]

  return (
    <div className="posts-container">
      {postsInfo.map((post) => (
      <div className="ind-post-container">
        <div className="post-header">
          <img className="post-profile-photo" src={post.profilePhoto} alt="cat" />
          <p className="post-profile-name">{post.username}</p>
          <p className="post-time-posted"> {post.timePosted}</p>
          <p className="options">• • •</p>
        </div>
        <img className="posted-image" src={post.photoPosted} alt="cat"/>
        <div className="bottom-post-info">
          <div className="icons">
            <div className="left-icons">
              <img src="images/icons/heart-icon.png" alt="like"/>
              <img src="images/icons/comment-icon.png" alt="comment"/>
              <img src="images/icons/send-icon.png" alt="send"/>
            </div>
            <div className="right-icons">
              <img src="images/icons/bookmark-icon.png" alt="bookmark" />
            </div>
          </div>
          <div className="caption-info">
            <p className="likes">{post.likes} likes</p>
            <p><span>{post.username} </span>{post.caption}</p>
            <p className="view-comments">View all {post.comments} comments</p>
            
            <div className="comment-section">
              <p className="add-comment">Add a comment...</p>
              <img className="emojis" src="images/icons/happy-face.png" alt="emojis" />
            </div>
          </div>
        </div>
      </div>
      ))}

    </div>
  )
}

export default Posts; 