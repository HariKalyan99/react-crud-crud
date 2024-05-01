import { useEffect, useState } from 'react'
import './App.css'
import CreateBlog from './Pages/CreateBlog'
import Dashboard from './Pages/Dashboard'
import axios from 'axios';

function App() {
  const [pageDisplay, setPageDisplay] = useState("createBlog");
  const [postList, setPostList] = useState([]);
  const [addPostList, setAddPostList] = useState("");
  const [editPostList, setEditPostList] = useState("");

  const pageToDisplay = (pg) => {
    setPageDisplay(pg)
  }


  useEffect(() => {
    let controller = new AbortController();
    let {signal} = controller;
    const fetchInitialPosts = async() => {
      try{
        const {data} = await axios.get('http://localhost:8081/posts', signal);
        setPostList(data)
      }catch(error){
        console.log("Error", error)
      }
    }

    fetchInitialPosts();

    return () => {
      controller.abort();
    }
  }, [])


  useEffect(() => {
    const fetchAddPost = async({id,
      userId,
      title,
      body,
      tags,
      reactions}) => {
      try{
        const {data} = await axios.post('http://localhost:8081/posts', {
          id,
          userId,
          title,
          body,
          tags,
          reactions
        })
        setPostList([data, ...postList]);
      }catch(error) {
        console.log("Error", error)
      }
    }

    if(addPostList.title){
      fetchAddPost(addPostList);
    }
  }, [addPostList])

  const addPost = (post) => {
    setAddPostList(post)
  }


  useEffect(() => {
    const fetchEditPost = async({id,
      userId,
      title,
      body,
      tags,
      reactions}) => {
      try{
        const {data} = await axios.put(`http://localhost:8081/posts/${id}`, {
          userId,
          title,
          body,
          tags,
          reactions
        })
        console.log(data)
        // setPostList([data, ...postList]);
      }catch(error) {
        console.log("Error", error)
      }
    }

    if(editPostList.title){
      
      fetchEditPost(editPostList);
    }
  }, [editPostList])

  const editPost = (post) => {
    setEditPostList(post)
  }




  return (
   <div>
    {pageDisplay === "createBlog" ? <CreateBlog addPost={addPost} pageToDisplay={pageToDisplay} pageDisplay={pageDisplay}/> : <Dashboard editPost={editPost} pageToDisplay={pageToDisplay} pageDisplay={pageDisplay} postList={postList}/>
    }
   </div>
  )
}

export default App
