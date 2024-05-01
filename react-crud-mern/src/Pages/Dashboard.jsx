import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import DisplayBlogs from "../components/DisplayBlogs/DisplayBlogs";

const Dashboard = ({ pageToDisplay, pageDisplay, postList, editPost }) => {
  return (
    <div>
      <Header />
      <div className="d-flex w-100 h-100">
        <Sidebar pageToDisplay={pageToDisplay} pageDisplay={pageDisplay} />
        <DisplayBlogs postList={postList} editPost={editPost}/>
      </div>
    </div>
  );
};

export default Dashboard;
