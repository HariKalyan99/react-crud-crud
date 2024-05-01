import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import CreateBlogs from "../components/CreateBlogs/CreateBlogs";

const CreateBlog = ({ pageToDisplay, pageDisplay, addPost }) => {
  return (
    <div>
      <Header />
      <div className="d-flex w-100 h-100 " style={{backgroundColor: "#4e7e90"}}>
        <Sidebar pageToDisplay={pageToDisplay} pageDisplay={pageDisplay} />
        <CreateBlogs addPost={addPost}/>
      </div>
    </div>
  );
};

export default CreateBlog;
