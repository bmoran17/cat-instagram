import React from "react";
import Stories from "../stories/Stories";
import Posts from "../posts/Posts";
import './page.css';

const Page = () => {
  return (
    <div className="page-container">
      <Stories />
      <Posts />
    </div>

  )
}
export default Page;